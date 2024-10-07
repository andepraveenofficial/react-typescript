import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <div>
      <h1>I am Container Component</h1>
      {props.children}
    </div>
  );
};

export default Container;
