import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";

const Wrapper = styled.form`
  display: flex;
  background: #acafb3;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 18px;
  line-height: 1.5;
  color: white;
  flex: 1; 
  &::placeholder {
    color: #12171b;
  }
`;

const Button = styled.button`
  border: none;
  background: #acafb3;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;
  &:hover {
    /* background: #adb5bd; */
    color: black;
  }
`;

function NoteInput(props) {
  const { onInsert } = props;

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input 
      type="text"
      value={value}
      placeholder="운동 부위를 입력하세요"
      onChange={handleChange}
      />
      <Button type="submit">
      <FiPlusCircle />
      </Button>
    </Wrapper>
  );
};

export default NoteInput;