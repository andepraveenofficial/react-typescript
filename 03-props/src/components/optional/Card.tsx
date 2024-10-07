import React from "react";

type CardProps = {
  name: string;
  age: number;
  isAvailable?: boolean; // Optional Props
};

const Card = (props: CardProps) => {
  const { isAvailable = true } = props;
  return (
    <div>
      <h1>I am Card Component</h1>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
      <p>{isAvailable ? "Yes, He is Available" : "No, He is Not Available"}</p>
    </div>
  );
};

export default Card;
