import React, { useEffect, useState } from 'react';
import "./styles/header.css";
import {Link} from 'react-router-dom';
import axios from 'axios';

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

  const [colleges, setCollege] = useState('');
  const [collegeIds, setCollegeId] = useState('');

  useEffect(() => {
    axios.get('/api/college_name')
        .then(response => {
            // 서버에서 받은 데이터를 JavaScript 배열로 변환하여 저장
            setCollege(response.data);
        })
        .catch(error => console.log(error));

    axios.get('/api/college_department')
        .then(response => {
            // 서버에서 받은 데이터를 JavaScript 배열로 변환하여 저장
            setCollegeId(response.data);
        })
        .catch(error => console.log(error));
}, []);
const [Departments, setDepartments] = useState([]);
const postData = async (idx) => {
  try {
      const response = await axios.get('/api/'+collegeIds[idx]);
      setDepartments(response.data); // 받은 데이터를 상태로 저장
  } catch (error) {
      console.error('Error posting data:', error);
  }
};

const departments = ["a", "b", "c"];
  return (
    <header>
        <a href='/'>
        <img id="logo" src={process.env.PUBLIC_URL +'svg/logo.svg'}/>
      </a>

      <label  class="button drop_down" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        단과대 / 학과 정보 보러 가기
      </label>
      
      {showDetailMenu && (
    
        <div className='menu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {colleges.map((college, idx) => (
            <ul className='college' onMouseEnter={handleMouseEnter_li} onMouseLeave={handleMouseLeave_li}>
            {college} 
            {collegeIds.map((department, n) => (
              <li className='department'><a href='/college'>{department}</a></li>
            ))}
            
            </ul>
            ))}
        </div>
    
)}
    </header>
    
    
  );
};

export default Header;