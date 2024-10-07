import React, { useContext } from "react";

import { UserContext } from "./UserContext";

const User1 = () => {
  const userContext = useContext(UserContext);

  if (userContext) {
    userContext.setUser({
      name: "Praveen",
      email: "praveen@gmail.com",
    });
  }

  return (
    <div>
      <h1>I am User Component</h1>

      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
};

export default User1;
