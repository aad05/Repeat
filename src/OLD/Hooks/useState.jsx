import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button>Add</button>
      <br />
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Minus</button>
    </div>
  );
};

export default UseState;
