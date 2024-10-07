import React from "react";

type GreetProps = {
  name: string;
  age: number;
  isAvailable: boolean;
};

/*
const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>I am Greet Component</h1>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
       <p>
        {props.isAvailable ? "Yes, He is Available" : "No, He is Not Available"}
      </p>
    </div>
  );
};
*/

/*
// Destructuring on Fly
const Greet = ({ name, age }: GreetProps) => {
  return (
    <div>
      <h1>I am Greet Component</h1>
      <p>
        Hello {name}, you are {age} years old.
      </p>
       <p>
        {props.isAvailable ? "Yes, He is Available" : "No, He is Not Available"}
      </p>
    </div>
  );
};
*/
const Greet: React.FC<GreetProps> = (props) => {
  return (
    <div>
      <h1>I am Greet Component</h1>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
      <p>
        {props.isAvailable ? "Yes, He is Available" : "No, He is Not Available"}
      </p>
    </div>
  );
};

export default Greet;
