import React, { useEffect, useState }  from 'react';
import "../styles/BoardDetail.css";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const BoardDetail = () => {
  const navigate = useNavigate();
  // 게시판 리스트 데이터 저장
  const [board, setBoard] = useState([]);
  const location = useLocation();

  const id = location.state.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 스프링의 boardController에 'id'을 보내고 답변 받은 데이터를 저장한다.
        const response = await axios.get(`/api/boardDetail?id=${id}`);
        setBoard(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
// 컴포넌트가 마운트될 때 데이터를 불러옴
fetchData();

// cleanup 함수를 반환하여 언마운트 시에도 데이터를 불러오지 않도록 처리
return () => {};
}, [board]); // 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행됨



  return (
    <div class='layout'>
      
      
      <div>
            <h1 id='title'>{board['title']}</h1>
            <div className='date_writer_layout'>
                 <p>작성일자</p><p className='board_data'>{board['date']}</p>
                 <p>작성자</p><p className='board_data'>{board['writer']}</p>
                 <p id='confirm'>관리자 확인</p><p className='board_data'>{board['confirm']}</p>

            </div>
          <p>{board['detailed']}</p>
        </div>
    </div>
  );
};

export default BoardDetail;