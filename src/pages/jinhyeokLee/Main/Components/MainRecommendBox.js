import React from 'react';

const MainRecommendBox = () => {
  return (
    <div class="recommendBox">
      <div class="myProfileBox">
        <div class="myProfile">
          <div class="myProfileBg">
            <img src="https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png" />
          </div>
          <div class="myProfileText">
            <h4>zi_nukk</h4>
            <p>이진혁</p>
          </div>
        </div>
        <p>전환</p>
      </div>
      <div class="recommendFriendsBox">
        <p class="recommendFriends">회원님을 위한 추천</p>
        <p class="seeAll">모두 보기</p>
      </div>
      <div class="friendsListBox">
        <div class="friendsList">
          <img src="https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png" />
          <div class="friendsListText">
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
