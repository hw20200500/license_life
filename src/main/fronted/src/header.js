import React from 'react';
import "./styles/header.css";
import {Link} from 'react-router-dom';


const header = () => {
  return (
    <div>
      <a href='/'>
        <img id="logo" src={process.env.PUBLIC_URL +'svg/logo.svg'}/>
      </a>

      <a  class="button" href='/college'>
        <p>단과대 / 학과 정보 보러 가기</p>
      </a>
        
      
      
    </div>
    
  );
};

export default header;