import React, { useState } from 'react';
import FeedHeader from './FeedHeader';
import FeedImg from './FeedImg';
import FeedLike from './FeedLike';
import FeedComments from './FeedComments';
import FeedInput from './FeedInput';

const MainFeedBox = () => {
  //댓글 value값 가져와서 저장
  const [value, setValue] = useState('');
  //댓글을 관리
  const [comments, setComments] = useState([]);

  return (
    <div className="feedBox">
      <FeedHeader />
      <FeedImg />
      <FeedLike />
      <FeedComments comments={comments} setComments={setComments} />
      <FeedInput
        value={value}
        setValue={setValue}
        comments={comments}
        setComments={setComments}
      />
    </div>
  );
};

export default MainFeedBox;
