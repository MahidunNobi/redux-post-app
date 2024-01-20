import { useState } from 'react'
import './App.css'
import AddPost from './componants/AddPost'
import Posts from './componants/Posts'
import EditPost from './componants/EditPost'

function App() {
  const [editPost, setEditPost] = useState({
    status: false,
    id: 0,
    title: "",
    description: ""
  })
console.log(editPost)
  return (
   <div className='max-w-[1012px] mx-auto'> 
    <h1 className="text-6xl mb-6"> Hello There</h1>

    {editPost.status ? <EditPost {...editPost} setEditPost={setEditPost} /> : <AddPost />}

    <Posts setEditPost={setEditPost} />
   </div>
  )
}

export default App
