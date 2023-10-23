import './Comments.css';
import { Comment } from './Comment';
import { useState, useEffect } from 'react';

/**
 * @typedef {import('./types').CommentDetails} CommentDetails
 * @typedef {import('./types').CommentsProps} CommentsProps
 */

/**
 * @function Comments
 * @param {CommentsProps} props
 * @returns {JSX.Element}
 */

export const Comments = ({className}) => {
  /** @type {[CommentDetails [] | [], Function]} */
  const [comments, setComents] = useState([]);

  const classNames = className
    ? `comments ${className}`
    : 'comments';

  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.org/comments');
      const comments = await response.json();
      setComents(comments);
    })();
  }, []);

  return (
    <div className={classNames}>
      <h2 className="comments-title">Comments</h2>
        {comments?.map((comment) => (
          <Comment 
            key={comment.id}
            details={comment}
          />
        ))}
    </div>
  );
};
