import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";

function PropUse() {
  return (
    <>
        {/* 키-값 쌍의 형태로 자식 컴포넌트에 props를 전달할 수 있음 */}
        {/* 정수, 변수, 다른 컴포넌트 등 값을 넣을 때는 {} 사용 */}
        {/* 문자열은 {} 생략 가능 */}
        {/* Quiz:name(문자), introduction(문자), viewCount(숫자) */}

      <Profile name='장원석' introduction='안녕하세요.' viewCount={100}/>

      <Layout 
        width={2560}
        height={1400}
        // props로 다른 컴포넌트를 넘기는 것도 가능
        header={<Header title='블로그 헤더입니다'/>}
        footer={<Footer />}
      />
    </>
  );
}

export default PropUse