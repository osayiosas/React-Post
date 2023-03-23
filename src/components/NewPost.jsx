import './NewPost.css'

export const NewPost = () => {
    return (
        <form className='form'> 
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type='text' id="name" required></input>
            </p>
      </form>
  )
}

export default NewPost
