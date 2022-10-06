import React from 'react';
import FontAwesome from './FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Comment = props => {
  return (
    <div className="feedComment">
      <p>
        zi_nukk
        <span>{props.value}</span>
      </p>
      <div>
        <FontAwesome />
        <FontAwesomeIcon
          icon={faXmark}
          id={props.idx}
          onClick={() => {
            props.DeleteBtn(props.id);
          }}
        />
      </div>
    </div>
  );
};

export default Comment;
