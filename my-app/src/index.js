import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
// import Banner from './banner'
// import Body from './Component/section';
// import F1ter from './Component/footer';
// import Navbar1 from './Component/Navbar1';
// import Navbar2 from './Component/Navbar2';
// import Navbar3 from './Component/Navbar3';
//  import Even from './Component/event1';  
// import Boostrap from './Component/boostrap';
// import  Elseif  from './Component/elseif';
import App1 from './App1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <App1/>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

