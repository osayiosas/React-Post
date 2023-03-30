import { Outlet } from "react-router-dom";

import PostList from "../components/PostList";

const Post = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
};

export default Post;
