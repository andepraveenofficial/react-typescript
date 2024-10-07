import React from "react";
import Greet from "./components/Greet";
import Greet1 from "./components/Greet1";
import Person from "./components/Person";
import { IPerson } from "./interfaces/person.interface";
import PersonList from "./components/PersonList";

const namesList: IPerson[] = [
  {
    firstname: "OneFirst",
    lastname: "OneLast",
  },
  {
    firstname: "TwoFirst",
    lastname: "TwoLast",
  },
  {
    firstname: "ThreeFirst",
    lastname: "ThreeLast",
  },
  {
    firstname: "FourFirst",
    lastname: "FourLast",
  },
];

const App: React.FC = () => {
  const person: IPerson = {
    firstname: "Praveen",
    lastname: "Ande",
  };
  return (
    <div>
      <h1>I am App Component</h1>
      <hr />
      <Greet name="Ande Praveen" age={28} />
      <hr />
      {/* <Greet1 name="Ande Praveen" age={28} isAvailable /> */}
      <Greet1 name="Ande Praveen" age={28} isAvailable={false} />
      <hr />
      <Person personDetails={person} />
      <hr />
      <PersonList namesList={namesList} />
      <hr />
    </div>
  );
};

export default App;
