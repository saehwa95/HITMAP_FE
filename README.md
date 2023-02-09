# 🎣히트맵🎣
<img src="https://user-images.githubusercontent.com/100126319/217750977-35c3f015-7bc4-4d53-a604-6d67101d7758.png" width="800" height="500"/>

### 🐟 프로젝트 소개
#### 낚시에 필요한 날씨 정보 제공과 낚시인들을 위한 SNS 커뮤니티 서비스


### ⏰ 프로젝트 기간
#### 2022.12.30 ~ 2023.02.10

### 🦾 서비스 아키텍쳐
<img src="https://user-images.githubusercontent.com/100126319/217752944-80c81bc8-96fe-43b1-9480-b30cdd11c92b.png" width="800" height="500"/>


### 🤔 프론트엔드 기술적 의사결정
#### React
- 자바스크립트 라이브러리인 리액트를 중심으로 개발

#### Redux-toolkit
- 전역으로 상태를 관리할 수 있고 여러 가지 라이브러리가 내장되어있어 패키지 의존성을 줄이는 장점이 있어서 사용

#### React-query
- 리덕스 툴킷의 불필요하게 많은 boiler plate문제와 서버 데이터를 지역적으로 써야할 경우 이를 효율적으로 관리하기 위해 자유도가 높고 바로 적용시켜 볼 수 있는 React-Query를 사용

### 🎨 와이어 프레임
[👉 히트맵 와이어프레임 구경가기](https://www.figma.com/file/aErc5QVbie2cn4veOGPHG4/%ED%9E%88%ED%8A%B8%EB%A7%B5?node-id=87%3A933&t=gbDs3yYOSu3EMzB0-0)

### ⚙️ 프론트엔드 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
<br>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<br>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<br>
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">

### 🕶️ 주요 기능
<details>
<summary>🌎 지도 검색</summary>
  
- 검색한 키워드와 일치하는 장소를 히트맵의 시그니처 마커로 제공
  
</details>

<details>
<summary>☀️ 날씨 정보 제공</summary>
  
- 클릭한 장소의 위치와 가장 가까운 관측소에서 제공하는 날씨(기온, 강수량, 풍향, 풍속, 조석)에 대한 정보를 제공
  
</details>

<details>
<summary>🗣️ SNS 기능</summary>
  
- 잡은 물고기나 낚시 관한 정보 게시
- 작성된 게시글에 대한 댓글 기능
- 다른 클라이언트가 작성한 게시글이 마음에 들 경우 좋아요 기능
  
</details>

<details>
<summary>🔔 회원가입/로그인 기능</summary>
  
- 비회원시 : 지도, 날씨, SNS Read기능만 가능
- 회원가입시 : SNS 작성과 댓글, 좋아요, 마이페이지 기능 사용 가능
  
</details>

### 🚨 트러블슈팅
<details>
<summary>토큰 기반 분기 처리</summary>
  
- 문제 : 지도, 날씨, SNS Read기능만 가능
- 고민했던 내용
  로그인 기능이 필요한 버튼을 누르면 서버에 데이터를 전송하여 권한 판단
  setCookie() 를 통해 쿠키에 토큰을 추가적으로 저장하고 이를 활용
- 해경방안 :  불필요한 서버 요청을 줄이기 위해 를 통해 쿠키에 토큰을 추가적으로 저장하고 이를 활용
  
</details>

### 💗 히트맵 멤버
|Name|Github|Role|
|:---|:---|:---|
|장세화[FE🔰]|https://github.com/saehwa95|지도 페이지, 날씨 페이지, 마이페이지, 내 정보 수정 페이지|
|정창원[FE]|https://github.com/jungjang|SNS 페이지, 내 정보 수정 페이지, 소셜로그인|
|조형준[FE]|https://github.com/cho98|로그인 페이지, 회원가입 페이지|
|고윤혁[BE🔰]|https://github.com/KYH9800|-|
|이규형[BE]|https://github.com/kyuhyunglee8|-|
|이연정[DE]|https://i0y0j057.myportfolio.com/|-|
