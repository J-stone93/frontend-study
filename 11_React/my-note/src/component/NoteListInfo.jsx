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
  line-height: 200px;

  `;
const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 18px;
  line-height: 1.5;
  flex: 1;
  `;




function NoteListInfo(props) {
  const { todos: { id, text, done } } = props;

  const [value, setValue] = useState('');


  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCilck = (e) => {
    e.preventDefault();
    const newText = value.replace("\r\n", "br");
    // onInsert(newText);
    setValue('');
    // onInsert(value);
  };

  return (
    <Background>
      <p></p>
      <Input
        onChange={handleChange}
        value={value}
        placeholder="루틴을 입력하세요"
      />
      <button
        onClick={handleCilck}
      ><FiPlusCircle /></button>
    </Background>
  );
};

export default NoteListInfo;