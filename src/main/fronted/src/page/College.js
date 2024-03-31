import React, { useEffect, useState }  from 'react';
import "../styles/College.css";
import axios from 'axios';
import Header from "../Header";
import { useLocation, useNavigate } from 'react-router-dom';
const College = () => {
  const navigate = useNavigate();
  // 단과대학 데이터 저장
  const [colleges, setColleges] = useState([]);
  // 단과대학에 소속되어 있는 학과 데이터 저장
  const [departments, setDepartments] = useState([]);
  // 소속 학과의 id 저장 : 학과 이미지(svg 파일) 파일명을 학과 id로 저장했음. 얘를 가지고 
  const [departmentIds, setDepartmentIds] = useState([]);
  const location = useLocation();

  // 이전 페이지에서 학과명 데이터 받아온 뒤, 저장.
  const collegeName = location.state.name;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 스프링의 collegeController에 '단과대학 이름'을 보내고 답변 받은 데이터를 저장한다.
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
}, [colleges, collegeName]); // 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행됨

const go_department = (name) => {
  navigate("/department", { state: { name: name } });
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
        <img class='department_icon' src={process.env.PUBLIC_URL +`svg/department_icon/${departmentIds[idx]}.svg`} alt=""/></div>
          
          <div class="round_layout">
            <h6 id='department_name' class='cursor' onClick={() => go_department(department)}>{department}</h6>
            <p  class="button margin_top_15 cursor" onClick={() => go_department(department)}>더보기</p>
          </div>
        </div>
 ))}
      </div>
     
      

      
    </div>
  );
};

export default College;