import React, { useEffect, useState } from 'react';
import "../styles/Home.css";
import axios from 'axios';
import {Link, useLocation, useNavigate} from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const [searchItems, setsearchItems] = useState('');
const [inputValue, setInput] = useState('');
const [search_results, setsearch_results] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // 전체 검색어 목록(학과, 단과대, 자격증 이름) 데이터 가져와서 searchItems에 저장하기
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/search`);
        setsearchItems(response.data);
        //console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
// 컴포넌트가 마운트될 때 데이터를 불러옴
fetchData();


// cleanup 함수를 반환하여 언마운트 시에도 데이터를 불러오지 않도록 처리
return () => {};
}, [searchItems]); // 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행됨


const result_layout = document.getElementById('result_layout');

// 검색창에서 텍스트를 입력할 때마다(변경될 때마다) 실행되는 함수
// 검색창에 입력된 텍스트가 포함된, 혹은 일치하는 searchItems 데이터를 출력한다. 
const searching  = event => {
  if (event.target.value.length!=0) {
    result_layout.style.display = 'block';
    const searchItemsValues = Object.values(searchItems);

    // [0]: 단과대학, [1]: 학과, [2]: 자격증 정보
    const values = [...searchItemsValues[0], ...searchItemsValues[1], ...searchItemsValues[2]];
    console.log(values);
    const results = values.filter(item => item.includes(event.target.value))
    setsearch_results(results);
    console.log(results);
  } else {
    setsearch_results([]);
    result_layout.style.display = 'none';
  }
  
};

// searchItems은 해시맵 상태. key 값 : college, department, license / value : 단과대학, 학과, 자격증 명
// searchItems의 key 값이 데이터를 분류하는 기준이면서, 해당 페이지로 가는 링크 주소명에 해당. 
// 사용자가 검색 결과 리스트에서 선택한 텍스트가 어느 카테고리에 해당되는 것인지에 따라서 링크 주소가 달라짐.
// 해당 페이지로 이동할 때, 클릭한 요소의 내용(명칭)도 같이 전달
const go_link = (name) => {
  const result = Object.values(searchItems).findIndex(item => item.includes(name));
  console.log(Object.keys(searchItems)[result]);
  navigate(`/${Object.keys(searchItems)[result]}`, { state: { name: name } });
};

  return (
    <div>
      <div class='main'>
        <img src={process.env.PUBLIC_URL +'svg/logo.svg'}/>
        <p>우리 학과에서 필요한 자격증은 뭘까?</p>
      </div>

      <div id='search_layout' class='layout'>
        <div>
          <p>나의 학과 or 자격증 찾기</p>
        <div id='search_bar'>
          <input type="text" id="search" name="search" required minlength="1" onChange={searching}/>
          
          <input type='image' id='search_bttn' src={process.env.PUBLIC_URL +'svg/search_icon.svg'}/>
        </div>
        <div id='result_layout'>
            
          
        {search_results.map((result, idx) => (
          <div>
            <p class="cursor" onClick={() => go_link(result)}>{result}</p>
          </div>
          
          ))}
          </div>
        </div>
        
      </div>
      

      <div class='layout' id='detail_layout'>
        <p class='yellow' id='title'>이럴 때 사용하면 좋아요!</p>
      </div>
    </div>
    
  );
};

export default Home;