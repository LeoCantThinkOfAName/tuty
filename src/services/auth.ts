import { AuthError } from "../utils/Errors";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
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
    if (this.timer) {
      toast({
        title: "Warning",
        status: "warning",
        description: "Don't spam the button",
      });
      return false;
    } else {
      this.setTimer();
      return true;
    }
  }

  public async signup(credential: SignUpWithPasswordCredentials) {
    if (this.shouldBlock()) return;

    return await supabase.auth
      .signUp(credential)
      .then((res) => {
        if (res.error) {
          throw new AuthError(res.error.message, res.error.status);
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.status) {
          toast({
            title: "Error",
            description: err.message,
            status: "error",
          });
          console.log(err.status);
        } else {
          toast({
            title: "Error",
            description: "general error",
            status: "error",
          });
        }
        // throw err;
      });
  }
}

const AuthService = new Auth();

export { AuthService };
