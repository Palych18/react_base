import './Post.css';

/** @typedef {import('./types').PostProps} PostProps */

/**
 * @function Post
 * @param {PostProps} props
 * @returns {JSX.Element}
 */

export const Post = ({ details }) => {

  return (
    <div className="post">
      <h2 className="post-title">{details.title}</h2>
      <p className="post-copy">{details.content}</p>
      <p className="post-copy"><b>Status:</b> {details.status}</p>
      <p className="post-copy"><b>Category:</b> {details.category}</p>
    </div>
  );
};
