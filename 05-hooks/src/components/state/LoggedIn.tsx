import React, { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>I am LoggedIn Component</h1>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <p>User is {isLoggedIn ? "logged in" : "logged out"}</p>
    </div>
  );
};

export default LoggedIn;
