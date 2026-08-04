import { createContext } from "react";

export interface CurrentUserContextType {
  username: string;
}

export const CurrentUserContext = createContext<CurrentUserContextType | null>(
  null,
);
