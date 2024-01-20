import React from 'react'

const AddPost = () => {
  return (
    <div className='min-w-[400px]'>
        <form action="" className='w-full'>
            <input 
            type="text"
            placeholder='Post Title' 
            className='w-full outline-none border border-amber-600 rounded-md p-4 my-2'
            />
            <textarea 
            rows="5" 
            placeholder='Post Desription'
            className='w-full outline-none border border-amber-600 rounded-md p-4 my-2'
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