import CommentItem from './CommentItem';

const CommentList = ({ comments, onRemove, onToggle }) => {
  return (
    <div className="comments">
      {comments.map(comment => (
        <CommentItem
          comment={comment}
          onRemove={onRemove}
          onToggle={onToggle}
          key={comment.id}
        />
      ))}
    </div>
  );
};

export default CommentList;
