import React from "react";

type EventInputProps = {
  value: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const EventInput = (props: EventInputProps) => {
  return (
    <div>
      <h1>I am EventInput Component</h1>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
};

export default EventInput;
