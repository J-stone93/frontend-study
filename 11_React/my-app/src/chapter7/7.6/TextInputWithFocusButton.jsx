import { useEffect, useRef } from "react";

function TextInputWithFocusButton() {
  // 특정 DOM을 선택할 때 useRef 사용
  const inputEl = useRef(null); // 초기값은 null
  console.log(inputEl); // 레퍼런스 객체라 부르는 일반 자바스크립트 객체를 반환함

  // useEffect는 렌더링이 다 끝난 후에 실행할 코드  
  useEffect(() => {
    // 마운트 됐을때(렌더링 이후에) 실행되므로 input 엘리먼트가 나옴
    console.log(inputEl);

    // 활용 예: 로그인이나 회원가입 화면이 처음 보여질 때 자동 포커스
    inputEl.current.focus();
  }, []);

  const handleButtonClick = () => {
    // 여기서 inputEl.current에 text input 객체를 담고 있음
    inputEl.current.focus(); // 강제 포커스를 주는 메소드
  };

  return (
    <>
      {/* ref 속성에 inputEl을 넣어주기만 하면 해당 DOM에 접근 가능 */}
      <input ref={inputEl} type="text" />
      <button type="button" onClick={handleButtonClick}>Focus the input</button>
    </>
  );
};

export default TextInputWithFocusButton;