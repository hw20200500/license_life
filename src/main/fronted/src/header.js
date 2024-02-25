import React, { useEffect, useState } from 'react';
import "./styles/header.css";
import {Link} from 'react-router-dom';


const Header = (elem, initialState) => {
  const [showDetailMenu, setShowDetailMenu] = useState(false);
  const [showli, setShowli] = useState(false);
  const handleMouseEnter = () => {
    setShowDetailMenu(true);
  };

  const handleMouseLeave = () => {
    setShowDetailMenu(false);
  };

  const handleMouseEnter_li = () => {
    setShowli(true);
  };

  const handleMouseLeave_li = () => {
    setShowli(false);
  };
  return (
    <header>
        <a href='/'>
        <img id="logo" src={process.env.PUBLIC_URL +'svg/logo.svg'}/>
      </a>

      <label  class="button drop_down" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        단과대 / 학과 정보 보러 가기
      </label>
      {showDetailMenu && (
      <div class='menu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ul class='college'onMouseEnter={handleMouseEnter_li} onMouseLeave={handleMouseLeave_li}>문과대학
          {showli && (<li class='department'><a href='/college'>문헌정보학과</a></li>)}
        </ul>
        <ul class='college'onMouseEnter={handleMouseEnter_li} onMouseLeave={handleMouseLeave_li}>문과대학
        {showli && (<li class='department'><a href='/college'>문헌정보학과</a></li>)}
        </ul>
      </div>)}
    </header>
    
    
  );
};

export default Header;