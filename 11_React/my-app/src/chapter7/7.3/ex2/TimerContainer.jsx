import { useState } from "react";
import Timer from "./Timer";
import { useEffect } from "react";

function TimerContainer() {
  const [showTimer, setShowTimer] = useState(false);


  return (
    <>
      {showTimer ? <Timer /> : null }
      {/* {showTimer && <Timer />} */}
      <br />
      <button type="button" onClick={() => setShowTimer(!showTimer)}>ON/OFF 토글</button>
    </>
  );
};

export default TimerContainer;