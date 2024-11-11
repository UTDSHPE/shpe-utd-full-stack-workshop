import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'

const PostPage = () => {

  // Pull id from URL as a URL parameter
  const params = useParams();

  // Declare state to store the post of this page
  const [post, setPost] = useState({
    title: "",
    description: "",
    likes: 0
  })

  // function to handle incrementing likes
  const handleLike = () => { 
    setPost({ ...post, likes: post.likes + 1 })
  }

  // useEffect hook used to execute code on render of the component
  // Will implement this in level-3
  useEffect(() => {}, [])

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <div className='flex flex-row gap-2'>
        <button onClick={handleLike}>👍</button>
        <p><b>{post.likes}</b></p>
      </div>
    </div>
  )
}

export default PostPage