import CommentItem from './CommentItem';

const CommentList = props => {
  const { comments, onRemove, onToggle } = props;
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
