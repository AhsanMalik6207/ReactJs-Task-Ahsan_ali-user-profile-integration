import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Manubar from './Manubar';

const Logout = () => {
    localStorage.clear();
//     let Navigate = useNavigate();
// <Navigate to="/user" />
    return(
        <h1>You Successfully logout</h1>
    );    
}


export default Logout;