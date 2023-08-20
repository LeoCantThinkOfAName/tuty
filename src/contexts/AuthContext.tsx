import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import { AuthModal } from "../components/AuthModal";
import { OTPProvider } from "./OTPContext";
import { Session } from "@supabase/supabase-js";
import { useSession } from "../services/useSession";

const AuthContext = createContext<{
  session: Session | null;
  toggle: () => void;
}>({
  session: null,
  toggle: () => {},
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <OTPProvider>
      <AuthContext.Provider
        value={{
          session: session,
          toggle,
        }}
      >
        {children}
        <AuthModal isOpen={isOpen} onClose={toggle} />
      </AuthContext.Provider>
    </OTPProvider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
