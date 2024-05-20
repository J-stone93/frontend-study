import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  height: ${props => props.height && props.height + 'px'};
  padding: 16px;
  line-height: 20px;
`;

// 공통 텍스트 컴포넌트

function TextInput(prosp) {
  const { height, value, onChange } = prosp;

  return (
    <StyledTextarea height={height} value={value} onChange={onChange} />
  );
};

export default TextInput;