import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import {useParams} from "react-router-dom";

const Userprofile =() => {
let {name} = useParams();
//only registered input will be included as submission data.register is a function to be used as a ref provided by the useForm hook
    let { register, handleSubmit } = useForm();
//handleSubmit method which displays the data entered in the form to the console.
    const onSubmission = function (data) {

        let form = new FormData();
        form.append('gender', data.gender);
        form.append('phonenumber', data.phonenumber);
        form.append('bio' , data.bio);
        form.append('picture', data.picture[0].name);

        const user = {
            title: data.title,
            picture:data.picture[0].name,
            descripton:data.description
  
          }
  
          console.log("Here...", user)

          document.getElementById("demo").innerHTML = `http://localhost:8000/${user.picture}`;
        axios.post('http://localhost:8000/userprofile/47/create', form);
        
        console.log(user.picture);
 
    }
    return <>

   <div className="main_div">
   <div className='box'>
       <h3>Welcom {name}</h3>
   <form onSubmit={handleSubmit(onSubmission)} >
            <div className='form'>
            <h3 id="heading">User Profile</h3>
                 <div id='card'>
                     <p id='demo'></p>
                 </div>
                        <input id="input" {...register('gender')}   placeholder='Gender' />
                   
                        <input id="input" {...register('phonenumber')}   placeholder='Phone Number' />
                   
                        <input id="input" {...register('bio')}   placeholder='Bio' />
                  
                        <input id="input" {...register('picture')} type="file" name="picture" />
                   
                        <button id="btn1">Sign Up</button>
               </div>

        </form>
   </div>
   </div>

    </>
}
export default Userprofile;

