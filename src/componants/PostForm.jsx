import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers} from '../features/users/usersSlice'

const PostForm = ({state, setState, clickFunction, cansave}) => {

  const users = useSelector(getAllUsers)

  return (
    <div>
        <form action="" className='w-full'>
            <input 
            type="text"
            placeholder='Post Title' 
            className='w-full outline-none border border-amber-600 rounded-md p-4 my-2'
            onChange={(e)=> setState({...state, title: e.target.value})}
            value={state.title}
            />
            <textarea 
            rows="5" 
            placeholder='Post Desription'
            className='w-full outline-none border border-amber-600 rounded-md p-4 my-2'
            onChange={(e)=> setState({...state, body: e.target.value})}
            value={state.body}
            >
            </textarea>
            <select 
            name="" 
            id="" 
            className='w-full outline-none border border-amber-600 rounded-md p-4 my-2'
            onChange={(e)=> setState({...state, userId: e.target.value})}
            value={state.userId}
            >
              <option value="">Select Author</option>
              {users.map(user => <option key={user.id} value={user.id}> {user.name} </option>)}
            </select>            
            <button 
            className='w-full outline-none bg-amber-600 hover:bg-amber-500 duration-300 text-white rounded-md p-4 my-2'
            onClick={clickFunction}
            disabled={!cansave}
            > 
            {state.status ? "Update" : "Create"} Post
            </button>
        </form>
    </div>
  )
}

export default PostForm