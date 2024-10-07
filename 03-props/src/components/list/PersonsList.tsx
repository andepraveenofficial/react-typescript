import React from "react";
import { IPerson } from "./interfaces/person.interface";
import Person from "./Person";

type PersonsListTypes = {
  namesList: IPerson[];
};

const PersonsList = (props: PersonsListTypes) => {
  return (
    <div>
      <h1>I am PersonsList Component</h1>
      <ul>
        {props.namesList.map((person, index) => (
          <li key={index}>
            <Person firstname={person.firstname} lastname={person.lastname} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonsList;
