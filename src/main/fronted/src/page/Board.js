import React, { useEffect, useState }  from 'react';
import "../styles/Board.css";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const Board = () => {
  const navigate = useNavigate();
  // 게시판 리스트 데이터 저장
  const [boards, setBoards] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 스프링의 collegeController에 '단과대학 이름'을 보내고 답변 받은 데이터를 저장한다.
        const response = await axios.get(`/api/board`);
        setBoards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
// 컴포넌트가 마운트될 때 데이터를 불러옴
fetchData();

// cleanup 함수를 반환하여 언마운트 시에도 데이터를 불러오지 않도록 처리
return () => {};
}, [boards]); // 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행됨

const go_boardDetail = (id) => {
  navigate("/boardDetail", { state: { id: id } });
};

const go_createBoard = (id) => {
    navigate("/createBoard");
  };

  return (
    <div class='layout'>
      <h1 id='layout_title'>건의 게시판</h1>
        <p id='introduce'>추가했으면 하는 정보, 건의하고 싶은 내용 등을 이곳에 적어주세요. </p>
        <label id='write_button'class='cursor' onClick={() => go_createBoard()}>글쓰기</label>
      
        <div id="boards">
            {boards.map((board, idx) => (
            <div class="board_list cursor" onClick={() => go_boardDetail(board['id'])}>
            <ul>{board['id']}</ul>
            <ul>{board['title']}</ul>
            <ul>{board['date']}</ul>
            </div>    
            ))}

        </div>
        
     
      

      
    </div>
  );
};

export default Board;