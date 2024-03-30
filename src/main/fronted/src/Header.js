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

  // '단과대/학과 정보 보기' 버튼에 마우스 올렸는가 아닌가를 저장하는 변수 : 만일 올렸으면 메뉴 보여주기
  const [showDetailMenu, setShowDetailMenu] = useState(false);
  // 메뉴의 단과대 항목(ul)에 마우스 올렸는가 아닌가를 저장하는 변수 : 만일 올렸으면 학과 리스트 출력하기
  const [showli, setShowli] = useState(false);

  // 메뉴 버튼에 마우스 올리면 메뉴 리스트 출력하는 함수
  const handleMouseEnter = () => {
    console.log(menuItems);
    setShowDetailMenu(true);
  };

  // 메뉴 버튼에서 마우스 떨어뜨리면(마우스 오버되지 않으면) 출력된 메뉴 다시 안보이게 하는 함수
  const handleMouseLeave = () => {
    setShowDetailMenu(false);
  };

  // 단과대 항목에 마우스 올리면 학과 리스트 출력하는 함수
  const handleMouseEnter_li = () => {
    setShowli(true);
  };

  // 단과대 항목에서 마우스 떨어뜨리면(마우스 오버되지 않으면) 출력된 학과 리스트 다시 안보이게 하는 함수
  const handleMouseLeave_li = () => {
    setShowli(false);
  };

  // 메뉴 데이터 저장하는 변수
  const [menuItems, setMenuItems] = useState([]);

  // 백엔드에서 메뉴 데이터 가져와서 저장하기
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
