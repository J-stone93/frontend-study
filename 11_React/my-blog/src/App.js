import logo from './logo.svg';
import './App.css';
import Button from './component/ui/Button';
import TextInput from './component/ui/TextInput';
import MainPage from './component/page/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import PostViewPage from './component/page/PostViewPage';
import PostWritePage from './component/page/PostWritePage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

// 일반적으로 라우팅은 App 컴포넌트에 구현하게 되는데
// App 컴포넌트가 가장 처음으로 렌더링되는 최상위 컴포넌트이기 때문
function App() {
  return (
    <BrowserRouter>
      <MainTitleText>리액트 배워보기💻</MainTitleText>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post-write' element={<PostWritePage />} />
        <Route path='/post/:postId' element={<PostViewPage />} />
        {/* 여기서 :postId는 동적으로 변하는 파라미터를 위한 값 => URL 파라미터 */}
        {/* 경로에 콜론(:)을 쓰고 파라미터명을 입력하면
          연결된 컴포넌트에서 useParams() 훅을 사용해 postId 이름으로 해당 값을 가져올 수 있음
        */}

        {/* (참고) */}
        {/* URL 파라미터를 여러개 쓰고 싶다면 */}
        {/* <Route path='/post/:postId/:otherValue' element={<PostViewPage />} /> */}
        {/* 필수가 아닌 옵션값으로 처리하고 싶다면? Optional Segments */}
        {/* <Route path='/post/:postId/:otherValue?' element={<PostViewPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
