import { useState } from 'react';
import heartIcon from '../../../assets/Main/icons/heart.png';
import redHeartIcon from '../../../assets/Main/icons/red_heart.png';

const FeedBottomBar = () => {
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
        <div className="likes_owner" />
        <p>
          Liked by <span>user1234</span> and <span>others</span>
        </p>
      </div>
    </div>
  );
};

export default FeedBottomBar;
