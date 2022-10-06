import {Routes, Route, useNavigate} from 'react-router-dom';
import React from 'react'
import './App.css';
import Navbar11 from './Component/Navbar1';
import Footer from './Component/footer';
function App1() {
    const Navigate  = useNavigate();
    const toNavbar1 = () => {
         Navigate('/Component/Navbar1');
    }
    const toNavbar2 = () => {
        Navigate('./Component/footer');
   }
  return (
     <React.Fragment>
            <button onClick={toNavbar1}> click to Navbar1</button>
            <button onClick={toNavbar2}> Footer</button>
            <Routes>
                <Route path="/Component/Navbar1" element={< Navbar11 />} />
                <Route path="/Component/footer" element={< Footer />} />
                
            </Routes>
     </React.Fragment>
  )
}

export default App1
