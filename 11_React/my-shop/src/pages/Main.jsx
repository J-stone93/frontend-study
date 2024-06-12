import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { getAllProducts, selectProductList } from "../features/product/productSlice";
import ProductListItem from "../components/ProductListItem";

// 리액트(JS)에서 이미지 파일 가져오기
// 1) src 폴더 안 이미지(상대 경로로 import해서 사용)
import yonexImg from "../images/yonex.jpg";
// 2) public 폴더 안 이미지(root 경로로 바로 접근)
// 빌드 시 src 폴더에 있는 코드와 파일은 압축이 되지만 public 폴더에 있는 것들은 그대로 보존
// 이미지 같은 수정이 필요없는 static 파일의 경우 public에 보관하기도 함

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  /* background-image: url("/images/yonex.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main() {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList); // 함수 실행 결과가 아니라 함수 자체를 넣어줌

  // 처음 마운트 됐을 때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 전역 상태로 저장
  useEffect(() => {
    // 서버에 상품 목록 요청
    axios.get('https://my-json-server.typicode.com/J-stone93/my-shop/products')
      .then((respones) => {
        console.log(respones.data);
        dispatch(getAllProducts(respones.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground />
      </section>

      {/* 상품 목록 섹션 */}
      <section>
        <Container>
          <Row>
            {/* 부트스트랩 이용한 반응형 작업(Container와 Row컬럼 밑에서만 사용가능) */}
            {/* md >= 768px 이상에서 전체 12등분 중 4:4:4로 보여줌 */}
            {/* <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1659329583483s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col> */}

            {/* ProductListItem 컴포넌트를 만들어서 반복 렌더링으로 바꾸고 데이터 바인딩 */}
            {/* Quiz: 
              1) 반복적인 상품 아이템을 src/components/ProductListItem 컴포넌트로 만들기
              2) productList 배열을 반복하며 ProductListItem 컴포넌트를 렌더링 하기
              3) 상품 정보를 props로 넘겨서 데이터 바인딩 하기
            */}

            {productList.map(product => <ProductListItem key={product.id} product={product} />)}

          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;

// 가짜(Fake) API 서버 만들기
// 실무와 비슷한 느낌으로 하기 위해 가짜(Fake) API 서버를 만들거임

// 1. json-server (혼자 CRUD 연습하기 좋음)
// 이 도구를 사용하면 json 파일 하나만 있으면 로컬에 연습용 서버를 쉽게 구성 할 수 있음
// (즉, 사용하려는 컴퓨터에서 매번 로컬 서버를 띄워야 함)

// json-server 사용법
// ./src/data.json 이라는 파일을 작성
// npx json-server ./src/data.json --port 4000
// 또는
// npm i -g json-server
// json-server --watch ./src/data.json --port 4000

// 더 자세한 사용법 참고
// https://github.com/typicode/json-server
// https://redux-advanced.vlpt.us/3/01.html

// 2. My JSON Server (Read만 가능)
// 이 서비스를 사용하면 GitHub와 연동하여 연습용 서버를 쉽게 구성 할 수 있음

// My JSON Server 사용법
// GitHub에 저장소 생성(<your-username>/<your-repo>)
// db.json파일 만들기
// 서버에 액세스하려면 https://my-json-server.typicode.com/<your-username>/<your-repo>를 방문

// 사용 예
// https://my-json-server.typicode.com/geoblo/db-shop
// https://my-json-server.typicode.com/geoblo/db-shop/products
// https://my-json-server.typicode.com/geoblo/db-shop/products/1