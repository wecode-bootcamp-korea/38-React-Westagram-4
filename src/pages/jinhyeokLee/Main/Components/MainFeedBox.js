import React, { useState } from 'react';
import FeedHeader from './FeedHeader';
import FeedImg from './FeedImg';
import FeedLike from './FeedLike';
import FeedComments from './FeedComments';
import FeedInput from './FeedInput';

const MainFeedBox = () => {
  //댓글 value값 가져와서 저장
  const [value, setValue] = useState('');
  //댓글 관리
  const [comments, setComments] = useState([]);
  //댓글 분리
  const [modalComments, setModalComments] = useState(false);
  console.log(modalComments);

  return (
    <div className="feedBox">
      <FeedHeader />
      <FeedImg />
      <FeedLike
        value={value}
        setValue={setValue}
        comments={comments}
        setComments={setComments}
        modalComments={modalComments}
        setModalComments={setModalComments}
      />
      <FeedComments comments={comments} setComments={setComments} />
      <FeedInput
        value={value}
        setValue={setValue}
        comments={comments}
        setComments={setComments}
        modalComments={modalComments}
        setModalComments={setModalComments}
      />
    </div>
  );
};

export default MainFeedBox;
