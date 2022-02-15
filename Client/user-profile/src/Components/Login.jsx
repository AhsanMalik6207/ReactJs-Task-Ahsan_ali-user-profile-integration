// import axios from 'axios';
// import React from 'react';
// import { useState} from 'react';
// const Login = (props) => {
    
//     // const [name, setName] = useState("");
//     // const [fullNmae, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [fullpassword, setFullPassword] = useState("")
//     const [lastNameNew, setEmailNew] = useState("")
//     const [allEntry, setAllEntry] = useState([]);
 
//     const inputEventTwo = (event) =>{
//         setEmail(event.target.value);
//     }
//     const inputEventThree = (event) =>{
//        setPassword(event.target.value)
//      }
//     const onSubmit =  (event)=>{
//         //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
//         event.preventDefault();
        
//         setEmailNew(email);
//         setFullPassword(password)
//        let response= axios.post(`http://localhost:8000/user/1/register`,{email,password});
//        console.log(response);
//        if (email && password) {
//         const newEntry = { id: new Date().getTime().toString(), email, password };
//        setAllEntry([...allEntry, newEntry]);
//        console.log(allEntry);
//        setEmail("");
//        setPassword("");
//    } else {
//        alert("plz fill the data");
//    }
  
       
//     }
// return(<>
// <div className="main_div">
//      <h2>Hello i am {props.name} page</h2>
//      <div className="box">

//     <form>
//         <div className="form">
//     <h1 id="heading">Hello {lastNameNew} {fullpassword}</h1>
//     {/* In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself*/}
//     <input id="input" type="text" placeholder="Enter your Email" onChange={inputEventTwo} value={email}/>
//     <input id="input" type="text" placeholder="Enter your Password" onChange={inputEventThree} value={password}/>
//     <button id="btn1" type="submit" onClick={onSubmit}>Click Me :</button>
    
//     </div>
//     </form>
//      </div>
// </div>

//        </>);
    
// }

// export default Login;

export const login = async () => {
    return {
      id: 4,
      username: "bob",
      email: "bob@bob.com"
    };
  };