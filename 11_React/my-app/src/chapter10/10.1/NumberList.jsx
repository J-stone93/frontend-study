const numbers = [1, 2, 3, 4, 5];

function NumberList() {
  // 배열을 반복 렌더링 할때는 key 속성을 필수로 넣어야 함
  // 임시로 배열의 index를 넣어 key 누락 문제를 해결
  const listItems = numbers.map((number, index) => {
    return <li key={index}>{number}</li>;
    // 1 => <li> </li> 배열을 엘리먼트로 바꿔준다
  });

  return (
    <>
      <ul>
        {listItems}
      </ul>

      <ul>
        {numbers.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>

      <ul>
        {[
          <li key={0}>{1}</li>,
          <li key={1}>{2}</li>,
          <li key={2}>{3}</li>,
          <li key={3}>{4}</li>,
          <li key={4}>{5}</li>
        ]}
      </ul>
    </>
  );
};

export default NumberList;