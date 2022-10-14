const FeedCaption = ({ username, feedCaption, hashtag }) => {
  return (
    <div className="feed_des">
      <div>
        <span className="username">{username}</span>
        <p className="des">
          {feedCaption}
          {hashtag.map(el => (
            <span key={el.id} className="des_hashtag">
              {el.hashtagCaption}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default FeedCaption;
