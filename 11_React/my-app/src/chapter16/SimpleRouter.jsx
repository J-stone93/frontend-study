import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PlacePage from "./pages/PlacePage";
import GamePage from "./pages/GamePage";
import HotGamePage from "./pages/HotGamePage";
import NewGamePage from "./pages/NewGamePage";

// 0. react-router-dom 설치하기
// npm install react-router-dom

// 1. react-router-dom이란?
// 리액트를 위한 라우팅 라이브러리
// 라우팅 예시: 깃허브, 네이버 바이브
// 라우팅: URL 별로 페이지를 나눠놓고 사용자가 원하는 경로로 보내는 과정

// 2. 페이지를 나누는 법
// 1) 리액트 미사용 시
// MPA라서 각 페이지 별 html 만듦
// /list 경로로 접속하면 해당 list.html 문서를 보여줌

// 2) 리액트 사용 시
// SPA라서 index.html 파일 하나만 존재(싱글페이지어플리케이션)
// List 컴포넌트를 만듦
// /list 경로로 접속하면 기존 컴포넌트 자리에 List 컴포넌트 보여줌

// 3. 라우팅 구성을 위한 기본 컴포넌트
// 1) BrowserRouter, 2) Routes, 3) Route
// 1) BrowserRouter는 웹 브라우저에서 react-router를 사용하여 라우팅 할 수 있도록 해주는 컴포넌트
//    웹 브라우저의 history 객체를 이용해서 경로를 탐색할 수 있게 해줌
// 2) Routes는 여러 개의 Route 컴포넌트를 자식으로 가질 수 있음
// 3) Route는 Routes의 하위 컴포넌트로써 path와 element라는 props를 갖고 있음
//    여기에서 path는 경로를 의미, element는 경로가 일치할 경우 렌더링을 할 리액트 엘리먼트를 의미

// 사용자가 주소창에 새로운 경로를 입력하거나 페이지 내 경로 이동이 일어나게 되면 
// Routes 컴포넌트는 하위 자식으로 갖고 있는 Route 컴포넌트 중에서 현재 경로와 가장 일치하는 경로를 찾아 해당 엘리먼트를 반환
// 그러면 사용자에게 보이는 화면이 바뀌게 되는 것

// 더 많은 기능은 공식 문서 참고
// https://reactrouter.com/

function SimpleRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* /로 접속하면 MainPage 컴포넌트가 렌더링 */}
        <Route path="/" element={<MainPage />}/>
        {/* /places로 접속하면 PlacePage 컴포넌트가 렌더링 */}
        <Route path="/places" element={<PlacePage />}/>
        {/* /games로 접속하면 GamePage 컴포넌트가 렌더링 */}
        <Route path="/games" element={<GamePage />}/>

        {/* 방법1. 서브 경로 설정 */}
        {/* <Route path="/games/hot" element={<HotGamePage />} />
        <Route path="/games/new" element={<NewGamePage />} /> */}

        {/* 방법2. Nested Route 방식 */}
        {/* 서브 경로 방식과 차이점: 부모엘리머트 + 자식 엘리먼트가 같이 보임 */}
        {/* 부모 안에 자식들을 랜더링해 보여줌(부모안에 어디에 보여줄지는 Outlet컴포넌트로 지정) */}
        {/* 활용 예: 헤더, 푸터 사이에 메인 영역 */}
        {/* Nested 안에 또 다른 Nested 가능 */}
        <Route path="/games" element={<GamePage />}>
          <Route path="hot" element={<HotGamePage />}/>
          <Route path="new" element={<NewGamePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SimpleRouter;