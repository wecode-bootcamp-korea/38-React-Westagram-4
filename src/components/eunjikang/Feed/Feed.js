import { useReducer, useRef } from 'react';
import CommentInsert from '../Comments/CommentInsert';
import CommentList from '../Comments/CommentList';
import FeedBottomBar from './FeedBottomBar/FeedBottomBar';
import FeedTopBar from './FeedTopBar/FeedTopBar';
import FeedCaption from './FeedCaption/FeedCaption';
import './Feed.scss';

const initialstate = [];

function reducer(comments, action) {
  // console.log(action.type);

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

const Feed = () => {
  const [comments, dispath] = useReducer(reducer, initialstate);

  // console.log(comments);

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
    <div className="feeds">
      <article className="feed">
        <FeedTopBar />
        <div className="feed_img" />
        <FeedBottomBar />
        <FeedCaption />
        <CommentList
          comments={comments}
          onRemove={onRemove}
          onToggle={onToggle}
        />
        <CommentInsert onInsert={onInsert} />
        <div className="post_date">
          <p>4hours ago</p>
        </div>
      </article>
    </div>
  );
};

export default Feed;
