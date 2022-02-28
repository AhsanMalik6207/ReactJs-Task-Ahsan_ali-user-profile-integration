import { Menu, MenuItem, MenuList } from '@mui/material';
import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import './route.css'
import { dark } from '@material-ui/core/styles/createPalette';
const Manubar = () => {
    let navigate = useNavigate();
    const [anchorEl, setanchorEl] = useState(null);
    const handleOpenMenu = e=>{
        setanchorEl(e.currentTarget);
    }
    const handleMenuClose = ()=>{
        setanchorEl(null);
    }
   const Logout=()=>{
    localStorage.clear();
    navigate('./user');
   } 
    return(

<div className='manu_style'>
    
      
 <Link activeClassName='activ_class' to="/home"> Home</Link> 
 <Link activeClassName='activ_class' to="/weather"> Weather</Link> 
 <Link activeClassName='activ_class' to="/allposts"> Posts</Link> 
 <Link activeClassName='activ_class' to="/createpost"> Create_Post</Link> 
 <Link activeClassName='activ_class' to="/comments"> Comments</Link> 
 <Link activeClassName='activ_class' to="/createcategory" onClick={handleOpenMenu} aria-controls='menu'> Category</Link>
 <Link activeClassName='activ_class' to="/home"> Contact Us</Link>
 {/* <Link activeClassName='activ_class' to= "/user">Login</Link> */}
    {
        localStorage.getItem('login')?    
        <button id='btn-log' onClick={Logout}>Logout</button>:
        <Link activeClassName='activ_class' to= "/user">Login</Link>

    }
     <Menu style={{type:dark}} id='menu' onClose={handleMenuClose} anchorEl={anchorEl} open={Boolean(anchorEl)}>
         <MenuItem onClick={handleMenuClose} style={{color:'black'}}> <Link to="/allposts"> All posts</Link> </MenuItem>
         <MenuList onClick={handleMenuClose}><Link to= "/programmingcategories"> Programming</Link></MenuList>
         <MenuList onClick={handleMenuClose}><Link to= "/Educationcategories"> Education</Link></MenuList>
         <MenuList onClick={handleMenuClose}><Link to= "/Musiccategories"> Music</Link></MenuList>
     </Menu>
    </div>
    )
}

export default Manubar;