import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewPost } from '../features/posts/postSlice'
import PostForm from './PostForm'

const AddPost = () => {
  
  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  
  const dispatch = useDispatch()
  const [post, setPost] = useState({
    title: "",
    body: "",
    userId: ""
  })
  const {title, body, userId} = post

  const cansave = [title, body, userId].every(Boolean) && addRequestStatus === "idle"

  function handleCreatePost(e){
    e.preventDefault()
    try {
      setAddRequestStatus("pending")
      dispatch(addNewPost({title, body, userId})).unwrap()
      console.log("Post Saved successfully")
      setPost({
          title: "",
          body: "",
          userId: ""
        })

    } catch (error) {
      console.log("Failled to save the post", error)
    }finally{
      setAddRequestStatus("idle")
    }
    // dispatch(addPost(post.title, post.body, post.userId))
    // setPost({
    //   title: "",
    //   body: "",
    //   userId: ""
    // })
  }


  return (
    <div className='max-w-[400px] mx-auto'>      
        <PostForm state={post} setState={setPost} clickFunction={handleCreatePost} cansave={cansave} />
    </div>
  )
}

export default AddPost