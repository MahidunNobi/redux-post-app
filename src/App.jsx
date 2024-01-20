import { useState } from 'react'
import './App.css'
import AddPost from './componants/AddPost'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='max-w-[400px] mx-auto'> 
    <h1 className="text-6xl mb-6"> Hello There</h1>
    <AddPost />
   </div>
  )
}

export default App
