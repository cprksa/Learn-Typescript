import { use } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

export const MyComponent = () => {
  const currentUser = use(CurrentUserContext);

  return <p>Name: {currentUser?.username}.</p>;
};
