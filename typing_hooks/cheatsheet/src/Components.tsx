import { useCurrentUser } from "./CurrentUserContext";

export const MyComponent = () => {
  const currentUser = useCurrentUser();

  return <p>Name of User: {currentUser.username}.</p>;
};
