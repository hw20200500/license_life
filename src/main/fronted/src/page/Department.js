import React, { useEffect, useState }  from 'react';
import "../styles/Department.css";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const Department = () => {
  const navigate = useNavigate();

  // 학과 데이터 저장하는 변수
  const [departments, setDepartments] = useState([]);

  // 자격증 데이터 저장하는 변수
  const [licenses, setLicenses] = useState([]);

  const location = useLocation();

  // 이전 페이지(메뉴, 홈 페이지 검색창, 단과대 페이지 등)에서 받은 데이터(단과대학명)를 저장
  const departmentName = location.state.name;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 스프링의 departmentController에 '학과 이름'을 보내고 답변 받은 데이터를 저장한다.
        const response = await axios.get(`/api/department?departmentName=${encodeURIComponent(departmentName)}`);

        setDepartments(response.data[0][0]);
        setLicenses(response.data[1]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    

    
// 컴포넌트가 마운트될 때 데이터를 불러옴
fetchData();

// cleanup 함수를 반환하여 언마운트 시에도 데이터를 불러오지 않도록 처리
return () => {};
}, [departments, departmentName]); // 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행됨

// 자격증 페이지로 이동. 이동하면서 클릭한 자격증의 명칭도 name에 저장해서 같이 전달.
const go_license = (name) => {
  navigate("/license", { state: { name: name } });
};
  return (
    <div class='layout'>
      
      
      <div class='department_grid'>
        <div>
        <h1 id='department_title'>{departments["departmentName"]}</h1>
          <p id='introduce'>{departments["departments_intro1"]}</p>
          <p id='detailed'>{departments["departments_intro2"]}</p>
        </div>
        <div class="department_circle" >
        <img class='department_icon' src={process.env.PUBLIC_URL +`svg/department_icon/${departments["departmentsId"]}.svg`} alt=""/></div>
      </div>
     
     <div>
      <h4>관련 자격증</h4>
      <div class='grid'>
      {licenses.map((license, idx) => (
      <div class="d_round_layout" onClick={() => go_license(license)}>
            <h6 id='license_name' class='cursor' >{license}</h6>
          </div>
      ))}
      </div>
     </div>
      

      
    </div>
  );
};

export default Department;