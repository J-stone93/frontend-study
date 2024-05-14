import { createGlobalStyle } from "styled-components";
import reset, { Reset }  from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useRef, useState } from "react";

// 패키지 설치
// npm install styled-components styled-reset react-icons

// 글로벌(공통) 스타일 적용과 reset css 적용
// createGlobalStyle을 이용하여 글로벌 스타일 컴포넌트를 만들고 가장 첫번째로 렌더링하면 됨
const GlobalStyle = createGlobalStyle`
  /* reset css */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #e9ecef;
  }
`;


function App() {
  // todos 배열 안에 객체 형태로 데이터가 존재
  // id, 내용, 완료여부
  // TodoList에 props로 전달
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '수업 교안 작성하기',
      done: true
    },
    {
      id: 2,
      text: 'react 복습하기',
      done: true
    },
    {
      id: 3,
      text: '자바 stream 정리하기',
      done: false
    },
  ]);


  // 새 객체를 만들 때마다 id값에 1씩 더해줘야 하는데
  // id값은 렌더링되는 정보가 아님
  // 단순히 새로운 항목을 만들 때 참조되는 값임
  // useState는 화면이 바뀌어야 할 때 사용 useRef는 화면이 표시되지 않아 화면이 바뀌도 않아도 될 때 사용
  // useRef()를 사용하여 변수 생성
  const nextId = useRef(4);
  console.log(nextId);

  // todos 배열에 새 할 일 객체를 추가하기 위한 함수
  const handleInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      done: false
    };

    // 방법1
    // const copyTodos = [...todos];
    // copyTodos.push(todo);
    // setTodos(copyTodos); // 새로운 배열을 만들어 넣어줌

    // (편법)
    // setTodos([...todos, todo]);

    // 방법2 - 배열의 내장 함수 이용 ***************** concat은 배열에 객체를 추가하고 새로운 배열로 반환됨
    setTodos(todos.concat(todo));


    nextId.current += 1; // nextId에 1씩 더하기
  };

  // todos 배열에서 id값으로 항목을 지우기 위한 함수
  const handleRemove = (id) => {
    // 방법1
    // const copyTodos = [...todos];
    // const targerIndex = todos.findIndex(todo => todo.id === id);
    // copyTodos.splice(targerIndex, 1);
    // setTodos(copyTodos);

    // 방법2 - 배열의 내장 함수 이용 ***************** filter함수를 이용해 !==로 선택한 것을 제외하고 반환 시켜줌
    setTodos(todos.filter(todo => todo.id !== id));

  };

  return (
    <>
      {/* Reset컴포넌트 활용해서 css reset */}
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert} />
        <TodoList todos={todos} onRemove={handleRemove}/>
      </TodoTemplate>
    </>
  );
}

export default App;
