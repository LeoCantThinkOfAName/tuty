import { FC, PropsWithChildren } from "react";

import { useSession } from "../services/useSession";

export const RouteGuard: FC<PropsWithChildren> = ({ children }) => {
  const session = useSession();

  if (session) return children;
  else return null;
};
