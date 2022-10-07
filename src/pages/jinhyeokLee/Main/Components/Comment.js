import React from 'react';
import FontAwesome from './FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Comment = props => {
  return (
    <div className="feedComment">
      <p className="feedCommentNickname">
        zi_nukk
        <span className="feedCommentOne">{props.value}</span>
      </p>
      <div>
        <FontAwesome />
        <FontAwesomeIcon
          icon={faXmark}
          id={props.idx}
          style={{ width: '12px', marginRight: '10px' }}
          onClick={() => {
            props.DeleteBtn(props.id);
          }}
        />
      </div>
    </div>
  );
};

export default Comment;
