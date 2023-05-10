import React, { useState } from 'react';

export default function Example() {

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  function setcount()  {
         setCount(count + 1)
      }
  return (
    <div>
      <div class="container">
      <p>You clicked {count} times</p>

      <button onClick={setcount}> Click me </button>
    </div>
    </div>
  );
}