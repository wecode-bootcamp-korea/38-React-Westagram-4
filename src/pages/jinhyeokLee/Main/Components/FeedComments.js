import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import FontAwesome from './FontAwesome.js';

const FeedComments = ({ comments, setComments }) => {
  const DeleteBtn = id => {
    const _comments = comments.filter(key => key.id !== id);
    setComments(_comments);
  };

  return (
    <div className="feedCommentBox">
      {comments.map((cur, idx) => (
        <div className="feedComment" key={cur.id}>
          <p>
            zi_nukk
            <span>{cur.value}</span>
          </p>
          <div>
            <FontAwesome />
            <FontAwesomeIcon
              icon={faXmark}
              id={idx}
              onClick={() => {
                DeleteBtn(cur.id);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedComments;
