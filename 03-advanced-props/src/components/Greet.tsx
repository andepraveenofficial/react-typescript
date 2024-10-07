import React from "react";

type Greetprops = {
  name: string;
  age?: number; // Optional Props
  isAvailable: boolean;
};

const Greet = (props: Greetprops) => {
  const { age = 20 } = props;

  return (
    <div>
      <h1>I am Greet Component</h1>
      <p>
        Your name is {props.name} and age {age}.
      </p>
      <p>
        {props.isAvailable ? "Yes, He is available" : "No, He is Not Available"}
      </p>
    </div>
  );
};

export default Greet;
