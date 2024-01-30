import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { modifyPost, updatePost } from '../features/posts/postSlice'
import PostForm from './PostForm'

const EditPost = ({editPost, setEditPost}) => {

    const [requestStatus, setRequestStatus] = useState("idle")
    
    const dispatch = useDispatch()

    const {title, body, userId, id} = editPost
    const cansave = [title, body, userId].every(Boolean) && requestStatus === "idle"

    function handleUpdatePost(e){
        e.preventDefault()
        try {
          setRequestStatus("pending")
          dispatch(updatePost(editPost)).unwrap()
          console.log("Post updated")
          setEditPost({
            status: false,
            id: 0,
            title: "",
            body: "",
            userId: ""
        })
        } catch (error) {
          console.log("Failed to update post", error.message)
        }finally{
          setRequestStatus("idle")
        }

        // const {id, title, body, userId} = editPost
        // dispatch(modifyPost({id, title, body, userId}))
        // setEditPost({
        //   status: false,
        //   id: 0,
        //   title: "",
        //   body: "",
        //   userId: ""
      // })
        
    }

  return (
    <div className='max-w-[400px] mx-auto'>        
        <PostForm state={editPost} setState={setEditPost} clickFunction={handleUpdatePost} cansave={cansave} />
    </div>
  )
}

export default EditPost