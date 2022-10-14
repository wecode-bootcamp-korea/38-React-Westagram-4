import { useState } from 'react';
import heartIcon from '../../../assets/images/eunjikang/icons/heart.png';
import redHeartIcon from '../../../assets/images/eunjikang/icons/red_heart.png';

const FeedBottomBar = ({ liked }) => {
  const [like, setLike] = useState(false);

  const onToggle = () => {
    setLike(prev => !prev);
  };

  return (
    <div className="feed_bar">
      <div className="feed_icons">
        <div>
          <div
            className="iconImg icon_heart"
            onClick={onToggle}
            style={{
              backgroundImage: like
                ? `url("${redHeartIcon}")`
                : `url("${heartIcon}")`,
            }}
          />
          <div className="iconImg icon_comments" />
          <div className="iconImg icon_share" />
        </div>
        <div className="iconImg icon_bookmark" />
      </div>

      <div className="likes">
        <div
          className="likes_owner"
          style={{ backgroundImage: `url("${liked.userImg}")` }}
        />
        <p>
          Liked by <span>{liked.likedUsername}</span> and <span>others</span>
        </p>
      </div>
    </div>
  );
};

export default FeedBottomBar;
