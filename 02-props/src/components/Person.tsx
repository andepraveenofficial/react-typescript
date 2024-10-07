import React from "react";
import { IPerson } from "../interfaces/person.interface";

type PersonProps = {
  personDetails: IPerson;
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <h1>I am Person Component</h1>
      <p>FirstName : {props.personDetails.firstname}</p>
      <p>LastName : {props.personDetails.lastname}</p>
    </div>
  );
};

export default Person;
