import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Navbar from './ReusuableComponents/Navbar.js';
import Router from './Router.js'
import Footer from './ReusuableComponents/Footer.js';

import './Assets/css/App.css'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <span id="AppSpacer"/>
        <Router/>
      </div> 
    </BrowserRouter>
  );
}

export default App;
