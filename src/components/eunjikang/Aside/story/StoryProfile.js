const StoryProfile = ({ user }) => {
  return (
    <div>
      <div
        className="user_profile"
        style={{ backgroundImage: `url("${user.imgUrl}")` }}
      />
      <div className="username">
        {user.userName}
        <p>{user.postedTime}</p>
      </div>
    </div>
  );
};

export default StoryProfile;
