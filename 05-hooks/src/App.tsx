import React from "react";
import LoggedIn from "./components/state/LoggedIn";
import Counter from "./components/reducer/Counter";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import MutableRef from "./components/reference/MutableRef";
import DomRef from "./components/reference/DomRef";

const App: React.FC = () => {
  return (
    <div>
      <h1>I am App Component</h1>
      <hr />
      <h1>Local State</h1>
      <LoggedIn />
      <hr />
      <h1>Complex State</h1>
      <Counter />
      <hr />
      <h1>Context</h1>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <hr />
      <h1>Reference</h1>
      <MutableRef />
      <DomRef />
      <hr />
      <hr />
    </div>
  );
};

export default App;
