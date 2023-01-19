# 🦈HITMAP 
- 로고 들어갈 자리

## 📋목차
[1. 프로젝트 소개](#프로젝트-소개)<br>
[2. 주요 기능](#주요기능)<br>
[3. 팀 구성](#팀-구성)<br>
[4. 개발환경](#개발환경)<br>
[5. 서비스 아키텍쳐](#서비스-아키텍쳐)<br>
[6. 기술적 의사결정](#기술적-의사결정)<br>

### 📢프로젝트 소개
“魚매불망 너만 기다리며, 魚중모색 너만 찾았다.”<br>
낚시 갈건데 거기 날씨하고 바다는 어때?<br>
월척이다! 어디서 자랑하지?<br>
낚시는 처음인데 정보는 어디서 소통하지?<br>
HITMAP은 낚시에서 가장 중요한 날씨와 낚시의 정보를 교류할 수 있는 1000만 낚시인들의 꿈의 커뮤니티 웹입니다.

### ⚙주요기능



### 👪팀 구성
|Name(Github)|Position|Role|
|:---:|:---|:---|
|[장세화](https://github.com/saehwa95)|FE(VL)|- 지도 검색<br> - 날씨정보 제공<br>|
|[정창원](https://github.com/jungjang)|FE|- 게시글 CRUD<br> - 댓글 CRUD <br> - 좋아요기능|
|[조형준](https://github.com/cho98)|BE|- 로그인<br>- 회원가입<br>- 로그아웃<br>|


### 💻개발환경
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/AmazonS3-569A31?style=for-the-badge&logo=Amazon-S3&logoColor=white">

### 🛠서비스 아키텍쳐

### 📌기술적 의사결정
<details>
<summary>FE 기술적 의사결정</summary>
<div markdown="1">

  - **리덕스 툴킷**
    - 도입 이유
        - Redux—toolkit은 redux의 단점인 보일러플레이트코드와 복잡한 스토어 설정, 페키지설정을 완화시킴 
        
    - 문제 상황
        - 로그인 기능 전역상태로 Redux-toollkit, React-Query를 생각
    - 해결 방안
        - 1안)React-Query
        - 2안)Redux-toollkit
    - 의견 조율
        - Redux-toollkit을 사용하기에는 상태관리에 대한 개념이 명확하지 않아 기존 사용하던 Redux-toolkit 사용
    - 의견 결정
        - redux toolkit 사용후 추후에 react query로 리팩토링할 예정
  
  - **리액트 쿼리 도입**
    - 도입 이유
        - 너무 길고 불필요한 리덕스 툴킷의 boiler plate
        - 서버 데이터를 지역적으로 써야할 경우 이를 효율적으로 관리하고 싶었음
        - 에러 핸들링을 하고 싶을 때 필요한 작업들을 지원해줌
    - 문제 상황
        - 하나의 컴포넌트 안에서만 쓰일 데이터를 굳이 전역으로 상태를 관리해야할까,<br>
        라는 의문이 생김
        → 데이터가 필요한 부분을 지역/전역 범위를 나누어 상태를 관리하기 위해 <br>
            이를 해결할 수 있는 라이브러리를 찾아봄
    - 해결 방안
        - 1안) RTK-Query
        - 2안) Apollo
        - 3안) React-Query
    - 의견 조율
        - 1안) RTK-Query
            - 결국 리덕스의 구조를 따라야했음
            - 참고할 자료가 적어 주어진 기간 내에 숙지하고 적용시킬 수 있는가에 대한 의문
        - 2안) Apollo
            - 스키마를 정의해야하는 번거로움(자유도문제)
            - return하려는 data 가 무엇인지 사용자가 보내는 data가 무엇일지 정의하는게<br>
            익숙치 않아 시간적 부담 가능성
        - 3안) React-Query
            - key값 관리 방식 등을 스스로 결정 자유도가 있지만 <br>
            스스로 패턴을 작성하는데 고민 필요
            - 비동기 함수를 분리해서 작성하는 것이 유지보수에 편리
    - 의견 결정
        - 세 가지 대체안을 고민해본 결과 <br>
        주어진 프로젝트 기간 안에 적용시키고 진행하기 위해서는<br>
        시간적 제한을 고려해야했음
        → 🎉 자유도가 높고 바로 적용시켜 볼 수 있는 React-Query로 결정
  
  - **코드 컨벤션**
    - 도입 이유
        - 협업으로  진행되는 프로젝트이기 때문에 코드 가독성 및 일관성을 위해 코드를 규칙 안에서 작성하려는 노력이 필요하다.
    - 문제 상황
        - 개발을 공부하는 입장에서 그때 그때 작성하는 코드 방식이 바뀐다.
        - 코드 작성자에 따라 import 순서, 변수 및 함수 작성 방식이 달라 코드 일관성이 부족하다.
    - 해결 방안
        - 코드 컨벤션을 정해서 최대한 코드 일관성을 유지시켜본다.
    - 의견 조율
        - 규칙을 세세하게 정하기 보다 우선 우리 조에서 지킬 수 있는 만큼의 규칙을 정해서 코드 컨벤션을 맞춰나간다.
    - 의견 결정
        - import 및 컴포넌트 내부 로직 순서를 우리만의 규칙으로 만들어 작성한다.
  
  - **지도 API 프론트엔드 구현**
    - 도입 이유
        - 오픈 API를 활용해 좀 더 빠른 기능 구현을 진행하기 위함
    - 문제 상황
        - 키워드 검색과 일치하는 위치 정보 제공에 대한 데이터 처리 방식을 어떻게 진행하는게 좋을지 고민하고 결정해야하는 상황 발생
    - 해결 방안
        - 1안 ) 낚시 할 수 있는 장소에 대한 위치를 백엔드 DB에 저장하고, 유저가 검색하는 키워드와 일치하는 장소만 지도에 띄워준다.
        - 2안 ) 지도를 보여주기 위해서 오픈 API를 사용한다면 데이터 활용도 오픈 API에서 제공하는 응답 결과를 활용한다.
    - 의견 조율
        - 카카오 지도 API에서 제공하는 장소 검색 서비스 중 **`keywordSearch()`**  메소드를 활용하면 로컬 REST API 키워드로 장소 검색의 응답 결과를 보여준다.
    - 의견 결정
        - 카카오 지도 API를 활용해 검색 결과를 마커 표시로 제공하기로 결정
  
  - **set cookie**
    - 도입 이유
        - 사용자의 로그인/비로그인 상태에 따라서 서비스의 접근 권한을 다르게 해야했음<br>
          → 따라서 사용자의 상태에 따라 접근 권한을 나누는 ‘기준점’ 을 만들기 위해 도입
        
    - 문제 상황
        - 백엔드에서 토큰들을 다 관리
        → 서버와의 요청이 오고가는 분기에서만 토큰 기반 접근 권한에 따른 처리가 가능했음<br>
            (ex. 비로그인 상태의 클라이언트도 실제 글 작성은 못하지만<br>
                  글 작성 페이지까지는 들어가지는 문제 생김)
    - 해결 방안
        - 1안) 로그인기능이 필요한 버튼을 누르면 서버에 데이터를 전송하여 권한 판단
        - 2안) setCookie()를 통해 쿠키에 토큰을 추가적으로 저장하고 이를 활용
    - 의견 조율
        - 1안의 경우, 권한 판단을 통한 서비스 접근처리일 뿐인데 <br>
        이러한 모든 경우마다 서버와의 데이터 통신이 이루어지는게 <br>
        불필요하지 않을까 의문점 생김
    - 의견 결정
        - 백엔드에서 토큰 기반으로 사용자의 로그인/비로그인 상태 관리하는 것 이외에도<br>
        setCookie()를 통해 쿠키에 토큰을 추가적으로 저장하고 <br>
        이를 기준점으로 삼고 활용하기로 결정
</div>
</details>
