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
    console.log(menuItems);
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

  const [menuItems, setMenuItems] = useState([]);
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/menu`);
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
// 컴포넌트가 마운트될 때 데이터를 불러옴
fetchData();

// cleanup 함수를 반환하여 언마운트 시에도 데이터를 불러오지 않도록 처리
return () => {};
}, [menuItems]); // 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행됨



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
          {menuItems.map((menuItem, idx) => (

            <ul className='college' onMouseEnter={handleMouseEnter_li} onMouseLeave={handleMouseLeave_li} > 
            <p onClick={() => go_college(menuItem.college)} class='cursor'>{menuItem.college}</p>
            {showli && 
  menuItem.deoartnebts.map((department, n) => (
    <li key={n} className='department cursor' onClick={() => go_department(department)}>{department}</li>
  ))
}
            
            </ul>
            ))}
        </div>
    
)}
    </header>
    
    
  );
};

export default Header;