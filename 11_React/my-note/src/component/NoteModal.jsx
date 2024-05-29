import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Container = styled.div`
  width: 20rem;
  background: #f1f1f1;
  border: 2px solid black;
  border-radius: 6px;
  display: flex;
  p {
    flex: 1;
    font-size: 24px;
    text-align: center;
    padding: 10px;
  }
  button {
    border-left: 2px solid black;
    border-top: none;
    background: #312121;
    color: #f1f1f1;
    &:hover {
      background: #3d2828;
    }
  }
`;

function NoteModal(props) {
const { offModal } = props;

  return (
    <Background>
      <Container>
        <p>운동 부위를 입력하세요</p>
        <button onClick={() => offModal()}>확인</button>
      </Container>
    </Background>
  );
};

export default NoteModal;