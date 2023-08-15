import { FC, PropsWithChildren, createContext, useContext } from "react";

import { Session } from "@supabase/supabase-js";
import { useSession } from "../services/useSession";

const AuthContext = createContext<Session | null>(null);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const session = useSession();

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
