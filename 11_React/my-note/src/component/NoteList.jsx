import styled from "styled-components";
import NoteListItem from "./NoteListItem";
import NoteListInfo from "./NoteListInfo";
import { Outlet } from "react-router-dom";

const NoteListWrapper = styled.div`
  min-height: 320px;
  max-height: 700px; 
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  border-top: 2px solid black;
  border-bottom: 2px solid black;

  & + & {
    border-top: none;
  }
`;

function NoteList(props) {
  const { todos, onRemove, onToggle, onEdit, onClick, onTextToggle, offClose, showText } = props

  const falseTodos = todos.filter((todo) => !todo.done);
  const trueTodos = todos.filter((todo) => todo.done);

  return (
    <NoteListWrapper>

      <Title>남은 부위🔥</Title>
      {falseTodos.map((todo) => {
        return <NoteListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}
        onEdit={onEdit} onClick={onClick} onTextToggle={onTextToggle} offClose={offClose} showText={showText}/>;
      })}
      {showText}
      <Title>완료 부위💧</Title>
      {trueTodos.map((todo) => {
        return <NoteListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}
        onEdit={onEdit} onClick={onClick} onTextToggle={onTextToggle} />;
      })}

    </NoteListWrapper>
  );
};

export default NoteList;