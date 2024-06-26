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
  border: 2px solid black;
`;

const Title = styled.div`
  background: white;
  color: #000000;
  height: 4rem;
  font-size: 1.5rem;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
`;

const Content = styled.div`
  background: white;
`;

const CustomDate = () => {
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;

  return(
    <div>
      {formattedDate}
    </div>);
};


function NoteMain(props) {
  const { children } = props
  

  return (
    <>
      <Header>You can do it🏋️‍♂️</Header>
      <NoteMainWarpper>
        <Title>운동 스케줄&nbsp;<CustomDate /></Title>
        <Content>{children}</Content>
      </NoteMainWarpper>

    </>
  );
};

export default NoteMain;