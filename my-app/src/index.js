import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Banner from './banner'
import Body from './Component/section';
import F1ter from './Component/footer';
import Navbar1 from './Component/Navbar1';
import Navbar2 from './Component/Navbar2';
import Navbar3 from './Component/Navbar3';
import Even from './Component/event1';  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <h1>hello</h1> it work */}
    <Navbar1 title = 'Say' speak = 'I love you'/>
    
    <Navbar2 speak='Hello welcome to props'/>
    <Banner/>
    <Body/>
    <F1ter/>
    <Navbar3/>
    <Even/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

