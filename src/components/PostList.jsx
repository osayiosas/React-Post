import NewPost from './NewPost';
import Post from './Post';
import './PostList.css';

export const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className="posts">
        <Post author="Osaigbovo" body="React.js make sense small" />
        <Post author="Ernest" body="check for the complete course" />
      </ul>
    </>
  );
}

export default PostList;
