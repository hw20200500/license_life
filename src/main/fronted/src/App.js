
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import College from './page/College';
import Home from "./page/Home";
import Department from "./page/Department";
import License from "./page/License";
import Header from "./Header";
import Board from "./page/Board";
import "./App.css";
import BoardDetail from './page/BoardDetail';
import CreateBoard from './page/CreateBoard';

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
        <Route path="/" element={<Home/>}/>  {/*홈 페이지 주소 */}
        <Route path="/college" element={<College/>}/> {/*단과대학 페이지 주소*/}
        <Route path="/department" element={<Department/>}/> {/*학과 페이지 주소 */}
        <Route path="/license" element={<License/>}/> {/*자격증 페이지 주소 */}
        <Route path="/board" element={<Board/>}/>
        <Route path="/boardDetail" element={<BoardDetail/>}/>
        <Route path="/createBoard" element={<CreateBoard/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    
    
    
  );
}

export default App;
