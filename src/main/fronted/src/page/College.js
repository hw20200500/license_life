import React, { useEffect, useState }  from 'react';
import "../styles/College.css";
import axios from 'axios';
import Header from "../Header";
import { useLocation } from 'react-router-dom';
const College = () => {
  const [colleges, setColleges] = useState([]);
  const location = useLocation();
  const [collegeName] = useState(
    location.state?.collegeName
  );
  useEffect(() => {
    axios.get(`/api/college?collegeName=${collegeName}`)
        .then(response => {
            // 서버에서 받은 데이터를 JavaScript 배열로 변환하여 저장
            setColleges(response.data);
        })
        .catch(error => console.log(error));
}, []);

  return (
    <div class='layout'>
      {colleges.map((college, idx) => (
        <div key={idx}>
        <h1 id='college_title'>{college["college_name"]}</h1>
        <p id='introduce'>{college["college_intro1"]}</p>
        <p id='detailed'>{college["college_intro2"]}</p>
      </div>
      ))}

      <div class='grid'>
        <div class="department_layout">
          <div class="circle">
        <img class='department_icon' src={process.env.PUBLIC_URL +'svg/department_icon/computer_icon.svg'}/></div>
          
          <div class="round_layout">
            <h6 id='department_name'>컴퓨터공학과</h6>
            <li id='license_name'>자격증 정보</li>
          </div>
        </div>

      </div>

      

      
    </div>
  );
};

export default College;