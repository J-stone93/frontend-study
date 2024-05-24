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
import NoteEdit from './component/NoteEdit';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteListInfo from './component/NoteListInfo';

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

  const [showNoteEdit, setShowNoteEdit] = useState(false);
  const [editTodo, setEditTodo] = useState({});

  
  const handleChange = (e) => {
    setEditTodo({
      ...editTodo,
      text: e.target.value
    })
  };
  const handleEdit = (id) => {
    setEditTodo(todos.find(todo => todo.id === id));
    setShowNoteEdit(true);
  };
  const handleClose = () => {
    setShowNoteEdit(false);
  };
  const handleInput = () => {
    setTodos(todos.map(todo => todo.id === editTodo.id ? editTodo : todo));
    handleClose();
  };
  
  const nextId = useRef(5);
  
  const handleInsert = (text) => {
    const todo = {
      // id: nextId.current,
      id: uuidv4(),
      text,
      done: true
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };
  
  const handleToggle = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const handleClick = () => {
    setShowtext(true);
  };
  
  // 텍스트창
  const [showtext, setShowtext] = useState(false);

  const handleTextToggle = (id) => {
    setShowtext(!showtext);
  };

  return (
    <>
      <Reset />
      <GlobalStyle />
      <NoteMain>
        <NoteInput onInsert={handleInsert} />
        <NoteList
          todos={todos}
          onEdit={handleEdit}
          onRemove={handleRemove}
          onToggle={handleToggle}
          onClick={handleClick}
          onTextToggle={handleTextToggle}
        >
        </NoteList>
      {showtext &&
        <NoteListInfo
          offClose={handleClose}
          onInput={handleInput}
        >
        </NoteListInfo>
      }
      </NoteMain>

      {showNoteEdit &&
        <NoteEdit
          offClose={handleClose}
          onInput={handleInput}
        >
          <input style={{ border: 'none', outline: 'none', fontSize: '22px', fontWeight: '500' }}
            type="text" size={20} value={editTodo.text} onChange={handleChange} />
        </NoteEdit>
      }

      {/* <BrowserRouter>
        <Routes>
          <Route path='new' element={<NoteListInfo />}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
