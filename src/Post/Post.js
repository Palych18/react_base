import './Post.css';

/** @typedef {import('./types').Post} Post */

/**
 * @function Post
 * @param {Post} props
 * @returns {JSX.Element}
 */

export const Post = (props) => {  
  const {title, content} = props;

  return (
    <div className="post">
      <h2 className="title">{title}</h2>
      <p className="copy">{content}</p>
    </div>
  );
};
