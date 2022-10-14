const FeedTopBar = ({ username, userImg }) => {
  return (
    <div className="feed_owner">
      <div>
        <div
          className="user_profile"
          style={{ backgroundImage: `url("${userImg}")` }}
        />
        <span className="username">{username}</span>
      </div>
      <button />
    </div>
  );
};

export default FeedTopBar;
