import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";

const Wrapper = styled.form`
  display: flex;
  background: #495057;
  border-radius: 10px 10px 0 0 ;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-size: 18px;
  line-height: 1.5;
  color: white;
  flex: 1; 
  &::placeholder {
    color: #dee2e6;
  }
`;

const Button = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;
  border-radius: 0 10px 0 0;

  &:hover {
    background: #adb5bd;
  }
`;

function NoteInput() {
  return (
    <Wrapper>
      <Input 
      type="text"
      placeholder="운동 부위를 입력하세요"
      />
      <Button>
      <FiPlusCircle />
      </Button>
    </Wrapper>
  );
};

export default NoteInput;