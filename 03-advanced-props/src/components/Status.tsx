import React from "react";

/*
type StatusProps = {
  status: string;
};
*/

type StatusProps = {
  // Using Pipe
  status: "success" | "failure" | "error";
};

const Status = (props: StatusProps) => {
  return (
    <div>
      <h1>I am Status Component</h1>
      <hr />
      <p>Status: {props.status}</p>
    </div>
  );
};

export default Status;
