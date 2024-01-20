import React from 'react'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../features/posts/postSlice'
import { useDispatch } from 'react-redux'
import { deletePost } from '../features/posts/postSlice'

const Posts = ({setEditPost}) => {
  const dispatch = useDispatch()
  const posts = useSelector(getAllPosts) 
    

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
        {posts.map(post => <div key={post.id} className="singlePost max-w-[300px] text-left border border-amber-600 rounded-md p-2 my-2">
            <h1 className="text-2xl"> {post.title}</h1>
            <p className='my-3'> {post.description}</p>
            <button 
            className='border bg-amber-600 hover:bg-amber-500 duration-300 text-white rounded-md px-4 py-1'
            onClick={()=> setEditPost({status: true, id:post.id, title: post.title, description: post.description})}
            > 
            Edit
            </button>
            <button 
            className='border border-red-600 text-red-600 hover:bg-red-600 duration-300 hover:text-white rounded-md px-4 py-1 ml-2'
            onClick={(e)=> dispatch(deletePost(post.id))}
            > 
            Delete
            </button>
        </div>)}
    </div>
  )
}

export default Posts