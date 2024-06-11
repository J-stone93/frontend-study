import axios from "axios";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedProduct, selectProduct } from "../features/product/productSlice";

function ProductDetail() {
  const { productId } = useParams();
  // console.log(useParams());

  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  // 숫자 포맷 적용
  const formatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });
  
  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProdutById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/J-stone93/my-shop/products/${productId}`);
        console.log(response);
        dispatch(getSelectedProduct(response.data))
      } catch (error) {
        console.error(error);
      }
    }
    fetchProdutById();
  }, []);

  return (
    <Container className="pt-3">
      <Row>
        {/* Quiz: 데이터 바인딩  */}
        <Col md={6}>
          <img src={product.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{formatter.format(product.price)}원</p>
          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;