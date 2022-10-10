import React from 'react';

const FeedHeader = () => {
  return (
    <div className="feedHeaderBox">
      <div className="feedHeaderProfle">
        <div className="feedProfileBg">
          <img
            className="feedProfileImg"
            src="https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png"
          />
        </div>
        <p className="feedProfileName">zi_nukk</p>
      </div>
      <img src="/leejinhyeok/static/burger.png" alt="버거이미지" />
    </div>
  );
};

export default FeedHeader;
