import React from "react";
import { Counter } from "./components/class/Counter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

const App: React.FC = () => {
  return (
    <div>
      <h1>I am App Component</h1>
      <hr />
      <Counter message="Hello" />
      <hr />
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
};

export default App;
