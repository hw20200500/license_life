import React, { useEffect, useState }  from 'react';
import "../styles/College.css";
import axios from 'axios';
import Header from "../Header";
import { useLocation, useNavigate } from 'react-router-dom';
const College = () => {
  const navigate = useNavigate();
  const [colleges, setColleges] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [departmentIds, setDepartmentIds] = useState([]);
  const location = useLocation();
  const collegeName = location.state.collegeName;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/college?collegeName=${encodeURIComponent(collegeName)}`);
        setColleges(response.data[0]);
        setDepartments(response.data[1]);
        setDepartmentIds(response.data[2]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
// 컴포넌트가 마운트될 때 데이터를 불러옴
fetchData();

// cleanup 함수를 반환하여 언마운트 시에도 데이터를 불러오지 않도록 처리
return () => {};
}, [colleges]); // 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행됨

const go_department = (name) => {
  navigate("/department", { state: { departmentName: name } });
};

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
      {departments.map((department, idx) => (
        <div class="department_layout">
          <div class="circle cursor" onClick={() => go_department(department)}>
        <img class='department_icon' src={process.env.PUBLIC_URL +`svg/department_icon/${departmentIds[idx]}.svg`} /></div>
          
          <div class="round_layout">
            <h6 id='department_name' class='cursor' onClick={() => go_department(department)}>{department}</h6>
            <li id='license_name'>자격증 정보</li>
            <p  class="button margin_top_15 cursor" onClick={() => go_department(department)}>더보기</p>
          </div>
        </div>
 ))}
      </div>
     
      

      
    </div>
  );
};

export default College;