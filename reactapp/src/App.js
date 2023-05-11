
import { React} from 'react';
import './App.css';
// import About from './components/About';
import Textform from './components/Textform';
import Navbar from './components/Navbar';

// new file import for use usestate hook
//import SetCount from './components/SetCount';

function App() {


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
