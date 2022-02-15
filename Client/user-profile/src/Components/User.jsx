import axios from 'axios';
import React, { useEffect } from 'react';
import { useState} from 'react';
import {useNavigate} from "react-router";
import Manubar from './Manubar';

const User = () => {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [fullNmae, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullpassword, setFullPassword] = useState("")
    const [lastNameNew, setEmailNew] = useState("")
    const [allEntry, setAllEntry] = useState([]);

    const inputEvent = (event) =>{
        setName(event.target.value)
    }
    const inputEventTwo = (event) =>{
        setEmail(event.target.value);
    }
    const inputEventThree = (event) =>{
       setPassword(event.target.value)
     }
     useEffect(()=>{
        localStorage.setItem('login',JSON.stringify(name,email,password));
     }, [name,email,password])
    const onSubmit =  (event)=>{
        //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        event.preventDefault();
        setFullName(name);
        setEmailNew(email);
        setFullPassword(password)
        let response= axios.post(`http://localhost:8000/user/1/register`,{name,email,password});
        
        console.log(response);
        // using fetch api
        // if (name && email && password) {
        //     // e.preventDefault();
        //     fetch('http://localhost:9000/content',{
        //         method:'POST',
        //         headers:{'Content-type' : 'application/json'},
        //         body:JSON.stringify({name,email,password})
        //     })
        //   }
    //    if(response === true){
    //    localStorage.setItem('login',JSON.stringify(name,email,password));}

       
       if (email && password) {
           const newEntry = { id: new Date().getTime().toString(), email, password };
           setAllEntry([...allEntry, newEntry]);
           console.log(allEntry);
           setEmail("");
           setPassword("");
           navigate(`/userprofile/${name}`);
   } else {
       alert("plz fill the data");
   }
  
       
    }
return(<>
{/* <Manubar /> */}
<div className="main_div">
     {/* <h2>Hello i am {props.name} page</h2> */}
    <h1>Welcome {fullNmae} {lastNameNew} {fullpassword}</h1>
     <div className='box'>

    <form>
        <div className="form">
            <h2 id="heading">Login</h2>
    {/* In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself*/}
    <input id="input" type="text" placeholder="Enter your Name" onChange={inputEvent} value={name}/><br />
    <input id="input" type="text" placeholder="Enter your Email" onChange={inputEventTwo} value={email}/>
    <input id="input" type="text" placeholder="Enter your Password" onChange={inputEventThree} value={password}/>
    <button id="btn1" type="submit" onClick={onSubmit}>Click Me :</button>
    {/* <a href="/userprofile" id="anc"> User-Profile</a> */}
    </div>
    </form>
     </div>
</div>

       </>);
    
}

export default User;

  
