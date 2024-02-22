
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import College from './page/College';
import Home from "./page/Home";
import Header from "./header";
import "./App.css";

function App() {
  return (
    <div class="App">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap')
    </style>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/college" element={<College/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    
    
    
  );
}

export default App;
