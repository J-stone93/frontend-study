import { useState } from "react";
import UnitCounter from "./UnitCounter";
import UnitInput from "./UnitInput";

function UnitCalculator() {
  // Shared State 실습
  const [length, setLength] = useState(1);

  const hadleChange = (e) => {
    setLength(Number(e.target.value)); // 값이 문자열로 들어가기 때문에 숫자로 변환 시켜줘야함
  };

  return (
    <>
      <p>단위 변환 계산기</p>
      <label>
        <input type="number" value={length} onChange={hadleChange} min={0}/>
        미터(m)
      </label>
      <hr />
      <UnitCounter length={length} onLengthChange={setLength} />
      <br />
      <UnitInput unit="mm" length={length}/>
      <br />
      <UnitInput unit="cm" length={length}/>
      <br />
      <UnitInput unit="m" length={length}/>
      <br />
      <UnitInput unit="km" length={length}/>
      <br />
      <UnitInput unit="inch" length={length}/>
      <br />
      <UnitCounter length={length} onLengthChange={setLength} />
    </>
  );
};

export default UnitCalculator;