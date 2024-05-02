import { useState } from "react";

function NameForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    // e.target.value: 이벤트가 발생한 타겟(input 객체)에 입력된 값
    setValue(event.target.value);
    // 입력값이 state를 통해 관리되는 이런 방식을 제어 컴포넌트라고 부름

    // 만약 사용자가 입력한 모든 알파벳을 대문자로 변경시켜서 관리하고 싶다면
    setValue(event.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    alert('입력한 이름: ' + value);
    e.preventDefault(); // 해당 이벤트의 기본 동작을 막음
    // 여기서 submit 이벤트 기본 동작은 폼 데이터를 서버로 전송하고 새로고침
    // setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input type="text" value={value} onChange={handleChange} />
          {/* input에 value를 넣어 setValue(event.target.value.toUpperCase())와 동기화함 */}
          {/* <input type="text" onChange={handleChange} /> */}
          {/* state에서 값을 가져다 넣어줌으로써 항상 state에 들어있는 값이 input에 표시됨 */}
        </label>
        <button type="submit">제출</button>
      </form>
    </>
  );
};

export default NameForm;