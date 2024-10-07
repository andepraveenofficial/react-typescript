import React from "react";

type ButtonProps = {
  handleClick: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <h1>I am Button Component</h1>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
};

export default Button;
