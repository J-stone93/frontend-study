import styled from "styled-components";
import NoteListItem from "./NoteListItem";

const NoteListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px; // 57px * 9개 항목
  overflow-y: auto;
`;

function NoteList(props) {
  const { todos, onRemove, onToggle, onEdit } = props

  return (
    <NoteListWrapper>

      {todos.map((todo) => {
        return <NoteListItem ket={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit}/>;
      })}

    </NoteListWrapper>
  );
};

export default NoteList;