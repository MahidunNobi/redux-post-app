import React from 'react'

const AddPost = () => {
  return (
    <div>
        <input type="text" className="p-4" placeholder='Post Title' />
        <textarea type="text" className="p-4" placeholder='Post Desctiption' />
    </div>
  )
}

export default AddPost