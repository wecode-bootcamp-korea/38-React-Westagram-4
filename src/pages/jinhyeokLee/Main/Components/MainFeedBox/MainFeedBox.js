import React, { useState } from 'react';
import FeedHeader from './FeedHeader';
import FeedImg from './FeedImg';
import FeedLike from './FeedLike';
import FeedComments from './FeedComments';
import FeedInput from './FeedInput';
import FeedIcon from './FeedIcon';
import FeedPost from './FeedPost';
import Modal from '../../shared/Modal';

const MainFeedBox = props => {
  const { profileImg, nickname, feedImg, feedDescription, like, likeSum } =
    props;
  //댓글 value값 가져와서 저장
  const [value, setValue] = useState('');
  //댓글 관리
  const [comments, setComments] = useState([]);
  //댓글 분리
  const [modalComments, setModalComments] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const ModalHandler = () => {
    setIsModal(prev => !prev);
  };

  return (
    <div className="feedBox">
      <FeedHeader profileImg={profileImg} nickname={nickname} />
      <FeedImg feedImg={feedImg} />
      <FeedIcon />
      <FeedLike like={like} likeSum={likeSum} />
      <FeedPost nickname={nickname} feedDescription={feedDescription} />
      <FeedComments
        comments={comments}
        setComments={setComments}
        ModalHandler={ModalHandler}
        setViewAll={setViewAll}
        setModalComments={setModalComments}
      />
      <FeedInput
        value={value}
        setValue={setValue}
        comments={comments}
        setComments={setComments}
      />
      {isModal === true ? (
        <Modal
          setIsModal={setIsModal}
          isModal={isModal}
          value={value}
          setValue={setValue}
          comments={comments}
          setComments={setComments}
          modalComments={modalComments}
          viewAll={viewAll}
          setViewAll={setViewAll}
          profileImg={profileImg}
          nickname={nickname}
          feedImg={feedImg}
          like={like}
          likeSum={likeSum}
          feedDescription={feedDescription}
        />
      ) : null}
    </div>
  );
};

export default MainFeedBox;
