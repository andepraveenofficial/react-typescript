import React from "react";
import Container from "./components/Container";

const App: React.FC = () => {
  return (
    <div>
      <h1>I am App Component</h1>
      <hr />
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          backgroundColor: "orange",
          boxShadow: "0 0 10px black",
        }}
      />
    </div>
  );
};

export default App;
