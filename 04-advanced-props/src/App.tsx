import React from "react";
import BeautyCard from "./components/styles/BeautyCard";
import Heading from "./components/children/Heading";
import Container from "./components/children/Container";
import NormalButton from "./components/events/NormalButton";
import EventButton from "./components/events/EventButton";
import EventInput from "./components/events/EventInput";

const App: React.FC = () => {
  return (
    <div>
      <h1>I am App Component</h1>
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

      <h1>Children</h1>
      <Heading>I am Heading children</Heading>

      <hr />
      <Container>
        <Heading>I am Heading1</Heading>
        <Heading>I am Heading2</Heading>
        <Heading>I am Heading3</Heading>
      </Container>
      <hr />
      <hr />

      <h1>Event Props</h1>
      <NormalButton handleClick={() => console.log("button clicked")} />
      <hr />
      <EventButton
        handleClick={(event) => console.log("button clicked", event)}
      />
      <hr />
      <EventInput
        handleChange={(event) => {
          console.log("Input typed", event);
        }}
        value=""
      />
      <hr />
      <hr />
    </div>
  );
};

export default App;
