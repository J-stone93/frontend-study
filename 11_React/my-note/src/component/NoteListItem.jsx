import styled from "styled-components";
import { VscThumbsup, VscThumbsupFilled, VscTrash, VscEdit } from "react-icons/vsc";
import NoteListInfo from "./NoteListInfo";
// import { Outlet } from "react-router-dom";

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
  cursor: pointer;
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
  color: #3792e7;
  cursor: pointer;
  &:hover {
    color: #5ecff1;
  }
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #3792e7;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    color: #5ecff1;
  }
`;

function NoteListItem(props) {
  const { todo: { id, text, done }, onRemove, onToggle, onEdit, onClick, onTextToggle, showText, offClose, onInput } = props;

  // const handleClick = () => {
  //   onTextToggle(id)
  //   {showText}
  // }

  return (
    <NoteListItemWrapper>
      <Checkbox done={done} onClick={() => onToggle(id)}>
        {done ? <VscThumbsupFilled /> : <VscThumbsup />}
      </Checkbox>
      <Text
        onClick={() => {onTextToggle()}}
        // onClick={() => {handleClick}}
        // onClick2={() => showText}
        >
          {text}</Text>
          {/* {showText ?  <NoteListInfo /> : null} */}
      <Edit onClick={() => onEdit(id)}>
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