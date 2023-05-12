
import { React } from 'react';
import './App.css';

//import About from './components/About';
import Textform from './components/Textform';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Help from './components/Help';

// import About from './components/About';
// import Textform from './components/Textform';
 import Navbar from './components/Navbar';

// new file import for use usestate hook
//import SetCount from './components/SetCount';


function App() {


  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Help" element={<Help />}></Route>
        </Routes>
      </BrowserRouter>

      {/* < Textform head="Enter The Text Analyze" nextText="UseState Hook" /> */}
      {/* < SetCount  /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
