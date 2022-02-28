import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useNavigate} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios';
import UpdateComment from './UpdateComment';
const Comment = (id) => {
  let navigate = useNavigate();
  const [commenttext, setComment] = useState([]);
  const [fullcomment, setFullCommetn]= useState("");
  const [comment, setAllComments] = useState([]);
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  function getUser(){
    axios.get(`http://localhost:8000/comment/${id.onClick}`).then((resp) => {
      setAllComments(resp.data);
    });
  }
  console.log(comment)
  const deleteComment = async (id) => {
    await fetch(`http://localhost:8000/comment/${id}/delete`, {
      method: "DELETE",
    });
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
    navigate('/allposts');
  };
const onSubmit = (event)=>{
  console.log(id);
  event.preventDefault();
  setFullCommetn(commenttext);
  let response= axios.post(`http://localhost:8000/comment/47/${id.onClick}/create`,{commenttext});
    console.log(response);
    navigate('/allposts');
}

  return (
    
    <div>
      <div >
        <div style={{ width: '100%' }}>
          <Typography gutterBottom variant="h6">Write a comment</Typography>
          <TextField 
          InputProps={{
            endAdornment:(
              <IconButton><SendIcon/></IconButton>
            )
          }}
          fullWidth  variant="outlined" label="Comment" multiline value={commenttext} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button gutterBottom type='submit' onClick={onSubmit} style={{ marginTop: '10px', marginBottom:'10px' }} fullWidth disabled={!commenttext.length} color="primary" variant="contained" >
            Comment
          </Button>
          <div>
          <Typography gutterBottom variant="h6" component="div">
          {comment.map((c) => (
      <Typography> {c.commenttext} <span id='iconsbtn'><DeleteIcon onClick={() => deleteComment(c.id)}/><EditIcon onClick={()=> UpdateComment(c.id)} />  </span> </Typography>
      ))}</Typography>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;