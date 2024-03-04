
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import College from './page/College';
import Home from "./page/Home";
import Department from "./page/Department";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div class="App">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Noto+Serif+KR&display=swap');
    </style>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/college" element={<College/>}/>
        <Route path="/department" element={<Department/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    
    
    
  );
}

export default App;
