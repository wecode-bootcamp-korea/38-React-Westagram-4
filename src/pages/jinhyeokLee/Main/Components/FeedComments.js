import React from 'react';
import Comment from './Comment.js';

const FeedComments = ({ comments, setComments, modalComments }) => {
  //댓글 삭제
  const DeleteBtn = id => {
    const _comments = comments.filter(key => key.id !== id);
    setComments(_comments);
  };

  if (modalComments === true) {
    return (
      <>
        {comments.map((cur, idx) => (
          <Comment {...cur} idx={idx} DeleteBtn={DeleteBtn} key={idx} />
        ))}
      </>
    );
  } else {
    return (
      <div className="feedCommentBox">
        {comments.length > 2
          ? null
          : comments.map((cur, idx) => (
              <Comment {...cur} idx={idx} DeleteBtn={DeleteBtn} key={idx} />
            ))}
      </div>
    );
  }

  // return (
  //   <div className="feedCommentBox">
  //     {comments.length > 2
  //       ? null
  //       : comments.map((cur, idx) => (
  //           <Comment {...cur} idx={idx} DeleteBtn={DeleteBtn} key={idx} />
  //         ))}
  //   </div>
  // );
};

export default FeedComments;
