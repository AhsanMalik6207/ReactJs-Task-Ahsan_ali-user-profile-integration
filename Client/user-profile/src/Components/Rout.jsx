import { BrowserRouter , Routes , Route} from 'react-router-dom'
import React from 'react';
import Home from './Home';
import User from './User';
// import Login from './Login';
import Userprofile from './Userprofile';
// import Logout from './Logout';
import Manubar from './Manubar';
import Temp from './Temp';

const Rout = () => {
// let {}= useParams();
    return (<>

    <BrowserRouter>
    <Manubar />
    {/* // ager hum Router ko remove krtey hai to hum sab pages daikhiey dien geye */}
    <Routes>
        {/* route specify the path of component  */}
        <Route path='/home' element={<Home />}/>
        <Route path='/post' element={<Temp />} />
        <Route path='/user' element={<User />}/>
        <Route path='/userprofile/:name' element={<Userprofile />}/>
        {/* <Route exact path="/user" element = {<Logout />} /> */}
        {/* <Route exact path="/home" element={()=><Home name="Home" />} />
        {/* <Route exact path="/login" element={()=><Login name="Login" />} /> */}
        {/* <Route exact path="/user" element={()=><User name="User" />} />

        
        <Route exact path="/userprofile" render={()=><Userprofile name="Userprofile" />} /> */} 
    </Routes>
    </BrowserRouter>
       </>);
}

export default Rout;