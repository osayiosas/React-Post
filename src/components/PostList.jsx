import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import "./PostList.css";

export const PostList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost>onCancel={onStopPosting}</NewPost>
        </Modal>
      )}

      <ul className="posts">
        <Post author="Osaigbovo" body="check out the new react course!" />
      </ul>
    </>
  );
};
export default PostList;
