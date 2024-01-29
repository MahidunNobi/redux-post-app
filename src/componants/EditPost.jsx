import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { modifyPost } from '../features/posts/postSlice'
import PostForm from './PostForm'

const EditPost = ({editPost, setEditPost}) => {
    
    const dispatch = useDispatch()

    const {title, body, userId} = editPost
    const cansave = [title, body, userId].every(Boolean)

    function handleUpdatePost(e){
        e.preventDefault()
        const {id, title, body, userId} = editPost
        dispatch(modifyPost({id, title, body, userId}))
        setEditPost({
            status: false,
            id: 0,
            title: "",
            body: "",
            userId: ""
        })
    }

  return (
    <div className='max-w-[400px] mx-auto'>        
        <PostForm state={editPost} setState={setEditPost} clickFunction={handleUpdatePost} cansave={cansave} />
    </div>
  )
}

export default EditPost