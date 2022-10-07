import { useState } from 'react';

const CommentInsert = ({ onInsert }) => {
  const [commentInput, setCommentInput] = useState('');

  const saveComment = e => {
    setCommentInput(e.target.value);
  };

  const onCommentSubmit = e => {
    e.preventDefault();
    onInsert(commentInput);
    setCommentInput('');
  };

  return (
    <form className="add_comment" onSubmit={onCommentSubmit}>
      <input
        type="text"
        onChange={saveComment}
        value={commentInput}
        placeholder="Add a comment.."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CommentInsert;
