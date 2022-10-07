import AsideBar from '../AsideBar';
import StoryProfile from './StoryProfile';

const AsideStories = ({ storyUsers }) => {
  // console.log(storyUsers);
  return (
    <section className="stories">
      <AsideBar name="Stories" />
      <div className="stories_list">
        {storyUsers.map(user => (
          <StoryProfile user={user} key={user.imgUrl} />
        ))}
      </div>
    </section>
  );
};

export default AsideStories;
