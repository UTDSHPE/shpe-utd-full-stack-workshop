import { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

const Post = (props) => {

  // state to track the amount of likes for this individual post
  const [likes, setLikes] = useState(props.likes);

  // function to handle incrementing likes
  const handleLike = async () => {
    setLikes(likes + 1)
    await axios.patch(`http://localhost:5000/api/posts/${props.id}/likes`, { action: "increment"})
  }

  return (

    // root div of the component should define the overall style of the container itself
    <div className='p-6 bg-neutral-800 rounded-xl'>

      {/* render information passed through props */}
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className='flex flex-row justify-between'>

        {/* Link to a page version of the post, page is empty for now */}
        <Link to={`/post/${props.id}`}>View More</Link>

        {/* button to increment the likes state */}
        <div className='flex flex-row gap-4'>
          <button onClick={handleLike}>Like</button>
          <p><b>{likes}</b></p>
        </div>
      </div>
    </div>
  )
}

export default Post