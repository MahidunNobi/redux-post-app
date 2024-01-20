import React from 'react'

const Posts = ({setEditPost}) => {

    function handleEdit(e){
        e.preventDefault()
        setEditPost({
            status: true,
            id: 1,
            title: "Title-01",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, omnis nisi? Odio tempora reiciendis temporibus maxime asperiores mollitia alias sed, a sit eveniet rem culpa cum ratione laborum, iste quasi!"
          })
    }

  return (
    <div>
        <div className="singlePost text-left border border-amber-600 rounded-md p-4 my-2">
            <h1 className="text-2xl"> Title-01</h1>
            <p className='my-3'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, omnis nisi? Odio tempora reiciendis temporibus maxime asperiores mollitia alias sed, a sit eveniet rem culpa cum ratione laborum, iste quasi!</p>
            <button 
            className='border bg-amber-600 hover:bg-amber-500 duration-300 text-white rounded-md px-4 py-1'
            onClick={handleEdit}
            > 
            Edit
            </button>
        </div>
    </div>
  )
}

export default Posts