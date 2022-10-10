import React, { useEffect } from 'react';
import FeedInput from '../Components/MainFeedBox/FeedInput';
import FeedLike from '../Components/MainFeedBox/FeedLike';
import FeedImg from '../Components/MainFeedBox/FeedImg';
import MainFeedBox from '../Components/MainFeedBox/MainFeedBox';
import FeedComments from '../Components/MainFeedBox/FeedComments';
import FeedPost from '../Components/MainFeedBox/FeedPost';
import FeedIcon from '../Components/MainFeedBox/FeedIcon';
import FeedHeader from '../Components/MainFeedBox/FeedHeader';

const Modal = ({
  setIsModal,
  isModal,
  value,
  setValue,
  comments,
  setComments,
  modalComments,
  viewAll,
  setViewAll,
  profileImg,
  nickname,
  feedImg,
  feedDescription,
  like,
  likeSum,
}) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  return (
    <div
      className="modalWrapper"
      onClick={e => {
        setIsModal(!isModal);
      }}
    >
      <div
        className="modalFlexBox"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <FeedImg feedImg={feedImg} />
        <div className="modalContentsBox">
          <div className="modalHeader">
            <FeedHeader profileImg={profileImg} nickname={nickname} />
          </div>
          <div className="modalComments">
            <FeedPost feedDescription={feedDescription} />
            <FeedComments
              modalComments={modalComments}
              comments={comments}
              setComments={setComments}
              viewAll={viewAll}
              setViewAll={setViewAll}
            />
          </div>
          <div className="modalInput">
            <FeedIcon />
            <FeedLike like={like} likeSum={likeSum} />
            <FeedInput
              value={value}
              setValue={setValue}
              comments={comments}
              setComments={setComments}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
