import './Posts.css';
import { Post } from './ui/Post';
import { useState, useEffect } from 'react';

/**
 * @typedef {import('./types').PostDetails} PostDetails
 * @typedef {import('./types').PostsProps} PostsProps
 */

/**
 * @function Posts
 * @param {PostsProps} props
 * @returns {JSX.Element}
 */

export const Posts = ({ className }) => {
  /** @type {[PostDetails[] | [], Function]} */
  const [posts, setPosts] = useState([]);

  const classNames = className
    ? `posts ${className}`
    : 'posts';

  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.org/posts');
      const posts = await response.json();
      setPosts(posts);
    })();
  }, []);

  return (
    <div className={classNames}>
      {posts?.map((post) => (
        <Post
          key={post.id}
          details={post}
        />
      ))}
    </div>
  );
};
