import React from 'react';

const MainRecommendBox = () => {
  return (
    <div className="recommendBox">
      <div className="myProfileBox">
        <div className="myProfile">
          <div className="myProfileBg">
            <img src="https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png" />
          </div>
          <div className="myProfileText">
            <h4>zi_nukk</h4>
            <p>이진혁</p>
          </div>
        </div>
        <p>전환</p>
      </div>
      <div className="recommendFriendsBox">
        <p className="recommendFriends">회원님을 위한 추천</p>
        <p className="seeAll">모두 보기</p>
      </div>
      <div className="friendsListBox">
        <div className="friendsList">
          <img src="https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png" />
          <div className="friendsListText">
            <h5>zi_nukk</h5>
            <p>Instagram 신규 가입</p>
          </div>
        </div>
        <p>팔로우</p>
      </div>
    </div>
  );
};

export default MainRecommendBox;
