import heartIcon from '../../../assets/images/eunjikang/icons/heart.png';
import redHeartIcon from '../../../assets/images/eunjikang/icons/red_heart.png';

const CommentItem = ({ comment, onRemove, onToggle }) => {
  return (
    <div className="comment_list">
      <div>
        <div className="username">iamchloe</div>
        <div>{comment.text}</div>
      </div>
      <div>
        <div
          className="iconImg icon_heart"
          onClick={() => onToggle(comment.id)}
          style={{
            backgroundImage: comment.like
              ? `url("${redHeartIcon}")`
              : `url("${heartIcon}")`,
          }}
        />
        <button className="deleteBtn" onClick={() => onRemove(comment.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
