import React from "react";
import { IPerson } from "./interfaces/person.interface";

type PersonTypes = IPerson;
const Person = (props: PersonTypes) => {
  return (
    <div>
      <h1>I am Person Component</h1>
      <p>My Firstname : {props.firstname}</p>
      <p>My Lastname : {props.lastname}</p>
    </div>
  );
};

export default Person;
