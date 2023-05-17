
import { React, useRef } from 'react';
import './App.css';
// import About from './components/About';

// new file import for use usestate hook
//import SetCount from './components/SetCount';

function App() {
  const userefs = useRef(null);
  function handleInput(){
    
      console.warn("use ref successfully run");
      userefs.current.value = "amit baghel";
      //userefs.current.focus();
      //userefs.current.style.color="red";
      //userefs.current.style.display="none";
      //userefs.current.style.backgroundColor="red";
       
    }

  return (
    <>
    <h3>Check UseRef</h3>
     <textarea ref={userefs} /><br/>
     {/*  add default value 
     <textarea ref={userefs} value='tyme' /><br/> */}
     <button className='btn btn-primary' onClick={handleInput}>Handle Input</button>
      {/* <Navbar /> */}
      {/* < Textform head="Enter The Text Analyze" nextText="UseState Hook" /> */}
      {/* < SetCount  /> */}
      {/* <About /> */}
      
    </>
  );
}

export default App;
