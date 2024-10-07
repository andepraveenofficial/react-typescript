import React from "react";

type OscarProps = {
  children: React.ReactNode;
};

const Oscar = (props: OscarProps) => {
  return (
    <div>
      <h1>I am Oscar Component</h1>
      {props.children}
    </div>
  );
};

export default Oscar;
