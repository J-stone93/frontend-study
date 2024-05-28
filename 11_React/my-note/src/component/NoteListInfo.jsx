import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";


const Background = styled.form`
  /* width: 320px; */
  /* height: 200px;  */
  background: #acafb3;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  border-top: 2px solid black;
  `;

const Input = styled.textarea`
  background: none;
  outline: none;
  border: none;
  resize: none;
  padding: 10px;
  font-size: 18px;
  line-height: 1.5;
  flex: 1;
  `;

const Button = styled.button`
  border: none;
  background: #acafb3;
  color: white;
  &:hover {
    color: black;
  }
  `;




function NoteListInfo(props) {
  const { todos: { id, text, done },onInfo } = props;

  const [value, setValue] = useState('');


  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCilck = (e) => {
    e.preventDefault();
    const newText = value.replace("\r\n", "br");
    // onInsert(newText);
    setValue('');
    // onInfo(value);
  };

  return (
    <Background>
      <Input
        onChange={handleChange}
        value={value}
        placeholder="루틴을 입력하세요"
      />
      <Button
        onClick={handleCilck}
      ><FiPlusCircle /></Button>
    </Background>
  );
};

export default NoteListInfo;