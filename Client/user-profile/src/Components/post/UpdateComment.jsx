import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core';
import { Grid,Paper, TextField, Button, Typography} from '@material-ui/core'
import FormData from 'form-data';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const useStyles=makeStyles({
  field1:{
    marginTop:20,
    width:280,
    marginBottom:20,
  },
  btn:{
    marginTop:30,
  },
  typo:{
  textAlign:"center",
  marginTop:70,
  }
  })
const UpdateComment=() => {
  const {id} = useParams();
  let navigate = useNavigate();
   let {register, handleSubmit} = useForm();
    const onSubmission = function (data) {
        let form = new FormData();
         form.append('commenttext', data.commenttext);
        const user = {
          title: data.commenttext,  }

        console.log("Here...", user)
        // document.getElementById("demo").innerHTML = user.picture;
        console.log(id);
        axios.put(`http://localhost:8000/comment/${id}/update`, form)
        .then((r) => {
         console.log(r.data )
         navigate('/allposts');
        })
        .catch(function () {
          console.error('please something wrong'); // "oh, no!"
        });
    };
    const classes=useStyles();
    const paperStyle={padding :20,height:'70vh',width:390, margin:"20px auto"};
    const btnstyle={margin:'8px 0'}
    return( 
        <Grid>
          <Paper elevation={10} style={paperStyle}><>
       <Typography variant='h4' color='primary' component='h3' className={classes.typo}>
           Give your commments </Typography>
             <form onSubmit={handleSubmit(onSubmission)} >
                <div className='main'>
                     <div className='container'>
                        <div>
                        <TextField className={classes.field1} {...register('commenttext')} multiline rows={5} variant="filled" color="primary"  label='comments' fullWidth />                    
                        </div>
                        <div>
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Update Comments</Button>
                             </div>
                  </div>
                </div>
                </form>
                </>
          </Paper>
        </Grid>
        )      
}
export default UpdateComment;
