import { useState } from "react";
import Post from "./Post";

import "./PostList.css";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) =>
  {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
     
      {posts.length > 0 && (
        <ul className="posts">
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Post yet</h2>
          <p>Start adding Some!</p>
        </div>
      )}
    </>
  );
};
export default PostList;
