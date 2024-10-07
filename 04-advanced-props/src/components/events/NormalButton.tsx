import React from "react";

type NormalButtonProps = {
  handleClick: () => void;
};

const NormalButton = (props: NormalButtonProps) => {
  return (
    <div>
      <h1>I am NormalButton Component</h1>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
};

export default NormalButton;
