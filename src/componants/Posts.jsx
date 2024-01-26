import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts, getPostsStatus, getPostsError, fetchPosts } from "../features/posts/postSlice";
import SinglePost from "./SinglePost";

const Posts = ({ setEditPost }) => {

  const dispatch = useDispatch()

  const posts = useSelector(getAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(()=>{
    if(postsStatus === "idle"){
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  let content;
  if(postsStatus === "loading"){
    content = <p> Loading... </p>
  }else if(postsStatus === "succeeded"){
    content = posts.map((post) => <SinglePost key={post.id} {...post} setEditPost={setEditPost} />)
  }
  else if(postsStatus === "failed"){
    content = <p className="text-red-600"> {postsError} </p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
      {content}
    </div>
  );
};

export default Posts;
