import styled from "styled-components";
import NoteInput from "./NoteInput";


const Header = styled.div`
  width: 600px;
  height: 70px;
  margin: 50px auto 0;
  background: white;
  border: 3px solid #acafb3;
  border-radius: 10px;
  /* color: white; */
  text-align: center;
  line-height: 70px;
  font-size: 30px;
  font-weight: bold;
`;

const NoteMainWarpper = styled.div`
  width: 450px;
  height: 700px;
  margin: 50px auto 0;
  background: white;
  border-radius: 10px;
`;

const Title = styled.div`
  background: white;
  color: #000000;
  height: 4rem;
  font-size: 1.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
`;



function NoteMain(props) {
  const { children } = props

  return (
    <>
      <Header>You can do it🏋️‍♂️</Header>
      <NoteMainWarpper>
        <Title>주 단위 운동 스케줄</Title>
        <Content>{children}</Content>
        {/* <NoteInput /> */}
      </NoteMainWarpper>

    </>
  );
};

export default NoteMain;