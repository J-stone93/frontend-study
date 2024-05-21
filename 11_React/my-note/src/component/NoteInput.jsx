import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  background: #495057;
  border-radius: 10px 10px 0 0 ;
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-size: 18px;
  line-height: 1.5;
  color: white;
  /* flex: 1;  */
  &::placeholder {
    color: #dee2e6;
  }
`;

function NoteInput() {
  return (
    <Wrapper>
      <StyledInput 
      type="text"
      placeholder="운동 부위를 입력하세요"
      />
    </Wrapper>
  );
};

export default NoteInput;