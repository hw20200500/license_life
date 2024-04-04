import React, { useEffect, useState }  from 'react';
import "../styles/CreateBoard.css";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const CreateBoard = () => {
  const navigate = useNavigate();
  // 게시판 리스트 데이터 저장
  const [newBoard, setNewBoard] = useState("");
  const location = useLocation();


// input, textarea에서 작성한 내용을 가져와서 저장한 뒤, 스프링 서버에 해당 데이터를 전송하는 함수
  const save = () => {
    var title = document.getElementById('writing_title').value;
    var detailed = document.getElementById('writing_detailed').value;
    var writer = document.getElementById('writer').value;
    var password = document.getElementById('password').value;
    if (title.length==0) {
        alert("제목을 작성해주세요!");
    } else if(writer.length==0){
        alert("작성자 이름을 작성해주세요!");
    }  else if(password.length<8){
        alert("비밀번호를 8글자 이상 입력해주세요!");
    } else {
        // 작성 날짜 저장
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

        // 스프링 서버로 데이터 전송. 성공하면 '게시물 업로드되었습니다', 실패하면 '실패' 출력
        axios
        .get("/api/createBoard", {
            params: { 
                title:title,
                date:date,
                detailed:detailed,
                writer:writer,
                password:password
            },
        }).then(function (response) {
            alert("게시물이 업로드되었습니다.");
          })
        .catch(function () {
            alert("게시물 업로드에 실패하였습니다.")
        });

        

        // 게시글 메인 페이지로 이동
        navigate("/board");
    }

    
  }

  return (
    <div class='layout'>
        <div class='writing_layout'>
            
        <input id='writing_title' placeholder="제목을 입력해 주세요."></input>

        
        <textarea id='writing_detailed' placeholder="내용을 입력해 주세요."/>
        <p className='description'>비밀번호는 8자리 이상 입력해주세요.</p>
        <div id='bottom_layout'>
            
            <p>작성자명</p>
            <input class='writing' id='writer' placeholder="작성자명"></input>
            <p>비밀번호</p>
            <input class='writing' id='password' placeholder="비밀번호를 입력해주세요." type='password'></input>
            <button id='save' className='cursor' onClick={() => save()}>
                <div>
                    저장
                </div>
            </button>
        </div>
        
        </div>
        
    </div>
  );
};

export default CreateBoard;