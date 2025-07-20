import { useEffect, useState } from "react";

function Hello() {
  const [message, setMessage] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return; // If stopped, do nothing

    const interval = setInterval(() => {
      setMessage(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup on unmount or when isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <h1>Current time: {message}</h1>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => setIsRunning(true)}>Start</button>
    </>
  );
}

export default Hello;
