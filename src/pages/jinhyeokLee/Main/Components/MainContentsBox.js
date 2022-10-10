import React from 'react';
import MainStoryBox from './MainStoryBox';
import MainFeedBox from './MainFeedBox/MainFeedBox';
import MainRecommendBox from './MainRecommend/MainRecommendBox';
const MainContentsBox = () => {
  return (
    <div className="wrapBox">
      <div className="contentBox">
        <MainStoryBox />
        <MainFeedBox />
      </div>
      <MainRecommendBox />
    </div>
  );
};

export default MainContentsBox;
