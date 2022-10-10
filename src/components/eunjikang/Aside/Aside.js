import './Aside.scss';
import { storyUsers } from './story/storyUsers';
import { suggestionUsers } from './suggestion/suggestionUsers';
import AsideStories from './story/AsideStories';
import AsideSuggestions from './suggestion/AsideSuggestions';
import Footer from './Footer/Footer';

const Aside = () => {
  return (
    <>
      <section className="myaccount">
        <div className="user_profile my_profile" />
        <div>
          <div className="username">iamchloe</div>
          <div className="user_intro">Front-end developer</div>
        </div>
      </section>
      <AsideStories storyUsers={storyUsers} />
      <AsideSuggestions suggestionUsers={suggestionUsers} />
      <Footer />
    </>
  );
};

export default Aside;
