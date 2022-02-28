import axios from 'axios';
import React, { useState, useEffect } from 'react'
import PostCategory from './EducationCategory'
export default function CategoriesData() {
  const [Categories, setCategories] = useState([])

  useEffect(() => {
    getUser();
  }, []);
  function getUser(){
    axios.get("http://localhost:8000/post/category/11").then((resp) => {
      setCategories(resp.data);
    });
  }
  console.log(Categories);
  return (
     
    Categories.map((post) => (
      <div id="postShow">
  <div id="card">
  <img src= {`http://localhost:8000/${post.picture.slice(7,)}`} alt="Avatar" id="picturedata"/>
  <div id="container">
    <h4><b>{post.title}</b></h4>
     <p>{post.description}</p>

  </div>
</div></div>
    
    ))
);
}
