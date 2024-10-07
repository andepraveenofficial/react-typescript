import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <h1>I am Input Component</h1>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
};

export default Input;
