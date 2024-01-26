import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../features/posts/postSlice'
import PostForm from './PostForm'

const AddPost = () => {
  
  const dispatch = useDispatch()
  const [post, setPost] = useState({
    title: "",
    description: "",
    author: ""
  })

  function handleCreatePost(e){
    e.preventDefault()
    dispatch(addPost(post.title, post.description, post.author))
    setPost({
      title: "",
      description: "",
      author: ""
    })
  }


  return (
    <div className='max-w-[400px] mx-auto'>      
        <PostForm state={post} setState={setPost} clickFunction={handleCreatePost} />
    </div>
  )
}

export default AddPost