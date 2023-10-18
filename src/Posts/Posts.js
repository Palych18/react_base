import './Posts.css';
import { useState, useEffect } from 'react';

/** @typedef {import('./types').Post} Post */

export const Posts = () => {
  /** @type {[Post[] | [], Function]} */
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.org/posts');
      const posts = await response.json();
      setPosts(posts);
    })();
  }, []);

  return (
    <div className="posts">
      {posts.length > 0 && posts.map((post) => (
        <div className="post" key={post.id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
