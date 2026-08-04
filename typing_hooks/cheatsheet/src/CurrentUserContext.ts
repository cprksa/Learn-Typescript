import { createContext } from "react";
import { use } from "react";

export interface CurrentUserContextType {
  username: string;
}

export const CurrentUserContext = createContext<CurrentUserContextType | null>(
  null,
);

export const useCurrentUser = () => {
  const currentUserContext = use(CurrentUserContext);

  if (!currentUserContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext>",
    );
  }

  return currentUserContext;
};
