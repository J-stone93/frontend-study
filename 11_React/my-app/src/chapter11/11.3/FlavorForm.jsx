import { useState } from "react";

function FlavorForm() {
  const [value, setValue] = useState('coconut');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    alert('가장 좋아하는 맛: ' + value);
    e.preventDefault()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        좋아하는 맛 선택:
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut" selected>코코넛</option>
          <option value="mango">망고</option>
        </select>
        {/* HTML DOM */}
        {/* <select>
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut" selected>코코넛</option>
          <option value="mango">망고</option>
        </select> */}
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default FlavorForm;