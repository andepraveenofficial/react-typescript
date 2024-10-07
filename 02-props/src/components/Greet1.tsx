import React from "react";

type Greet1Props = {
  name: string;
  age: number;
  isAvailable: boolean;
};

const Greet1 = (props: Greet1Props) => {
  return (
    <div>
      <h1>I am Greet1 Component</h1>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
      <p>
        {props.isAvailable ? "Yes, He is Available" : "No, He is Not Available"}
      </p>
    </div>
  );
};

export default Greet1;
