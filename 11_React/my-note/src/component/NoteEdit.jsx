import styled from "styled-components";
import { VscChromeClose, VscCheck } from "react-icons/vsc";

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

  .header {
    display: flex;
    justify-content: flex-end;
  }

  svg {
    cursor: pointer;
    font-size: 25px;
  }
`;

const Body = styled.div`
  width: 30px;
  display: flex;
  justify-content: space-between;
`;

function NoteEdit(props) {
  const { children, offClose, onInput } = props;

  return (
    <Background>
      <NoteEditWarpper>
        <div className="header">
          <VscCheck onClick={onInput}/>
          <VscChromeClose onClick={offClose}/>
        </div>
        <Body>
          {children}
          {/* <button onClick={onInput}>확인</button> */}
        </Body>
      </NoteEditWarpper>
    </Background>
  );
};

export default NoteEdit;