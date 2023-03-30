import { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

import "./NewPost.css";

export const NewPost = ({  onAddPost }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
      body: enteredBody,
        author: enteredAuthor,
      };
      onAddPost(postData)
      onCancel();
  };

  return (
    <Modal>
      <form className="form" onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" required onChange={authorHandler} />
        </p>

        <p className="actions">
          <Link to='..' type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewPost;
