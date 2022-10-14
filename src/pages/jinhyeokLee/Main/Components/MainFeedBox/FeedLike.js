import React from 'react';

const FeedLike = props => {
  return (
    <p className="feedLikeP">
      <span className="feedLikeSpan">{props.like}</span> 님{' '}
      <span className="feedLikeSpan">{props.likeSum}</span>이 좋아합니다
    </p>
  );
};

export default FeedLike;
