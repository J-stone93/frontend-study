// 렌더링과 상관없이 고정값들은 전역 변수로 선언(주소 상수들)

const unitConvert = {
  mm: {
    name: '밀리미터(mm)',
    ratio: 1000
  },
  cm: {
    name: '센티미터(cm)',
    ratio: 100
  },
  m: {
    name: '미터(m)',
    ratio: 1
  },
  km: {
    name: '킬로미터(km)',
    ratio: 0.001
  },
  inch: {
    name: '인치(inch)',
    ratio: 39.370079
  }
};

// 지정한 단위로 환산하여 보여주는 컴포넌트
function UnitInput(props) {

  const { unit, length } = props;

  return (
    <>
      <input type="text" value={length * unitConvert[unit].ratio} disabled />
      {unitConvert[unit].name}
    </>
  );
};

export default UnitInput;