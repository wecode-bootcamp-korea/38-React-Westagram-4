import Stories from '../Stories/Stories';
import Suggestions from '../Suggestions/Suggestions';
import './Aside.scss';
// import storyUsers from '/eunjikang/data/storyUsers.json';
// import suggestionUsers from 'eunjikang/data/suggestionUsers.json';

const Aside = () => {
  return (
    <section className="myaccount">
      <div className="user_profile my_profile" />
      <div>
        <div className="username">iamchloe</div>
        <div className="user_intro">Front-end developer</div>
      </div>
    </section>
  );
};

export default Aside;
