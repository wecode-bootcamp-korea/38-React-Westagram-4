import React, { useState } from 'react';
import Modal from '../../shared/Modal';

const FeedPost = props => {
  return (
    <div className="feedPostBox">
      <p className="feedPostData">
        <span className="feedNickname">{props.nickname}</span>{' '}
        <span>{props.feedDescription}</span>
      </p>
    </div>
  );
};

export default FeedPost;
