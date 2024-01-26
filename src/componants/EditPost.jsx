import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { modifyPost } from '../features/posts/postSlice'
import PostForm from './PostForm'

const EditPost = ({editPost, setEditPost}) => {
    
    const dispatch = useDispatch()

    function handleUpdatePost(e){
        e.preventDefault()
        const {id, title, description, author} = editPost
        dispatch(modifyPost({id, title, description, author}))
        setEditPost({
            status: false,
            id: 0,
            title: "",
            description: "",
            author: ""
        })
    }

  return (
    <div className='max-w-[400px] mx-auto'>        
        <PostForm state={editPost} setState={setEditPost} clickFunction={handleUpdatePost} />
    </div>
  )
}

export default EditPost