import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, Button } from '@material-ui/core';
import FormData from 'form-data';
import { TextField } from '@material-ui/core';
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
const CreateCategories=() => {
  let navigate = useNavigate();
   let {register, handleSubmit} = useForm();
    const onSubmission = function (data) {
      let form = new FormData();
         form.append("categoryname", data.categoryname);
         const user = {
           categoryname: data.categoryname,
          }
        console.log("Here...", user)
        axios.post("http://localhost:8000/category/create",data).then((r) => {
         console.log(r.data )
         navigate('/allposts');
        }).catch(function () {
          console.error('please something wrong');
        });
    };
    const classes=useStyles();
    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"};
    const btnstyle={margin:'10px 0',}
    return( 
    <Grid>
      <Paper elevation={10} style={paperStyle}><>
   <Typography variant='h4' color='primary' component='h3' className={classes.typo}>
       Create Category </Typography>
         <form onSubmit={handleSubmit(onSubmission)} >
            <div className='main'>
                 <div className='container'>
                    <div>
                    <input className={classes.field1} {...register('categoryname')} type="text" placeholder="category" />
                    </div>
                    <div>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
                     </div>
              </div>
            </div>
            </form>
            </>
      </Paper>
    </Grid>
    ) 
}
export default CreateCategories;