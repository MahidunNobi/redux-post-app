import React, { useState } from 'react'

const EditPost = ({status, id, title, description, setEditPost}) => {
    
    const  [editedPost, setEditedPost] = useState({
        status, id,title,description
    })

    function handleUpdatePost(e){
        e.preventDefault()
        setEditPost({...editedPost, status:false})
    }

  return (
    <div className='min-w-[400px]'>
        <form action="" className='w-full'>
            <input 
            type="text"
            placeholder='Post Title' 
            className='w-full outline-none border border-amber-600 rounded-md p-4 my-2'
            onChange={(e)=> setEditedPost({...editedPost, title: e.target.value})}
            value={editedPost.title}
            />
            <textarea 
            rows="5" 
            placeholder='Post Desription'
            className='w-full outline-none border border-amber-600 rounded-md p-4 my-2'
            onChange={(e)=> setEditedPost({...editedPost, description: e.target.value})}
            value={editedPost.description}

            >
            </textarea>
            <button 
            className='w-full outline-none bg-amber-600 hover:bg-amber-500 duration-300 text-white rounded-md p-4 my-2'
            onClick={handleUpdatePost}
            > 
            Update Post
            </button>
        </form>
    </div>
  )
}

export default EditPost