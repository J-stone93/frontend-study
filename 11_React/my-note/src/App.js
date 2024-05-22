import logo from './logo.svg';
import './App.css';
import NoteMain from './component/NoteMain';
import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import styled from "styled-components";
import { useState, useRef } from 'react';
import NoteInput from './component/NoteInput';
import NoteList from './component/NoteList';
import { v4 as uuidv4 } from "uuid";

const GlobalStyle = createGlobalStyle`
  /* reset css */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #e6e9ed;
  }
`;




function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "하체",
      done: true
    },
    {
      id: 2,
      text: "어깨",
      done: true
    },
    {
      id: 3,
      text: "가슴",
      done: true
    },
    {
      id: 4,
      text: "등",
      done: true
    }

  ]);
  const nextId = useRef(5);
  const handleInsert = (text) => {
    const todo = {
      // id: nextId.current,
      id: uuidv4(),
      text,
      done: false
    }
    setTodos(todos.concat(todo));
    nextId.current += 1; 
  };

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
    <Reset />
    <GlobalStyle />
      <NoteMain>
        <NoteInput onInsert={handleInsert}/>
        <NoteList 
          todos={todos}
          onRemove={handleRemove} 
        />
      </NoteMain>
    </>
  );
}

export default App;
