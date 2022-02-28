import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, Button } from '@material-ui/core';
import FormData from 'form-data';
import { TextField } from '@material-ui/core';
// import Posts from "./posts/Posts";
import { useNavigate } from "react-router-dom";
import './home.css';
const useStyles=makeStyles({

  field1:{
    marginTop:30,
    width:350,
    textAlign:"center",
    marginBottom:20,
  },
  btn:{
    marginTop:50,
    width:20,
  },
  typo:{
  textAlign:"center",
  marginTop:40,
  }
  })
const CreateComments=({post}) => {
  let navigate = useNavigate();
   let {register, handleSubmit} = useForm();
    const onSubmission = function (data) {
        let form = new FormData();
         form.append('commenttext', data.commenttext);
        const user = {
          title: data.commenttext,

        }

        console.log("Here...", user)
        // document.getElementById("demo").innerHTML = user.picture;
        
        axios.post("http://localhost:8000/comment/47/44/create", form)
        .then((r) => {
         console.log(r.data )
         navigate('/comments');
        })
        .catch(function () {
          console.error('please something wrong'); // "oh, no!"
        });
    };
    const classes=useStyles();
    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"};
    const btnstyle={margin:'10px 0',}
    return( 
    <Grid>
      <Paper elevation={10} style={paperStyle}><>
   <Typography variant='h4' color='primary' component='h3' className={classes.typo}>
       Give your commments </Typography>
         <form onSubmit={handleSubmit(onSubmission)} >
            <div className='main'>
                 <div className='container'>
                    <div>
                    <TextField className={classes.field1} {...register('commenttext')} multiline rows={7} variant="filled" color="primary"  label='comments' fullWidth />                    
                    </div>
                    <div>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Post Comments</Button>

                       {/* <button id="btn6">Post Comments</button> */}
                     </div>
              </div>
            </div>
            </form>
            </>
      </Paper>
    </Grid>
    ) 
}
export default CreateComments;
