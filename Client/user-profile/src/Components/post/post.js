import "./post.css";
import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Comment from "./comment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import '../home.css';

export default function Post({ post}) {
 

  const [blogs, setBlog] = useState([]);
  let navigate = useNavigate();

  const updatePost=()=>{
     navigate('../updatepost');
    } 
  console.log(post.picture);
  var name = `http://localhost:8000/${post.picture.slice(7,)}`;
  
  const deletePost = async (id) => {
    await fetch(`http://localhost:8000/post/${id}/delete`, {
      method: "DELETE",
    });
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };
 
  return(
  <>
  <Link style={{textDecoration: 'none', color: 'inherit'}} to={`postdetail/${post.id}`}>
  <div id="postShow">
  <div id="card">
    <span className="btns">
           <Button onClick={() => updatePost(post.id)} startIcon={<EditIcon />} size="large" varient="contained" color="primary"></Button>
          <Button onClick={() => deletePost(post.id)} startIcon={<DeleteIcon />} size="large" varient="contained" color="secondary"></Button>
    </span>
  <img src={name} alt="Avatar" id="picturedata"/>
  <div id="container">
    <h5><b>{post.categoryname}</b></h5>
    <h4><b>{post.title}</b></h4>
     <p>{post.description}</p>
    <span>
     <Comment onClick={post.id} />
     </span>
  </div>
</div></div></Link>
    </>
  );
}
