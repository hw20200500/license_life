import React, { useEffect, useState } from 'react';
import "./styles/header.css";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import College from './page/College';


const Header = (elem, initialState) => {
  const navigate = useNavigate();
  const go_college = (name) => {
    navigate("/college", { state: { name: name } });
  };

  const go_department = (name) => {
    navigate("/department", { state: { name: name } });
  };

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



const menu = {
  "문과대학" : ["국어국문·창작학과", "영어영문학과", "응용영어콘텐츠학과", "일어일문학전공", "프렁스어문학전공", "문헌정보학과", "사학과", "기독교학과"],
  "사범대학" : ["국어교육과", "영어교육과", "교육학과", "역사교육과", "미술교육과", "수학교육과"],
  "공과대학" : ["정보통신공학과","전기전자공학과","멀티미디어공학과","건축학과", "건축공학전공", "토목환경공학전공", "기계공학과", "화학공학과", "신소재공학과"],
  "스마트융합대학" : ["컴퓨터공학과", "산업경영공학과", "AI융합학과", "수학과", "빅데이터응용학과"],
  "경상대학" : ["경영학과", "회계학과", "무역물류학과", "경제학과", "중국경제통상학과", "호텔항공경영학과", "경영정보학과"],
  "사회과학대학" : ["법학부 법학전공", "법학부 법무법학전공", "행정학과", "경찰학과", "정치/언론학과", "사회복지학과", "아동복지학과", "사회적경제기업학과"],
  "생명/나노과학대학" : ["생명시스템과학과","식품영양학과","화학과", "간호학과", "스포츠과학과", "바이오제약공학과"],
  "탈메이지교양/융합대학" : ["자유전공학부"],
  "아트&디자인테크놀로지대학" : ["융합디자인학과","회화과","패션디자인학과","미디어영상학과"],
  "린튼글로벌스쿨" : ["글로벌비즈니스전공","글로벌미디어/컬처전공"]
};


  return (
    <header>
        <a href='/'>
        <img id="logo" src={process.env.PUBLIC_URL +'svg/logo.svg'}/>
      </a>

      <label  class="drop_down cursor" id='menu_button'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        단과대 / 학과 정보 보러 가기
      </label>
      
      {showDetailMenu && (
    
        <div className='menu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {Object.keys(menu).map((college, idx) => (
            <ul className='college' onMouseEnter={handleMouseEnter_li} onMouseLeave={handleMouseLeave_li} > 
            <p onClick={() => go_college(college)} class='cursor'>{college}</p>
              
            {menu[college].map((department, n) => (
              <li className='department cursor' onClick={() => go_department(department)}>{department}</li>
            ))}
            
            </ul>
            ))}
        </div>
    
)}
    </header>
    
    
  );
};

export default Header;