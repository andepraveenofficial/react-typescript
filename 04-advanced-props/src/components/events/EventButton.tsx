import React from "react";

type EventButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const EventButton = (props: EventButtonProps) => {
  return (
    <div>
      <h1>I am EventButton Component</h1>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
};

export default EventButton;
