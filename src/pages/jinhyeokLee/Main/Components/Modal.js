import React, { useEffect } from 'react';
import FeedInput from './MainFeedBox/FeedInput';
import FeedLike from './MainFeedBox/FeedLike';
import FeedImg from './MainFeedBox/FeedImg';
import MainFeedBox from './MainFeedBox/MainFeedBox';
import FeedComments from './MainFeedBox/FeedComments';
import FeedPost from './MainFeedBox/FeedPost';
import FeedIcon from './MainFeedBox/FeedIcon';
import FeedHeader from './MainFeedBox/FeedHeader';

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
        <FeedImg />
        <div className="modalContentsBox">
          <div className="modalHeader">
            <FeedHeader />
          </div>
          <div className="modalComments">
            <FeedPost />
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
            <FeedLike />
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
