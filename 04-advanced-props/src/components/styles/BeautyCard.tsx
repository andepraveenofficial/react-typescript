import React from "react";

type BeautyCardProps = {
  name: string;
  age: number;
  styles: React.CSSProperties;
  isAvailable?: boolean; // Optional Props
};

const BeautyCard = (props: BeautyCardProps) => {
  const { isAvailable = true } = props;
  return (
    <div style={props.styles}>
      <h1>I am BeautyCard Component</h1>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
      <p>{isAvailable ? "Yes, He is Available" : "No, He is Not Available"}</p>
    </div>
  );
};

export default BeautyCard;
