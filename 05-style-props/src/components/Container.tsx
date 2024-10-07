import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return (
    <div>
      <h1>I am Container Component</h1>
      <div style={props.styles}>Text content goes here</div>
    </div>
  );
};

export default Container;
