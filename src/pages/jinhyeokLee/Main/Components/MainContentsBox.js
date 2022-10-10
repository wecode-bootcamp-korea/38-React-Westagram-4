import React from 'react';
import MainStoryBox from './MainStoryBox';
import MainFeedBox from './MainFeedBox/MainFeedBox';
import MainRecommendBox from './MainRecommend/MainRecommendBox';
import { MockData } from '../shared/MockData';
const MainContentsBox = () => {
  return (
    <div className="wrapBox">
      <div className="contentBox">
        <MainStoryBox />
        {/* <MainFeedBox /> */}
        {MockData.feedData.map((cur, idx) => (
          <MainFeedBox key={idx} {...cur} />
        ))}
      </div>
      <MainRecommendBox />
    </div>
  );
};

export default MainContentsBox;
