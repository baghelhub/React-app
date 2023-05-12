
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Help from './components/Help';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Home />}>
                            <Link to="/help" className='mx-3' >Go Help Page</Link>

                        </Route>
                        <Route path="/Help" element={<Help />}></Route>
                    </Routes>
                </div>

                <div className='container'>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
