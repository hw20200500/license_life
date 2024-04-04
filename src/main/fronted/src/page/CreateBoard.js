import React, { useEffect, useState }  from 'react';
import "../styles/CreateBoard.css";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const CreateBoard = () => {
  const navigate = useNavigate();
  // 게시판 리스트 데이터 저장
  const [newBoard, setNewBoard] = useState("");
  const location = useLocation();



  const save = () => {
    var title = document.getElementById('writing_title').value;
    var detailed = document.getElementById('writing_detailed').value;
    var today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let day = today.getDate();  // 날짜

    var date = year+'-'+month+'-'+day;

    var data_list = new Array();
    data_list.push(title);
    data_list.push(date);
    data_list.push(detailed);

    setNewBoard(data_list);
    // console.log(data_list);
    axios
      .get("/api/createBoard", {
        params: { 
            title:title,
            date:date,
            detailed:detailed
         },
      })
      .catch(function () {
        console.log("실패");
      });
    
    alert("게시물이 업로드되었습니다.");
    navigate("/board");
  }

  return (
    <div class='layout'>
        <div class='writing_layout'>
        <input id='writing_title' placeholder="제목을 입력해 주세요."></input>
        <textarea id='writing_detailed' placeholder="내용을 입력해 주세요."/>
        <button id='save' className='cursor' onClick={() => save()}>
            <div>
                저장
            </div>
        </button>
        </div>
        
    </div>
  );
};

export default CreateBoard;