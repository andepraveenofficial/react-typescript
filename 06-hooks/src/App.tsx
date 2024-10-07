import React from "react";
import LoggedIn from "./components/LoggedIn";
import User from "./components/User";
import Counter from "./components/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import User1 from "./components/context/User1";

const App: React.FC = () => {
  return (
    <div>
      <h1>I am App Component</h1>
      <hr />
      <LoggedIn />
      <hr />
      <User />
      <hr />
      <Counter />
      <hr />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <hr />
      <UserContextProvider>
        <User1 />
      </UserContextProvider>
    </div>
  );
};

export default App;
