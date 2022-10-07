import AsideBar from '../AsideBar';
import SuggestionsProfile from './SuggestionProfile';

const AsideSuggestions = ({ suggestionUsers }) => {
  return (
    <section className="suggestions">
      <AsideBar name="Suggestions" />
      <div className="suggestions_list">
        {suggestionUsers.map(user => (
          <SuggestionsProfile user={user} key={user.imgUrl} />
        ))}
      </div>
    </section>
  );
};

export default AsideSuggestions;
