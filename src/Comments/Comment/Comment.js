import './Comment.css';

/** @typedef {import('./types').CommentProps} CommentProps */

/**
 * @function Comment
 * @param {CommentProps} props
 * @returns {JSX.Element}
 */

export const Comment = ({details}) => {

  return (
    <div className="comment">
      <p className="comment-copy"><b>Comment: </b>{details.comment}</p>
    </div>
  );
};
