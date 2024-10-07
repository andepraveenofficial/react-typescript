import React from "react";

type Button1Props = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button1 = (props: Button1Props) => {
  return (
    <div>
      <h1>I am Button1 Component</h1>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
};

export default Button1;
