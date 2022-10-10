import React from 'react';

const FeedHeader = props => {
  return (
    <div className="feedHeaderBox">
      <div className="feedHeaderProfle">
        <div className="feedProfileBg">
          <img className="feedProfileImg" src={props.profileImg} />
        </div>
        <p className="feedProfileName">{props.nickname}</p>
      </div>
      <img src="/leejinhyeok/static/burger.png" alt="버거이미지" />
    </div>
  );
};

export default FeedHeader;
