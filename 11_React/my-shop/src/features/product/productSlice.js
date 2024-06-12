import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null,
}

// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => { // 여기서 state는 위에 productList: []를 갖고옴
      console.log(action.payload);
      state.productList = action.payload;
    },
    getSelectedProduct: (state, action) => {
      console.log(action);
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  }
});

// action 생성 함수
export const { 
  getAllProducts,
  getSelectedProduct,
  clearSelectedProduct
} = productSlice.actions;
// export const { getSelectedProduct } = productSlice.actions;

// 선택자 함수  여기에서 state는 전역state 즉 productSlice말고 다른 슬라이스도 포함돼서 state.~해야함
export const selectProductList = (state) => state.product.productList;
export const selectSelectedProduct = (state) => state.product.selectedProduct;

// 리듀서 함수들

export default productSlice.reducer;