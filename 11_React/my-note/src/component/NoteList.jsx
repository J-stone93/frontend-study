import styled from "styled-components";
import NoteListItem from "./NoteListItem";
import NoteListInfo from "./NoteListInfo";
import { Outlet } from "react-router-dom";

const NoteListWrapper = styled.div`
  min-height: 320px;
  max-height: 700px; 
  overflow-y: auto;
`;

function NoteList(props) {
  const { todos, onRemove, onToggle, onEdit, onClick, onTextToggle } = props

  return (
    <NoteListWrapper>

      {todos.map((todo) => {
        return <NoteListItem ket={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}
                onEdit={onEdit} onClick={onClick} onTextToggle={onTextToggle}/>;
      })}
      {/* <NoteListInfo /> */}
      {/* <Outlet /> */}
    </NoteListWrapper>
  );
};

export default NoteList;