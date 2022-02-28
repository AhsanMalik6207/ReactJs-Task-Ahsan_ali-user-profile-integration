import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../post/post";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  function getUser(){
    axios.get("http://localhost:8000/post/getAll").then((resp) => {
      setPosts(resp.data);
    });
  }
   return (
     
      posts.map((post) => (
        <>
        <Post post={post} />
        </>
      
      ))
  );
}

