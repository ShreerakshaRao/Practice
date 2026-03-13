import React, { useState } from "react";

function Counter() {

  // Step 1: create state
  const [count, setCount] = useState(0);

  // Step 2: increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Step 3: decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // Step 4: reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;