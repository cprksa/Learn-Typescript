import { useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import type { CurrentUserContextType } from "./CurrentUserContext";
import { MyComponent } from "./Components";

export default function App() {
  const [currentUser, setCurrentUser] = useState<CurrentUserContextType>({
    username: "filiptammergard",
  });

  return (
    <CurrentUserContext value={currentUser}>
      <MyComponent />
    </CurrentUserContext>
  );
}
