import React, {useEffect} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import FormData from 'form-data';
import { useNavigate } from "react-router-dom";
import './home.css';
const useStyles=makeStyles({
  field:{
    marginTop:20,
    marginLeft:315,
    display:"block"
  },
  field1:{
    marginTop:20,
    width:580,
    marginBottom:20,
  },
  btn:{
    marginTop:30,
  },
  typo:{
  textAlign:"center",
  marginTop:100,
  }
  })
const CreatePost=() => {
  let navigate = useNavigate();
   let {register, handleSubmit} = useForm();
    const onSubmission = function (data) {
        let form = new FormData();
         form.append('title', data.title);
        form.append('description' , data.description);
        form.append('picture', data.picture[0]);

        console.log(data.picture[0]);
        const user = {
          title: data.title,
          picture:data.picture[0].name,
          descripton:data.description

        }

        console.log("Here...", user);     
        axios.post("http://localhost:8000/post/47/10/create", form)
        .then((r) => {
         console.log(r.data )
         navigate('/allposts');
        }).catch(function () {
          console.error('please something wrong');
        });
    };
    const classes=useStyles();
    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"};
    const btnstyle={margin:'10px 0',}
    return (
       <Grid>
        <Paper elevation={10} style={paperStyle}><>
        <Typography variant='h4' color='primary' component='h3' className={classes.typo}>
        Create Post </Typography>
         <form onSubmit={handleSubmit(onSubmission)} >
            <div className='main'>
                 <div className='container'>
                     <div>
                        <input className={classes.field1} {...register('title')} placeholder='title' />
                    </div>                    
                     <div> description</div>
                    <div>
                        <input className={classes.field1} {...register('description')} placeholder='description' />
                    </div>
                    <div>
                        <input className={classes.field1} {...register('picture')} type="file" name="picture" />
                    </div>
                    <div>
                       <button id="btn6">Publish</button>
                     </div>
              </div>
            </div>
            </form>
            </>
        </Paper>
      </Grid>
    )
}
export default CreatePost;

