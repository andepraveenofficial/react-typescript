import React from "react";
import Greet from "./components/propsTypes/Greet";
import Person from "./components/list/Person";
import PersonsList from "./components/list/PersonsList";
import { namesList } from "./components/list/utils/personsList.util";
import Card from "./components/optional/Card";
import BeautyCard from "./components/styles/BeautyCard";

const App: React.FC = () => {
  return (
    <div>
      <h1>I am App Component</h1>
      <hr />
      <h1>PropsTypes</h1>
      <Greet name="Ande Praveen" age={28} isAvailable={false} />
      <Greet name="Ande Praveen" age={28} isAvailable />
      <hr />
      <hr />
      <h1>List Render</h1>
      <Person firstname="Praveen" lastname="Ande" />
      <hr />
      <PersonsList namesList={namesList} />
      <hr />
      <hr />
      <h1>Optional Props</h1>
      <Card name="Ande Praveen" age={28} isAvailable={false} />
      <Card name="Ande Praveen" age={28} isAvailable />
      <Card name="Ande Praveen" age={28} />{" "}
      {/* isAvailable is the optional prop*/}
      <hr />
      <hr />
      <h1>Style Props</h1>
      <BeautyCard
        name="Ande Praveen"
        age={28}
        isAvailable={false}
        styles={{
          border: "1px solid black",
          padding: "1rem",
          backgroundColor: "orange",
          boxShadow: "0 0 10px black",
          width: "600px",
        }}
      />
      <hr />
      <hr />
    </div>
  );
};

export default App;
