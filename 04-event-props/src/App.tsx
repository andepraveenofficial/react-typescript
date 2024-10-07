import React from "react";
import Button from "./components/Button";
import Button1 from "./components/Button1";
import Input from "./components/Input";

const App: React.FC = () => {
  return (
    <div>
      <h1>I am App Component</h1>
      <hr />
      <Button
        handleClick={() => {
          console.log("Button Clicked");
        }}
      />
      <hr />
      <Button1 handleClick={(event) => console.log("Button Clicked", event)} />
      <hr />
      <Input
        handleChange={(event) => {
          console.log("Input typed", event);
        }}
        value=""
      />
    </div>
  );
};

export default App;
