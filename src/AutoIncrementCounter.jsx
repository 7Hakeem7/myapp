import React, { useState, useEffect } from 'react';

function AutoIncrementCounter() {
  const [count, setCount] = useState(0);  // State to store counter value

  useEffect(() => {
    // Set up a timer to increment the count every second
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);  // Increment count
    }, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => clearInterval(intervalId);
  }, []);  // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h1>Auto Increment Counter: {count}</h1>
    </div>
  );
}

export default AutoIncrementCounter;
