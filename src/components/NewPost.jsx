import { useState } from "react";

import "./NewPost.css";

export const NewPost = ({ onCancel, onAddPost }) => {
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
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
