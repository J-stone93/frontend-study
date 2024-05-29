import logo from './logo.svg';
import './App.css';
import NoteMain from './component/NoteMain';
import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import { useState, useRef, useEffect } from 'react';
import NoteInput from './component/NoteInput';
import NoteList from './component/NoteList';
import { v4 as uuidv4 } from "uuid";
import NoteEdit from './component/NoteEdit';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteListInfo from './component/NoteListInfo';
import NoteModal from './component/NoteModal';


const GlobalStyle = createGlobalStyle`
  /* reset css */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #e6e9ed;
    font-family: "온글잎 류뚱체";
    font-weight: bold;
  }

* {
  font-family: "온글잎 류뚱체";
  font-size: 25px;
}
`;





function App() {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: "하체",
    //   done: false,
    //   detail: [
    //     {
    //       id: 1,
    //       text:
    //     }
    //   ]
    // },
    // {
    //   id: 2,
    //   text: "어깨",
    //   done: false
    // },
    // {
    //   id: 3,
    //   text: "가슴",
    //   done: false
    // },
    // {
    //   id: 4,
    //   text: "등",
    //   done: false
    // }
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
      done: false
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
    setShowText(true);
  };

  // 텍스트창
  const [showText, setShowText] = useState(false);

  const handleTextToggle = () => {
    setShowText(!showText);
  };

  const handleInfo = (textarea) => {
    const todo = {
      id: uuidv4(),
      textarea
    }
    setTodos(todos.push(todo));
  }

  // 로컬 스토리지에서 가져오기
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || []; // 초기에 'todos'가 없으면 null을 반환함
    setTodos(dbTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 빈값 입력시 모달

  // const [showModal, setShowModal] = useState(true);

  // const handleOnModal = () => setShowModal(true);
  // const handleOffModal = () => setShowModal(false);

  return (
    <>
      <Reset />
      <GlobalStyle />
      <NoteMain>
        <NoteInput onInsert={handleInsert}/>
        <NoteList
          todos={todos}
          onEdit={handleEdit}
          onRemove={handleRemove}
          onToggle={handleToggle}
          onClick={handleClick}
          onTextToggle={handleTextToggle}
          offClose={handleClose}
          onInput={handleInput}
          showText={showText &&
            <NoteListInfo onInfo={handleInfo} todos={todos} />}
        >
        </NoteList>
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

      {/* {showModal &&
        <NoteModal offModal={handleOffModal}/>
      } */}

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<NoteMain />}>
            <Route path='detail' element={<NoteListInfo />}></Route>
            <Route path='' element></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
