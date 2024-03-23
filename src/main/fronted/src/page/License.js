import React, { useEffect, useState }  from 'react';
import "../styles/License.css";
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';

const License = () => {
    const [licenses, setLicenses] = useState([]);
    const location = useLocation();
  const licenseName = location.state.name;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 스프링의 LicenseController에 '자격증 이름'을 보내고 답변 받은 데이터를 저장한다.
        const response = await axios.get(`/api/license_detail?name=${encodeURIComponent(licenseName)}`);

        // response안에 있는 데이터를 licenses에 저장한다.
        setLicenses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    

    
// 컴포넌트가 마운트될 때 데이터를 불러옴
fetchData();

// cleanup 함수를 반환하여 언마운트 시에도 데이터를 불러오지 않도록 처리
return () => {};
}, [licenses]); // 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행됨

const quin=[]; // 응시 자격
const subjects = []; //과목
const pass_standards = []; //합격 기준
const exam_processes = []; //시험 과정
const test_class = []; // 필기 or 실기

// 시험 유형이 1개인 경우에는 상관 없으나, 필기, 실기 등 여러 단계로 치는 자격증이 많기에 이를 단계별로 데이터 정리하는 코드
for (let license of licenses) {
    quin.push(license["qualification"]);
    subjects.push(license["subject"]);
    pass_standards.push(license["pass_standard"]);
    exam_processes.push(license["exam_process"]);
    test_class.push(license["test_class"]);
}

  return (
    <div class='layout'>
      <h1 id='college_title'>{licenseName}</h1>
      


    <div>
    <li class='sub'>응시 기준</li>
    {quin.map((quintity, idx) => (
            <div class='test_class'><p class='class_name'>{test_class[idx]}</p><p class='detail'>{quintity}</p></div>
        ))}
        <li class='sub'>시험 과목</li>
        {subjects.map((subject, idx) => (
            <div class='test_class'><p class='class_name'>{test_class[idx]}</p><p class='detail'>{subject}</p></div>
        ))}
      </div>



      <div>
        <li class='sub'>시험 과정</li>
        {exam_processes.map((exam_process, idx) => (
            <div class='test_class'><p class='class_name'>{test_class[idx]}</p><p class='detail'>{exam_process}</p></div>
        ))}
      </div>



      <div>
        <li class='sub'>합격 기준</li>
        {pass_standards.map((pass_standard, idx) => (
            <div class='test_class'><p class='class_name'>{test_class[idx]}</p><p class='detail'>{pass_standard}</p></div>
        ))}
      </div>
    </div>
      


     
      

      
 
    
  );
};

export default License;