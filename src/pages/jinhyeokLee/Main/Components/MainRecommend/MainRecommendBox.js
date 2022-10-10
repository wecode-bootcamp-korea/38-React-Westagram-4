import React from 'react';
import { MockData } from '../../shared/MockData';
import MainRecommendList from './MainRecommendList';

const MainRecommendBox = () => {
  return (
    <div className="recommendBox">
      <div className="myProfileBox">
        <div className="myProfile">
          <div className="myProfileBg">
            <img
              src="https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png"
              alt="사진"
            />
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
        <MainRecommendList {...cur} key={idx} />
      ))}
      <ul className="recommendAside">
        {MockData.asideData.map((cur, idx) => (
          <li key={idx}>{cur}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainRecommendBox;
