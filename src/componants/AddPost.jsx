import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../features/posts/postSlice'

const AddPost = () => {
  
  const dispatch = useDispatch()
  const [post, setPost] = useState({
    title: "",
    description: ""
  })

  function handleCreatePost(e){
    e.preventDefault()
    dispatch(addPost({title:post.title, description: post.description}))
    setPost({
      title: "",
      description: ""
    })
  }


  return (
    <div className='max-w-[400px] mx-auto'>
        <form action="" className='w-full' onSubmit={handleCreatePost}>
            <input 
            type="text"
            placeholder='Post Title' 
            className='w-full outline-none border border-amber-600 rounded-md p-4 my-2'
            onChange={(e)=> setPost({...post, title: e.target.value})}
            value={post.title}
            />
            <textarea 
            rows="5" 
            placeholder='Post Desription'
            className='w-full outline-none border border-amber-600 rounded-md p-4 my-2'
            onChange={(e)=> setPost({...post, description: e.target.value})}
            value={post.description}
            >
            </textarea>
            <button 
            className='w-full outline-none bg-amber-600 hover:bg-amber-500 duration-300 text-white rounded-md p-4 my-2'
            > 
            Create Post
            </button>
        </form>
    </div>
  )
}

export default AddPost