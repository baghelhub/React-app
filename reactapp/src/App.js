
import { React, useEffect } from 'react';
import './App.css';
//import About from './components/About';
import Textform from './components/Textform';
import Navbar from './components/Navbar';

// new file import for use usestate hook
//import SetCount from './components/SetCount';

function App() {

  useEffect(() => {

    console.log('useeffect run on every effect');

  })

  return (
    <>
      <Navbar />
      < Textform head="Enter The Text Analyze" nextText="UseState Hook" />
      {/* < SetCount  /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
