import React from "react";
import Greet from "./components/propsTypes/Greet";
import Person from "./components/list/Person";
import PersonsList from "./components/list/PersonsList";
import { namesList } from "./components/list/utils/personsList.util";
import Card from "./components/optional/Card";
import Status from "./components/static/Status";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Counter from "./components/class/Counter";

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
      <h1>Static Types</h1>
      {/* <Status status="not" /> */}
      {/* It gives Error */}
      <Status status="success" />
      <hr />
      <h1>Class</h1>
      <Counter message="Hello Counter" />
      <hr />
      <hr />
      <Private isLoggedIn={true} component={Profile} />
      <hr />
      <hr />
    </div>
  );
};

export default App;
