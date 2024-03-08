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


const searching  = event => {
  if (event.target.value.length!=0) {
    const searchItemsValues = Object.values(searchItems);
    const values = [...searchItemsValues[0], ...searchItemsValues[1], ...searchItemsValues[2]];
    // console.log(values);
    const results = values.filter(item => item.includes(event.target.value))
    setsearch_results(results);
    console.log(results);
  } else {
    setsearch_results([]);
  }
  
};
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
        <div class='result_layout'>
            
          
        {search_results.map((result, idx) => (
          <p onClick={() => go_link(result)}>{result}</p>
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