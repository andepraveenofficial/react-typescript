import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | undefined>(undefined);

  const stopTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
      interValRef.current = undefined; // Reset the ref to avoid any reference issues
    }
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <h1>I am MutableRef Component</h1>
      Hook Timer - {timer}
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
