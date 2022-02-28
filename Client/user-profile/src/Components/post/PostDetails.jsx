import React, { useState, useEffect } from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Comment from "./comment";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
const useStyle = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  image: {
    width: "100%",
    height: "70vh",
    objectFit: "cover",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    padding: 5,
    border: "1px solid #878787",
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
  },
  author: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));
const PostDetails = () => {
  let navigate = useNavigate();
  const [like, setAllLikes] = useState("");
  const [checked, setChecked] = React.useState(true);
const [count, setCount] = useState(0);
  const likePost = async (id) => {
     await fetch(`http://localhost:8000/like/47/${post.id}/like`, {
      method: "POST",
    });
    const newLikes = like.filter((likes) => likes.id !== id);
    setAllLikes(newLikes);
    // console.log(newLikes);
  };
  const { id } = useParams();
  const [blogs, setBlog] = useState([]);
  const classes = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const [post, setPost] = useState({});
  // console.log(post);
  const deletePost = async (id) => {
    await fetch(`http://localhost:8000/post/${id}/delete`, {
      method: "DELETE",
    });
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
    navigate("/allposts");
  };
  //   let navigate = useNavigate();

  const updatePost = () => {
    navigate(`/allposts/updatepost/${post.id}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`http://localhost:8000/post/${id}`);
        setPost(response.data);
      } catch (error) {
        console.log("Error while calling getPost API ", error);
      }
    };
    fetchData();
  }, []);
  // var name = `http://localhost:8000/${post.picture.slice(7,)}`;
  console.log(post.title);
  return (
    <Box className={classes.container}>
      <img src={url} alt="post" className={classes.image} />
      <Box className={classes.icons}>
        {
          <>
          <Button onClick={() => updatePost(post.id)} startIcon={<EditIcon />} size="large" varient="contained" color="primary">
          Edit 
          </Button>
          <Button onClick={() => deletePost(post.id)} startIcon={<DeleteIcon />} size="large" varient="contained" color="secondary">
          Delete 
          </Button>
            <div className="controlled">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    icon={<ThumbDownIcon />}
                    checkedIcon={<ThumbUpIcon />}
                    onClick={() => likePost(post.id) && setCount(count+1)}
                    onChange={(e) => setChecked(e.target.checked)}
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                }
                label="Like "
              /> <h6>Likes {count}</h6> 
            </div>
          </>
        }
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Typography className={classes.detail}>{post.description}</Typography>
      <span>
        <Comment onClick={post.id} />
      </span>
    </Box>
  );
};
export default PostDetails;

