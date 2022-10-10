import React from 'react';
import Comment from './Comment.js';

const FeedComments = ({
  comments,
  setComments,
  modalComments,
  ModalHandler,
  setModalComments,
  setViewAll,
  viewAll,
}) => {
  //댓글 삭제
  const DeleteBtn = id => {
    const _comments = comments.filter(key => key.id !== id);
    setComments(_comments);
  };

  if (modalComments === true) {
    return (
      <div className="feedCommentBox">
        {comments.map((cur, idx) => (
          <Comment {...cur} idx={idx} DeleteBtn={DeleteBtn} key={idx} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="feedCommentBox">
        {comments.length > 2 ? (
          <p
            className="feedCommentViewAll"
            onClick={() => {
              ModalHandler();
              setModalComments(true);
              setViewAll(true);
            }}
          >
            {comments.length > 2 ? `댓글 ${comments.length}개 모두 보기` : null}
          </p>
        ) : (
          comments.map((cur, idx) => (
            <Comment {...cur} idx={idx} DeleteBtn={DeleteBtn} key={idx} />
          ))
        )}
      </div>
    );
  }
};

export default FeedComments;
