import React from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../features/posts/postSlice";
import SinglePost from "./SinglePost";

const Posts = ({ setEditPost }) => {

  const posts = useSelector(getAllPosts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
      {posts.map((post) => <SinglePost key={post.id} {...post} setEditPost={setEditPost} />)}
    </div>
  );
};

export default Posts;
