import React from 'react';

const MainRecommendList = props => {
  const { img, nickname, description } = props;
  return (
    <div className="friendsListBox">
      <div className="friendsList">
        <img src={img} alt="프로필이미지" />
        <div className="friendsListText">
          <h5>{nickname}</h5>
          <p>{description}</p>
        </div>
      </div>
      <p>팔로우</p>
    </div>
  );
};

export default MainRecommendList;
