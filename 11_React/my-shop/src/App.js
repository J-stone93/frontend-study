import { createGlobalStyle } from "styled-components";
// App.css, index.css 삭제 인포트도 삭제
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";

// 글로벌(공통) 스타일 설정
const GlobalStyle = createGlobalStyle`


  body {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  #root { // 예제를 위해 모든 인라인 요소 가운데 정렬 실제로는 이렇게 사용 안함
    text-align: center;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      {/* 부트스트랩 연습 */}
      {/* 1) 리액트 부트스트랩 */}
      {/* <Button variant="primary">Primary</Button> */}
      {/* 2) 기존 부트스트랩 */}
      {/* <button type="button" className="btn btn-primary">Primary</button> */}

      <GlobalStyle />

      {/* 헤더 영역: 상단 내비게이션 바 */}

      {/* Quiz: Layout 컴포넌트로 추출 및 Nested Route 구성해보기 */}
      <Routes>
        <Route path='/' element={<Layout />} >
          {/* index: index route(여기서는 기본 자식 라우트를 의미) */}
          <Route index element={<Main />} />
          {/* <Route path="detail" element={<ProductDetail />}/> */}
          {/* Quiz: 상품별 상세페이지 여러 개를 라우팅 하려면? URL 파라미터 사용
            예: /detail/1로 접속하면 productId에 1이 담기도록 설정
            */}
          <Route path='detail/:productId' element={<ProductDetail />} />
        </Route>

      </Routes>


    </>
  );
}

export default App;

// 패키지 설치 및 StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios

// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존 것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
// https://react-bootstrap.netlify.app/
