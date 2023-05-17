
import './App.css';

/* use pages from page folder*********************************/ 
import Home from './pages/home';

/* use componet file */ 
// import Navbar from './components/navbar';
// import Textform from './components/textform';
// import Dharam from './components/dharam';
//import CountrySelect from './components/countrySelect'
//import SetCount from './components/SetCount';
//import About from './components/About';
//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//import Home from './components/Home';
//import Help from './components/Help';
function App() {
  return (
    <>

     <Home />
      {/* <Navbar /> */}
      {/* < Textform text="This Text is use with the help Props" /> */}
      {/* <Dharam /> */}

      {/* <CountrySelect /> */}
      {/* < SetCount /> */}
      {/* <About /> */}

      {/* <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Link to="/help" >Help Us Page</Link>
          < br />
          <Link to="/" >Home </Link>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Help" element={<Help />}></Route>
          </Routes>
        </div>
      </BrowserRouter> */}
    </>
  );
}


export default App;
