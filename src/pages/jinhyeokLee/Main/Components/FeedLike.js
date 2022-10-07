import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const FeedLike = ({
  comments,
  setComments,
  value,
  setValue,
  setModalComments,
  modalComments,
}) => {
  const [viewAll, setViewAll] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const ModalHandler = () => {
    setIsModal(prev => !prev);
  };

  const postData =
    '미리보는 10월 서울 축제 총정리🎉 놓치면 안 되는 핫플 다 모였다 10월 일정 비워놔 축제 폭탄이니꽌..💣💣 @@저장해 뒀다가 놓치지 말고 다 가야함. #서울축제 #서울여행 🔘카페 총정리 👉 @cafezle 🔘핫한 팝업스토어 👉';
  return (
    <div className="feedLikeBox">
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        alt="피드사진"
      />
      <p className="feedLikeSum">
        <span>gangnam.matzip</span> 님 <span>외 174명</span>이 좋아합니다
      </p>
      <div>
        <span className="feedNickname">zi_nukk </span>
        <span className="feedPostData">
          {viewAll && postData.length > 15
            ? postData
            : postData.slice(0, 70) + '...'}
        </span>
        <span
          className="feedPostViewAll"
          onClick={() => {
            setViewAll(!viewAll);
          }}
        >
          {viewAll === true ? null : '더 보기'}
        </span>
      </div>
      <p
        className="feedCommentViewAll"
        onClick={() => {
          ModalHandler();
          setModalComments(true);
        }}
      >
        {comments.length > 2 ? `댓글 ${comments.length}개 모두 보기` : null}
      </p>
      {isModal === true ? (
        <Modal
          setIsModal={setIsModal}
          isModal={isModal}
          value={value}
          setValue={setValue}
          comments={comments}
          setComments={setComments}
          modalComments={modalComments}
        />
      ) : null}
    </div>
  );
};

export default FeedLike;
