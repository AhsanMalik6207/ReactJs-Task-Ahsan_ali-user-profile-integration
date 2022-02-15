import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
// import User from './User';
//
import './route.css'
 
const Manubar = () => {
    let navigate = useNavigate();
   const Logout=()=>{
    localStorage.clear();
    navigate('./user');
   } 
    return <div className='manu_style'>
        
 <Link activeClassName='activ_class' to="/home"> Home</Link> 
 <Link activeClassName='activ_class' to="/post"> Post</Link> 
 <Link activeClassName='activ_class' to="/home"> Category</Link>
 <Link activeClassName='activ_class' to="/home"> Contact Us</Link>
 {/* <Link activeClassName='activ_class' to= "/user">Login</Link> */}
    {
        localStorage.getItem('login')?    
        <button id='btn-log' onClick={Logout}>Logout</button>:
        <Link activeClassName='activ_class' to= "/user">Login</Link>

    }
     

        
    {/* <Route exact path="/"> */}
     
      {/* loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} </Route>
        // <Link exact activeClassName='activ_class' to= "/user">Login</Link>?
        // <Link exact activeClassName='active_class' to="/userprofile"> User-Profile </Link>:
        // <Link exact activeClassName='activ_class' to= "/logout">Logout</Link> */}
    
    
    {/* <Link exact activeClassName='active_class' to="/userprofile"> User-Profile </Link> */}

    </div>;
}


export default Manubar;