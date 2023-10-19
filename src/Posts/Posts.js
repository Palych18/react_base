import './Posts.css';
import { Post } from '../Post';
import { useState, useEffect } from 'react';

/** @typedef {import('./types').Post} PostType */

export const Posts = () => {
  /** @type {[Post[] | [], Function]} */
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.org/posts');
      const posts = await response.json();
      setPosts(posts)
    })();
  }, []);

  return (
    <div className="posts">
      {posts.length > 0 && posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};
