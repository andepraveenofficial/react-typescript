import React from "react";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";

const App: React.FC = () => {
  return (
    <div>
      <h1>I am App Component</h1>
      <hr />
      {/* <Status status="not" /> */}
      {/* It gives Error */}
      <Status status="success" />
      <hr />
      <Heading>I am Header children</Heading>
      <hr />
      <Oscar>
        <Heading>Oscar Award Heading</Heading>
      </Oscar>
      <hr />
      <Greet name="Ande Praveen" age={28} isAvailable />
      <Greet name="Ande Praveen" isAvailable /> {/* age is the optional prop*/}
      <hr />
    </div>
  );
};

export default App;
