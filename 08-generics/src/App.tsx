import React from "react";
import List from "./components/generics/List";

const App: React.FC = () => {
  return (
    <div>
      <h1>I am App Component</h1>
      <hr />
      <List
        items={["bat", "mobile", "cricket"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          {
            name: "John",
            age: 30,
          },
          { name: "praveen", age: 28 },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};

export default App;
