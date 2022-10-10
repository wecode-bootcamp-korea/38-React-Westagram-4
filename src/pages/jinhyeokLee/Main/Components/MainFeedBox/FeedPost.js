import React, { useState } from 'react';
import Modal from '../../shared/Modal';

const FeedPost = () => {
  const postData =
    '미리보는 10월 서울 축제 총정리🎉 놓치면 안 되는 핫플 다 모였다 10월 일정 비워놔 축제 폭탄이니꽌..💣💣 @@저장해 뒀다가 놓치지 말고 다 가야함. #서울축제 #서울여행 🔘카페 총정리 👉 @cafezle 🔘핫한 팝업스토어 👉';
  return (
    <div className="feedPostBox">
      <p className="feedPostData">
        <span className="feedNickname">zi_nukk</span> <span>{postData}</span>
      </p>
    </div>
  );
};

export default FeedPost;
