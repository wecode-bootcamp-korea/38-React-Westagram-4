import React from 'react';

const FeedIcon = () => {
  return (
    <div className="feedIconBox">
      <div>
        <img
          src="/leejinhyeok/static/heart.png"
          alt="하트사진"
          style={{ width: '25px', height: '23px' }}
        />
        <img
          src="/leejinhyeok/static/message.png"
          alt="메세지사진"
          style={{ width: '23px', height: '23px' }}
        />
        <img
          src="/leejinhyeok/static/plane.png"
          alt="디엠사진"
          style={{ width: '25px', height: '23px' }}
        />
      </div>
      <img
        src="/leejinhyeok/static/bookmark.png"
        alt="북마크사진"
        style={{ width: '22px', height: '24px' }}
      />
    </div>
  );
};

export default FeedIcon;
