import React from 'react';
import Comment from './Comment.js';

const FeedComments = ({ comments, setComments }) => {
  //댓글 삭제 함수
  const DeleteBtn = id => {
    const _comments = comments.filter(key => key.id !== id);
    setComments(_comments);
  };

  return (
    <div className="feedCommentBox">
      {comments.map((cur, idx) => (
        <Comment {...cur} idx={idx} DeleteBtn={DeleteBtn} key={idx} />
      ))}
    </div>
  );
};

export default FeedComments;
