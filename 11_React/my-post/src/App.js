import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';

// POST앱에 CRUD(앱의 기본이되는 기능) 만들기
// C: Craete(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)


function App() {
  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?', '자바스크립트 핵심 문법', 'CSS 스타일링 가이드']);

  const [showPostDetail, setShowPostDetail] = useState(false);
  // 현재 내가 보는 있는 글에 인덱스
  const [currentIndex, setCurrentIndex] = useState(null);

  const [likeCount, setLikeCount] = useState([0, 0, 0]);

  const [input, setInput] = useState('');


  // const hadleClick = () => {
  //   setShowPostDetail(true);
  //   setCurrentIndex(index);
  // }

  return (
    <>
      <header className="header--dark">
        <h4>Gonilog</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        {/* <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by Goni.kim</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 4월 20일</p>
          <p>by WS.Jang</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2023년 1월 20일</p>
          <p>by Goni.kim</p>
        </div> */}

        {/* Quiz: map() 이용해여 posts 반복 렌더링 */}
        {posts.map((post, index) => {
          return (
            <div key={index} className='list' onClick={() => {
              setShowPostDetail(!showPostDetail);
              setCurrentIndex(index);
            }
            }>
              <h4>{post}</h4>
              <p>2023년 1월 20일</p>
              <p>by Goni.kim</p>

              <hr />

              <div className='toolbar'>
                <span onClick={(e) => {
                  // (버그 수정) 현재는 좋아요 버튼 누를 때 글 상세보기까지 같이 클릭 됨!
                  // 부모-자식 관계에 있을 때 이벤트 버블링이 일어남
                  e.stopPropagation(); // 상위 요소로 퍼지는 이벤트 버블링을 막음

                  const likeCountCopy = [...likeCount];
                  // likeCountCopy[index] = likeCountCopy[index] + 1;
                  // likeCountCopy[index] += 1;
                  likeCountCopy[index]++;
                  setLikeCount(likeCountCopy);
                }}
                >
                  💗 {likeCount[index]}
                </span>

                {/* 포스트 삭제하기 */}
                {/* Quiz: 포스트 마다 삭제 버튼 & 기능 만들기 */}
                <span style={{ fontSize: 27 }} onClick={(e) => {
                  // div 하나를 직접 제거하는 것이 아닌
                  // posts state에서 제거하면 알아서 자동으로 렌더링 하게 만들기
                  e.stopPropagation(); // 이벤트 버블링 막기

                  // 배열의 splice() 함수 사용 방법
                  // const copyPosts = [...posts];
                  // copyPosts.splice(index, 1);
                  // setPosts(copyPosts);

                  // 또는 배열의 filter() 함수 사용
                  const filteredPosts = posts.filter((value, idx) => {
                    return index !== idx;
                  });
                  setPosts(filteredPosts);

                  // (버그 수정) 삭제 시 해당 포스트의 좋아요 카운트로 같이 삭제
                  const copyLikeCount = [...likeCount];
                  copyLikeCount.splice(index, 1);
                  setLikeCount(copyLikeCount);
                }}>
                  🗑
                </span>
              </div>

            </div>
          );
        })}

        {/* 포스트 등록하기 */}
        {/* input에 제목 입력 후 등록 버튼 누르면 맨 앞에 새로운 포스트 추가

          1) input을 제어 컴포넌트로 만들어서 사용자가 입력한 값을 state로 저장해서 관리
          2) 등록 버튼 클릭 시 posts 상태의 맨 앞에 새로운 데이터 추가
        */}
        <input type="text" value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
        <button type='button' onClick={() => {
          // div 하나를 새로 생성 X
          // posts state에 요소 하나 추가하면 자동으로 렌더링 O

          // 내가한거
          // setPosts([input , ...posts]);
          // setInput('');
          // setLikeCount([0, ...likeCount]);

          // 선생님
          const copyPosts = [input, ...posts];
          setPosts(copyPosts);
          setInput('');

          // (버그 수정) 포스트 하나 추가 시 좋아요 카운트도 같이 추가
          setLikeCount([0, ...likeCount]);
        }}
        disabled={input}
        >
        </button>


        {/* 포스트 상세보기 */}
        {/* Quiz: 조건부 렌더링 */}
        {/* {showPostDetail ? <PostDetail /> : null} */}
        {showPostDetail && <PostDetail posts={posts} currentIndex={currentIndex} setPosts={setPosts} />}
      </div>
    </>
  );
}

export default App;


// (참고) 왜 새로고침하면 다 없어질까?
// 새로고침 시 HTML/CSS/JS 파일을 다시 읽어와서 그럼
// 데이터를 유지하려면 서버에 보내서 DB에 영구 저정하고
// 새로고침이 발생 시 DB에서 다시 읽어오면 됨

// <추가 개선 과제>
// 1. 현재 배열 안에 글 제목만 있는 문자열 데이터를 
// 제목, 날짜, 작성자, 좋아요 수 등을 포함한 객체 형태로 처리해보기
// state에 글 제목만 저장되어 있는게 아니라 날짜같은 것도 저장해두고 보여주는 식이면 굿(글 등록 시 현재 날짜까지 같이 저장되도록 하면 나이스)
// => 로직을 많이 바꿔야 하므로 시간이 많을 때 하기를 권장(어차피 다른 예제에서 객체 형태로 된 state를 다룰 예정)

// 2. input에 아무것도 입력안하고 등록 버튼 누르는거 막기
// 유저의 의도치않은 행동을 막는 코드도 많이 짜야 안전한 사이트가 됨
// 1) 미입력시 비활성화 -> 입력이 생기면 버튼 활성화
// 2) 등록 버튼 누를 시 유효성 검사

// 3. 포스트 수정할 때 input으로 입력받은 내용으로 수정해보기

// 4. 글 오름차순 정렬

// 5. 그 외 개선 및 구현할 것 많으니 자유롭게 연습해보기
// => PostList 또는 PostListItem 컴포넌트 추출