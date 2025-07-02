import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Demo from './Routes/Demo';
import Document from './Routes/Documentation';
import About from './Routes/About';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
         <Route path="/demo" element = {<Demo />} />
        <Route path="/documentation" element = {<Document />} /> 
        <Route path="/about" element = {<About />} /> 
      </Routes>
    </>
  )
}

export default App;