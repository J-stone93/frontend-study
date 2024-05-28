import styled from "styled-components";
import { VscChromeClose, VscCheck } from "react-icons/vsc";
import { useRef } from "react";

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

const NoteEditWarpper = styled.div`
  /* display: flex; */
  width: 301px;
  background: white;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  overflow-y: auto;
  padding: 10px;
  border: 2px solid black;

  .header {
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid black;
  }

  svg {
    cursor: pointer;
    font-size: 25px;
  }
`;

const Body = styled.div`
  width: 30px;
`;

function NoteEdit(props) {
  const { children, offClose, onInput } = props;

  
  return (
    <Background>
      <NoteEditWarpper>
        <Body>
          {children}
          {/* <button onClick={onInput}>확인</button> */}
        </Body>
        <div className="header">
          <VscCheck onClick={onInput}/>
          <VscChromeClose onClick={offClose}/>
        </div>
      </NoteEditWarpper>
    </Background>
  );
};

export default NoteEdit;