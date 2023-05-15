import React, { useState } from 'react';

export default function Example() {

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  function countupdate() {
    setCount(count + 1)
  }


  return (

    <div>
      <div className="container">
        <p>Button  clicked  Count =  {count} times</p>

        <button className='btn btn-success' onClick={countupdate}> Click me </button>
      </div>
    </div>
  );
}