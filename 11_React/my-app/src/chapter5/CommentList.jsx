import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '이수현',
    content: '이거 봐봐라'
  },
  {
    name: '장원석',
    content: '그거 어쩌죠?'
  },
  {
    name: '윤다훈',
    content: '원숭이도 나무에서 떨어진다'
  }
];

// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* <Comment />
      <Comment />
      <Comment /> */}

      {/* Quiz: props를 사용하여 name과 content 값 전달(데이터는 자유롭게 작성) */}
      {/* <Comment name='이수현' content='이거 봐봐라'/>
      <Comment name='장원석' content='그거 어쩌죠?'/>
      <Comment name='윤다훈' content='원숭이도 나무에서 떨어진다'/> */}

      {/* 배열을 동적으로 렌더링해야 할 때는 배열의 map() 함수를 사용
        일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 만들면 됨 */}
      {comments.map((comment, index) => {
        console.log(index, comment);
        return <Comment key={index} name={comment.name} content={comment.content} />;
      })}

      {/* map() 함수의 결과 */}
      {
        [
          <Comment key={0} name={'이수현'} content={'이거 봐봐라'} />,
          <Comment key={1} name={'장원석'} content={'그거 어쩌죠?'} />,
          <Comment key={2} name={'윤다훈'} content={'원숭이도 나무에서 떨어진다'} />
        ]
      }

      {comments.map((comment, index) =>
        <Comment key={index} name={comment.name} content={comment.content} />)}
    </div>
  );
}

export default CommentList;