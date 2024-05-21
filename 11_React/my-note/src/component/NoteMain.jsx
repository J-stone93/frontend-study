import styled from "styled-components";
import NoteInput from "./NoteInput";


const Header = styled.div`
  width: 600px;
  height: 70px;
  margin: 100px auto 0;
  background: white;
  border: 3px solid white;
  border-radius: 10px;
  /* color: white; */
  text-align: center;
  line-height: 70px;
  font-size: 30px;
  font-weight: bold;
`;

const NoteMainWarpper = styled.div`
  width: 500px;
  height: 400px;
  margin: 40px auto 0;
  background: white;
  border-radius: 10px;
`;



function NoteMain() {
  return (
    <>
    <Header>You can do it🏋️‍♂️</Header>
    <NoteMainWarpper>
      <NoteInput />
    </NoteMainWarpper>
    
    </>
  );
};

export default NoteMain;