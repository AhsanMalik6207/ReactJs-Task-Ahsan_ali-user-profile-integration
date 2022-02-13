import React from 'react';
import { Link } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom'
import './route.css'
const Manubar = () => {
  
    return <div className='manu_style'>
        
     <Link activeClassName='activ_class' to="/home"> Home</Link> 
<Link activeClassName='activ_class' to="/post"> Post</Link> 
 <Link activeClassName='activ_class' to="/home"> Category</Link>
 <Link activeClassName='activ_class' to="/home"> Contact Us</Link>
 <Link activeClassName='activ_class' to= "/user">Login</Link>
    {/* {
        localStorage.getItem('login')?    
        <Link activeClassName='activ_class' to= "/logout">Logout</Link>:
        <Link activeClassName='activ_class' to= "/user">Login</Link>

    } */}
     

        
    {/* <Route exact path="/"> */}
     
      {/* loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} </Route>
        // <Link exact activeClassName='activ_class' to= "/user">Login</Link>?
        // <Link exact activeClassName='active_class' to="/userprofile"> User-Profile </Link>:
        // <Link exact activeClassName='activ_class' to= "/logout">Logout</Link> */}
    
    
    {/* <Link exact activeClassName='active_class' to="/userprofile"> User-Profile </Link> */}

    </div>;
}


export default Manubar;