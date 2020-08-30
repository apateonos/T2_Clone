# T2 Tea 클론 프로젝트 
호주 유명 티 브랜드 웹 사이트 클론
https://www.t2tea.com/

## 개발 인원 및 기간
- 개발 기간: 2020/08/18 ~ 2020/08/28
- 개발 인원: 프론트엔드 4명, 백엔드 2명

## 팀원
- 프론트엔드: 강예지, 김규영, 마상원, 오승하
- 백엔드: 왕민욱, 이건규

## 기술 스택 및 구현 기능
### 1. 기술 스택
- JavaScript (ES6)
- React (CRA)
- Sass (SCSS)
- Git /Github

- 리액트 라이브러리
    - Slick
    - React-router-dom
    
### 2. 협업 툴
- Git
- Slack
- Trello

### 3. 구현 기능 상세 설명
[ navigation 바 ]
- setInterval 함수를 활용한 롤링 배너 구현
- search icon 클릭 시 searchbar 표시 기능 구현
- 컴포넌트 활용하여 메뉴 hover 시 세부 메뉴 보여지는 기능 구현

[ 메인 페이지 ]

[ product list 페이지 ]

[ product detail 페이지 ]
- 동적 라우팅 활용하여 product list 페이지에서 상품 클릭 시 클릭한 상품에 해당하는 상세 페이지 보여주는 기능 구현
- react slick 라이브러리로 이미지 슬라이더 구현

[ 로그인 페이지 ]
- 이메일 및 비밀번호 형식 불일치 시 경고 표시
- 비밀번호 조건 : 8 자리 이상, 대문자 1개 포함, 숫자 1개 포함
- 이메일 형식(@포함) 일치 시 확인 버튼 표시
- 로그인 성공 시 메인페이지로 이동 

[ 회원가입 페이지] 

- first name (1글자이상) 
- last name(2글자이상)
- phone 번호 11숫자
- email형식 (@) 포함 
- 생년월일 선택 

[ 장바구니 페이지 ]

- shop all tea 페이지에서 
 add to bag 추가하면 장바구니에 추가되는 기능 
- 장바구니 아이콘 클릭시 모달창 띄우기 
- 모달창에서 Remove 클릭시 아이템 삭제 
- 장바구니 아이템 자동 계산 출력 

[ 메인 페이지 ]

[ footer ]
- map 활용하여 반복되는 list 요소 재사용
