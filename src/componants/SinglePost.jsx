import React from 'react'
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";

const SinglePost = ({id, title, description, author, setEditPost}) => {
    const dispatch = useDispatch();

  return (
    <div
    className="singlePost max-w-[300px] text-left border border-amber-600 rounded-md p-2 my-2"
  >
    <h1 className="text-2xl"> {title}</h1>
    <p className="my-3">
      {description}
      <span className="italic text-xs text-gray-500">
        by
        {author ? author : "Unknown author"}
      </span>
    </p>
    <button
      className="border bg-amber-600 hover:bg-amber-500 duration-300 text-white rounded-md px-4 py-1"
      onClick={() =>
        setEditPost({
          status: true,
          id,
          title,
          description,
          author: author || "",
        })
      }
    >
      Edit
    </button>
    <button
      className="border border-red-600 text-red-600 hover:bg-red-600 duration-300 hover:text-white rounded-md px-4 py-1 ml-2"
      onClick={(e) => dispatch(deletePost(id))}
    >
      Delete
    </button>
  </div>
  )
}

export default SinglePost