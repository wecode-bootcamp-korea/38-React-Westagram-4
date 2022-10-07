import React, { useEffect } from 'react';
import FeedComments from './FeedComments';
import FeedImg from './FeedImg';
import FeedInput from './FeedInput';
import FeedLike from './FeedLike';
import MainFeedBox from './MainFeedBox';

const Modal = ({
  setIsModal,
  isModal,
  value,
  setValue,
  comments,
  setComments,
  modalComments,
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
      onClick={() => {
        setIsModal(!isModal);
      }}
    >
      <div className="modalFlexBox">
        <FeedImg />
        <div className="modalContentsBox">
          <div>
            {/* <FeedLike
              value={value}
              setValue={setValue}
              comments={comments}
              setComments={setComments}
              modalComments={modalComments}
              // setModalComments={setModalComments}
            /> */}
            <FeedComments
              modalComments={modalComments}
              comments={comments}
              setComments={setComments}
            />
          </div>
          <FeedInput
            value={value}
            setValue={setValue}
            comments={comments}
            setComments={setComments}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
