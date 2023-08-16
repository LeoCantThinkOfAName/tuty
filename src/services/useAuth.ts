import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from "@supabase/supabase-js";

import { supabase } from "./supabaseClient";

export const useAuth = () => {
  const signup = async (credential: SignUpWithPasswordCredentials) => {
    await supabase.auth.signUp(credential);
  };
  const login = async (credential: SignInWithPasswordCredentials) => {};
  const logout = async () => {};

  return {
    signup,
    login,
    logout,
  };
};
