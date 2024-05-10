import { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog() {

  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value)
  };

  const handleClick = () => {
    alert(`${input}님 탑승을 환영합니다`);
    setInput('');
  };

  return (
    <Dialog
      title="화성 탐사 프로그램🚀"
      message="당신의 이름은?"
      color='violet'
    >
      <input value={input} type="text" onChange={handleInput}/>
      <button type="button" onClick={handleClick}>가입하세요!</button>
    </Dialog>
  );
};

export default SignUpDialog;