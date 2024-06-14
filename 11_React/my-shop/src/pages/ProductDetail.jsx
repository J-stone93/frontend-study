import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearSelectedProduct, getSelectedProduct, selectSelectedProduct } from "../features/product/productSlice";
import styled, { keyframes } from "styled-components";
import { toast } from "react-toastify";
import TabContents from "../components/TabContents";

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from { background-color: #cff4fc; }
  50% { background-color: #e8f7fa; }
  to { background-color: #cff4fc; }
`;
const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;


function ProductDetail() {
  const { productId } = useParams();
  // console.log(useParams());

  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);

  const [alert, setAlert] = useState(true); // 상세정보 Alert 창 상태
  const [orderCount, setOrderCount] = useState(1); // 주문수량 상태
  const [currentTabIndex, setCurrentTabIndex] = useState(0); // 현재 탭 상태
  const [currentTab, setCurrentTab] = useState('detail');


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
        // setTimeout(() => {
        //   setAlert(false);
        // }, 3000)
      } catch (error) {
        console.error(error);
      }
    }
    fetchProdutById();
    // 상품 상세 페이지가 언마운트 될 때 전역 상태 초기화
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, []);

  // 마운트 후에 처리해야할 게 많으면 여러개의 useEffect로 나누는것이 좋음
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleChangeOrderCount = (e) => {
    // 숫자 외 입력 시 유효성 검사 후 경고 토스트 띄우기
    if (isNaN(e.target.value)) {
      toast.error('숫자만 입력하세요!', { containerId: "B" });
      return;
    }

    setOrderCount(Number(e.target.value));
  };

  // selectedProduct의 값이 처음부터 null값이라 아래 코드나 밑에 코드에서 product에 ? 붙임
  // if (!product) {
  //   return null;
  // }

  return (
    <Container className="pt-3">
      {/* Alert을 띄우고 3초 뒤에 사라지게 만들기 
        (힌트: 처음 렌더링 됐을 때 setTimeout으로 타이머 설정 + 조건부 렌더링) 
        1) state 만들기
        2) 조건부 렌더링
        3) 처음 렌더링 됐을 때 setTimeout으로 타이머 설정하여 state 바꾸기  
      */}
      {alert &&
        <StyledAlert variant="info" onClose={() => setAlert(false)} dismissible>
          현재 34명이 이 상품을 보고 있습니다.
        </StyledAlert>}
      <Row>
        {/* Quiz: 데이터 바인딩  */}
        <Col md={6}>
          <img src={product?.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{product?.title}</h4>
          <p>{product?.content}</p>
          <p>{formatter.format(product?.price)}원</p>

          <Col md={4} className="m-auto mb-3">
            {/* Quiz: text input을 제어 컴포넌트로 만들기 */}
            <Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount} />
          </Col>

          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>

      {/* 탭 버튼 UI */}
      {/* defaultActiveKey: 기본으로 active 할 탭 지정, active 클래스가 들어가 있음  */}
      <Nav variant="tabs" defaultActiveKey="link-0" className="my-3">
        <Nav.Item>
          {/* <Nav.Link eventKey="link-0" onClick={() => setCurrentTabIndex(0)}>상세정보</Nav.Link> */}
          <Nav.Link eventKey="link-0" onClick={() => setCurrentTab('detail')}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-1" onClick={() => setCurrentTabIndex(1)}>리뷰</Nav.Link> */}
          <Nav.Link eventKey="link-1" onClick={() => setCurrentTab('review')}>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-2" onClick={() => setCurrentTabIndex(2)}>O&amp;A</Nav.Link> */}
          <Nav.Link eventKey="link-2" onClick={() => setCurrentTab('qa')}>O&amp;A</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-3" onClick={() => setCurrentTabIndex(3)}>반품/교환정보</Nav.Link> */}
          <Nav.Link eventKey="link-3" onClick={() => setCurrentTab('exchange')}>반품/교환정보</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* 탭의 내용을 다 만들어 놓고 조건부 렌더링하면 됨 */}
      {/* 방법1: 삼항 연산자 사용(가독성 나쁨) */}
      {/* {currentTabIndex === 0 
        ? <div>탭 내용1</div> 
        : currentTabIndex === 1
          ? <div>탭 내용2</div>
          : currentTabIndex === 2
            ? <div>탭 내용3</div>
            : currentTabIndex === 3
              ? <div>탭 내용4</div>
              : null
      } */}

      {/* 방법2: 컴포넌트로 추출(가독성 개선) */}
      {/* <TabContents currentTabIndex={currentTabIndex}/> */}

      {/* 방법3(편법): 배열이나 객체 형태로 만들어서 조건부 렌더링 */}
      {/* 배열 형태 */}
      {/* {[
        <div>탭 내용1</div>,
        <div>탭 내용2</div>,
        <div>탭 내용3</div>,
        <div>탭 내용4</div>
      ][currentTabIndex]} */}

      {/* Quiz: 객체 형태 */}
      {{
        'detail': <div>탭 내용1</div>,
        'review': <div>탭 내용2</div>,
        'qa': <div>탭 내용3</div>,
        'exchange': <div>탭 내용4</div>
      }[currentTab]}
    </Container>
  );
};

export default ProductDetail;