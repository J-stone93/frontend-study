import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    {
      id: '1',
      title: "Arcsaber 11 Pro",
      price: 299000,
      count: 2
    },
    {
      id: '3',
      title: "Aerus Z",
      price: 199000,
      count: 1
    }
  ]
};


// 장바구니 정보를 담을 slice 만들기
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 수량을 변경하는 리듀서 만들기
    // Quiz: 전달받은 상품의 id값으로 cartList에서 해당 상품을 찾아 수량을 1씩 증가/감소
    increasCount:(state, action) => {
      const s = state.cartList.find((cartItem) => {
        cartItem.id === action.payload
        s.count -1
      });

    },
    decreasCount:() => {

    }
  }
});

// action 생성 함수들
export const { increasCount, decreasCount } = cartSlice.actions;

// 선택자 함수들
export const selectCartList = state => state.cart.cartList;

// 리듀서 함수
export default cartSlice.reducer;