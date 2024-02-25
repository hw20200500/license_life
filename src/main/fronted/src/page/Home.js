import React from 'react';
import "../styles/Home.css";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div class='main'>
        <img src={process.env.PUBLIC_URL +'svg/logo.svg'}/>
        <p>우리 학과에서 필요한 자격증은 뭘까?</p>
      </div>

      <div id='search_layout' class='layout'>
        <p>나의 학과 or 자격증 찾기</p>
        <div id='search_bar'>
          <input type="text" id="search" name="search" required minlength="1"/>
          <input type='image' id='search_bttn' src={process.env.PUBLIC_URL +'svg/search_icon.svg'}/>
        </div>
      </div>

      <div class='layout' id='detail_layout'>
        <p class='yellow' id='title'>이럴 때 사용하면 좋아요!</p>
      </div>
    </div>
    
  );
};

export default Home;