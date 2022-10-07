import { useState } from 'react';

const CommentInsert = ({ onInsert }) => {
  const [commentInput, setCommentInput] = useState('');

  const onChange = e => {
    setCommentInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsert(commentInput);
    setCommentInput('');
  };

  return (
    <form className="add_comment" onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        value={commentInput}
        placeholder="Add a comment.."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CommentInsert;
