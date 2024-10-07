import React from "react";
import { IPerson } from "../interfaces/person.interface";

type PersonListProps = {
  namesList: IPerson[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h1>I am PersonList Component</h1>
      <ul>
        {props.namesList.map((person) => (
          <li key={person.firstname}>
            <p>FirstName:{person.firstname}</p>
            <p>LastName:{person.lastname}</p>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
