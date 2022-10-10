import React from 'react';
import { MockData } from '../../shared/MockData';

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
      {MockData.recommendData.map((cur, idx) => (
        <div className="friendsListBox" key={idx}>
          <div className="friendsList">
            <img src={cur.img} alt="프로필이미지" />
            <div className="friendsListText">
              <h5>{cur.nickname}</h5>
              <p>{cur.description}</p>
            </div>
          </div>
          <p>팔로우</p>
        </div>
      ))}
    </div>
  );
};

export default MainRecommendBox;
