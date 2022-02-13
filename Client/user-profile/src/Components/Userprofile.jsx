// import React from 'react';
// import { useState } from 'react';
// import FormData from 'form-data';
// import axios from 'axios';

// const Userprofile = () => {
//     const [gender, setGender] = useState("");
//     const [fGender, setfGender] = useState("");
//     const [phonenumber, setPhoneNumber] = useState("");
//     const [fphonenumber, setfPhoneNumber] = useState("");
//     const [bio, setBio] = useState("");
//     const [fbio, setfBio] = useState("");
//     const [file, setFile] = useState("");
//     // const [fFile, setfFile] = useState()

//     const inputEvent = (event) =>{
//         setGender(event.target.value)
//     }
//     const inputEventTwo = (event) =>{
//         setPhoneNumber(event.target.value);
//     }
//     const inputEventThree = (event) =>{
//        setBio(event.target.value)
//      }
//     //  const onFileChange = (e)=>{
//     //    setFile(e.target.files[0])
//     //  }
//     const onSubmit = (event)=>{
//         //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        
//         event.preventDefault();
//         setfGender(gender);
//         setfPhoneNumber(phonenumber);
//         setfBio(bio);
//         const picture = new FormData();
//         picture.append('picture', file);
//          axios.post(`http://localhost:8000/userprofile/14/create`,{gender,phonenumber,bio,picture},{
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//         }).then(response => { 
// 	console.log(response)
// });
        
//     }
// return(<>
// <div className="main_div">

// {/* <h2>Hello i am {props.name} page</h2> */}
//     <h1>{fGender} {fphonenumber} {fbio}</h1>
//     <div className="box">

//     <form onSubmit={onSubmit}>
//         <div className="form">
//             <h2 id='heading'> User Profile</h2>
//     {/* In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself*/}
//     <input id="input" type="text" placeholder="Enter your gender" onChange={inputEvent} value={gender}/><br />
//     <input id="input" type="text" placeholder="Enter your phoneNumber" onChange={inputEventTwo} value={phonenumber}/>
//     <input id="input" type="text" placeholder="Enter your bio" onChange={inputEventThree} value={bio}/>
//     <input id="input" type="file" placeholder="Submit your picture" onChange={(e)=>setFile(e.target.files[0])} />
//     <button id="btn1" type="submit">Click Me :</button>
//     </div>
//     </form>
//     </div>
     
// </div>

//        </>);
// }

// export default Userprofile;

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
        form.append('picture', data.picture[0]);

        axios.put('/userprofile/37/update', form);

        console.log(data);
    //    axios.post('/signup', data)
    }
    return <>
   <div className="main_div">
   <div className='box'>
       <h1>Welcom {name}</h1>
   <form onSubmit={handleSubmit(onSubmission)} >
            <div className='form'>
            <h2 id="heading">User profile</h2>
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

// import axios from "axios";
// import { useForm } from "react-hook-form"

// export default () => {

//     let { register, handleSubmit } = useForm();

//     const onSubmission = function (data) {

//         let form = new FormData;
//         form.append('gender', data.gender);
//         form.append('phonenumber', data.phonenumber);
//         form.append('bio' , data.bio);
//         form.append('picture', data.picture)

//         axios.post('/userprofile/15/create', form);

//         console.log(data);
//         console.log(data.picture[0].name)
//     //    axios.post('/signup', data)
//     }
//     return <>
//         <form onSubmit={handleSubmit(onSubmission)} >
//             <div className='main'>

//                 <div className='container'>
//                     <div> Gender</div>
//                     <div>
//                         <input {...register('gender')}   placeholder='User Name' />
//                     </div>
//                     <div> Phone</div>
//                     <div>
//                         <input {...register('phonenumber')}   placeholder='Phone Number' />
//                     </div>
//                     <div> Bio</div>
//                     <div>
//                         <input {...register('bio')}   placeholder='Bio' />
//                     </div> 
//                     <div>
//                         <input {...register('picture')} type="file" name="picture" />
//                     </div>
//                     <div>
//                         <button>Sign Up</button>
//                     </div>
//                 </div>
//             </div>

//         </form>
//     </>
// }