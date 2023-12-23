import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us"/>
      <div className="container my-3" >
      <Textform heading="Enter text to analyze"/>
      </div>
    </>
  );
}

export default App;
