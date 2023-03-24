import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import './PostList.css';

export const PostList = () =>
{
  
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');


  const bodyHandler = (e) =>
  {
    setEnteredBody(e.target.value);

  }

  const authorHandler = (e) =>
  {
    setEnteredAuthor(e.target.value)
  }

  return (
    <>
      <NewPost onBody={bodyHandler} onAuthor={ authorHandler } />
      <ul className="posts">
        <Post author={enteredAuthor } body={enteredBody} />
        <Post author="Ernest" body='Check out the full course' />
      </ul>
    </>
  );
}

export default PostList;
