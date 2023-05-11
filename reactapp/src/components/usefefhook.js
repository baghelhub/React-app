
import { React, useRef } from 'react';
import './App.css';
// import About from './components/About';

// new file import for use usestate hook
//import SetCount from './components/SetCount';

function usefefhook() {

  const userefs = useRef(null);
  function handleInput(){
    
      console.warn("use ref successfully run");
      //userefs.current.value = 1000;
      //userefs.current.focus();
      //userefs.current.style.color="red";
      //userefs.current.style.display="none";
      //userefs.current.style.backgroundColor="red";
    


      
    }

  return (
    <>
     <h1>Check UseRef</h1>
     <input type='text' ref={userefs} />
     <button onClick={handleInput}>Handle Input</button>
      {/* <Navbar /> */}
      {/* < Textform head="Enter The Text Analyze" nextText="UseState Hook" /> */}
      {/* < SetCount  /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
