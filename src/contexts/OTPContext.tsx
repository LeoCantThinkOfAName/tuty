import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import { OTPModal } from "../components/OTPModal";

const OTPContext = createContext<{
  toggle: () => void;
}>({
  toggle: () => {},
});

export const OTPProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <OTPContext.Provider value={{ toggle }}>
      {children}
      <OTPModal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </OTPContext.Provider>
  );
};

export const useOTPContext = () => useContext(OTPContext);
