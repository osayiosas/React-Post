const names = ['Osaigbovo', 'Ernest'];

export const Post = () =>
{
    
    const choseName = Math.random() > 0.5 ? names[0] : names[1];

    return (
        <div>
            <p>{ choseName }</p>
            <p>React.js is Life </p>
      </div>
  )
}

export default Post
