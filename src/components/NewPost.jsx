import { useState } from 'react';

import './NewPost.css'

export const NewPost = (props) =>
{
    
    return (
        <form className='form'> 
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBody}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type='text' id="name" required onChange={props.onAuthor} />
            </p>
      </form>
  )
}

export default NewPost
