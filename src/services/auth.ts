import { AuthError } from "../utils/Errors";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import i18next from "i18next";
import { supabase } from "./supabaseClient";
import { toast } from "../App";

class Auth {
  private static instance: Auth;
  private timer: NodeJS.Timeout | undefined;

  public static getInstance(): Auth {
    if (!Auth.instance) {
      Auth.instance = new Auth();
    }
    return Auth.instance;
  }

  private setTimer(): void {
    this.timer = setTimeout(() => (this.timer = undefined), 1000);
  }

  private shouldBlock(): boolean {
    clearTimeout(this.timer);
    if (this.timer) {
      toast({
        title: i18next.t("warning.title"),
        status: "warning",
        description: i18next.t("warning.spam"),
      });
      this.setTimer();
      return true;
    } else {
      this.setTimer();
      return false;
    }
  }

  public async signup(credential: SignUpWithPasswordCredentials) {
    if (this.shouldBlock()) throw new Error("Blocked");

    return await supabase.auth
      .signUp(credential)
      .then((res) => {
        if (res.error) {
          throw new AuthError(res.error.message, res.error.status);
        } else {
          toast({
            title: i18next.t("auth.signup.success.title", {
              email: res.data.user?.email,
            }),
            status: "success",
            description: i18next.t("auth.signup.success.description"),
          });
          return res;
        }
      })
      .catch((err) => {
        if (err instanceof AuthError) {
          toast({
            title: "Error",
            description: err.message,
            status: "error",
          });
          throw new AuthError(err.message, err.status);
        } else {
          toast({
            title: i18next.t("error.title", { status: err.status || err.code }),
            description: "general error",
            status: "error",
          });
          throw new Error(err.message);
        }
      });
  }
}

const AuthService = new Auth();

export { AuthService };
