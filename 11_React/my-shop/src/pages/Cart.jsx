import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decreasCount, increasCount, selectCartList } from "../features/cart/cartSlice";

function Cart() {
  const cartList = useSelector(selectCartList);
  console.log(cartList);
  const dispatch = useDispatch();

  // 숫자 포맷 적용
  const formatter = new Intl.NumberFormat('ko-KR');

  return (
    <>
      {/* 표 레이아웃 만들기 */}
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199,000원</td>
          </tr> */}

          {/* Quiz: cartList 반복 렌더링 및 데이터 바인딩 */}
          {cartList.map((cartItem, index) =>
            <tr key={cartItem.id}>
              <td>{index + 1}</td>
              <td>{cartItem.title}</td>
              <td>
                <button
                  onClick={() => dispatch(decreasCount(cartItem.id))}
                >
                  -
                </button>
                {cartItem.count}
                <button
                  onClick={() => dispatch(increasCount(cartItem.id))}
                >
                  +
                </button>
              </td>
              <td>{formatter.format(cartItem.price * cartItem.count)}원</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;