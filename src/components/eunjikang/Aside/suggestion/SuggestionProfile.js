const SuggestionsProfile = ({ user }) => {
  return (
    <div>
      <div>
        <div
          className="user_profile"
          style={{ backgroundImage: `url("${user.imgUrl}")` }}
        />
        <div className="username">
          {user.userName}
          <p>{user.isNew ? 'New to Instagram' : 'Follows you'}</p>
        </div>
      </div>
      <button>Follow</button>
    </div>
  );
};

export default SuggestionsProfile;
