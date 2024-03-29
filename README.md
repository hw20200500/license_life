# 대학생들을 위한 자격증 웹사이트
![제목을-입력해주세요_-002](https://github.com/hw20200500/license_life/assets/117514148/0118da76-25d3-400c-866c-6b5f217a3937)

<br><br>
### 개발 배경

---

각 학과마다 딸 수 있는, 혹은 따면 좋은 자격증이 많은데 이를 한 곳에서 쉽게 정보를 얻을 수 있는 공간이 부족하다고 생각하여 학생들이 한 번에 본인 학과의 추천 자격증이 뭔지, 자격증의 상세 내용 등을 쉽게 알 수 있도록 ‘license life’라는 웹페이지를 제작하게 되었습니다. 

<br><br>
### 사용한 도구(Tool)

---

- React
- Spring Boot
- MySQL
- Figma

<br><br>
### 문제 해결 과정

---

**문제 1. 하나의 페이지에서 여러 데이터베이스의 데이터를 갖고올 때의 시간 오류 문제**

학과 페이지에서 학과 데이터베이스, 학과 내 관련 자격증 정보 데이터베이스, 자격증 데이터베이스 등의 여러 데이터베이스에서 필요한 데이터만 일부 추출하여 한번에 정보를 가져오고 이를 텍스트, 이미지 등으로 출력하는 부분을 제작하였습니다. 이때 처음에 제작할 당시에는 각 데이터베이스에서 가져오는 정보를 다른 스프링 함수, 서버 링크에서 가져오도록 제작하여 한꺼번에 페이지에 필요한 데이터를 가져오는데 많은 시간이 소요되었습니다. 

그래서 이를 스프링에서 하나의 함수에서 하나의 배열(list)로 정리하여 한번에 리엑트로 전송하도록 하여, 데이터를 가져오는데 걸리는 시간을 줄여 문제를 해결하였습니다. 

<br><br>
### 구현 기능

---

- **홈화면, 검색 기능**
    
    홈 화면에서 검색창을 통해서 사용자가 원하는 단과대, 학과, 자격증을 검색해볼 수 있도록 제작하였습니다. Spring에서 데이터베이스에 있는 단과대명, 학과명, 자격증 이름만 추출하여 분류하고, 이를 다시 React에서 검색창에 적히는 텍스트에 따라서 실시간으로 관련 명칭이 나타나도록 하여 사용자들이 검색어를 입력하면 해당 검색어와 일치, 혹은 텍스트가 포함된 데이터만 출력되도록하고, 원하는 검색 결과를 클릭하면 해당 페이지로 바로 넘어갈 수 있도록 제작하였습니다. 
    
- **단과대, 학과 소개 페이지**
    
    데이터베이스(MySQL)에 저장되어 있는 해당 단과대의 소개글과 단과대에 해당하는 학과 정보를 가져와 페이지에서 보여주고, 출력된 학과 중 하나를 클릭하면 클릭한 학과 데이터가 /department/ 페이지로 넘어가면서 해당 학과의 페이지가 출력되도록 하였습니다. 
    
    학과 페이지 또한 단과대 페이지와 비슷한 원리로, 학과의 소개글과 해당 학과와 관련있는 자격증 데이터를 가져와서 해당 자격증 정보를 페이지에 출력합니다. 사용자가 원하는 자격증 정보를 클릭하면 /license/로 넘어가면서 해당 자격증에 대한 상세 정보를 볼 수 있도록 자격증 소개 및 상세 페이지를 따로 제작하였습니다. 
    
- **자격증 소개 및 상세 페이지**
    
    사용자가 자격증 페이지를 열면, 해당 자격증에 대한 정보를 데이터베이스(MySQL)를 가져와 해당 페이지에서 해당 자격증의 정보, 시험 과목, 방법, 필기 및 실기에 대한 정보 등의 상세 정보를 알 수 있도록 제작하였습니다.

<br><br>
  ### 시연 영상
  [![Video Label](http://img.youtube.com/vi/B3HvabhWmlY/0.jpg)](https://youtu.be/B3HvabhWmlY)
