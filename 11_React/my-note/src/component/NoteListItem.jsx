import styled from "styled-components";
import { VscThumbsup, VscThumbsupFilled, VscTrash, VscEdit } from "react-icons/vsc";

const NoteListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  font-size: 18px;
  font-weight: 550;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  /* color: #ff6b6b; */
  cursor: pointer;
/* 
  &:hover {
    color: #ff8787;
  } */
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  /* color: #ff6b6b; */
  cursor: pointer;
  margin-right: 10px;

  /* &:hover {
    color: #ff8787;
  } */
`;

function NoteListItem(props) {
  const { todo: { id, text, done }, onRemove, onToggle, onEdit } = props;


  return (
    <NoteListItemWrapper>
      <Checkbox done={done} onClick={() => onToggle(id)}>
        {done ? <VscThumbsup /> : <VscThumbsupFilled />}
      </Checkbox>
      <Text>{text}</Text>
      <Edit onClick={() =>onEdit(id)}>
        <VscEdit />
      </Edit>
      <Remove onClick={() => {
        onRemove(id);
      }}>
        <VscTrash />
      </Remove>
    </NoteListItemWrapper>
  );
};

export default NoteListItem;