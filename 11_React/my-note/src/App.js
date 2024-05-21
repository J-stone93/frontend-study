import logo from './logo.svg';
import './App.css';
import NoteMain from './component/NoteMain';
import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* reset css */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #e6e9ed;
  }
`;




function App() {
  return (
    <>
    <Reset />
    <GlobalStyle />
      <NoteMain />
    </>
  );
}

export default App;
