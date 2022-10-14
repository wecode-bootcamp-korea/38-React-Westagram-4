import { useReducer, useRef } from 'react';
import CommentInsert from '../Comments/CommentInsert';
import CommentList from '../Comments/CommentList';
import FeedBottomBar from './FeedBottomBar';
import FeedTopBar from './FeedTopBar';
import FeedCaption from './FeedCaption';
import './Feed.scss';

const initialstate = [];

function reducer(comments, action) {
  switch (action.type) {
    case 'ADD':
      return comments.concat(action.comment);
    case 'DELETE':
      return comments.filter(el => el.id !== action.id);
    case 'LIKE':
      return comments.map(el =>
        el.id === action.id ? { ...el, like: !el.like } : el
      );
    default:
      return comments;
  }
}

const Feed = ({ feed }) => {
  const [comments, dispath] = useReducer(reducer, initialstate);
  const {
    username,
    userImg,
    feedImg,
    feedCaption,
    hashtag,
    postedTime,
    liked,
  } = feed;

  let nextId = useRef(1);

  const onInsert = text => {
    const comment = {
      id: nextId.current,
      text: text,
      like: false,
    };

    nextId.current += 1;
    dispath({ type: 'ADD', comment });
  };

  const onRemove = id => {
    dispath({ type: 'DELETE', id });
  };

  const onToggle = id => {
    dispath({ type: 'LIKE', id });
  };

  return (
    <article className="feed">
      <FeedTopBar username={username} userImg={userImg} />
      <div
        className="feed_img"
        style={{ backgroundImage: `url("${feedImg}")` }}
      />
      <FeedBottomBar liked={liked} />
      <FeedCaption
        username={username}
        feedCaption={feedCaption}
        hashtag={hashtag}
      />
      <CommentList
        comments={comments}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <CommentInsert onInsert={onInsert} />
      <div className="post_date">
        <p>{postedTime}</p>
      </div>
    </article>
  );
};

export default Feed;
