import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";


const Background = styled.form`
  height: 320px;
  height: 200px; 
  background: red;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  line-height: 200px;
`;



function NoteListInfo() {
  


  return (
    <Background>
      <div>
      <p>루틴을 입력하세요</p>
      </div>
      <textarea></textarea>
    </Background>
  );
};

export default NoteListInfo;