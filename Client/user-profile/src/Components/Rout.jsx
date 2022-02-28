import { BrowserRouter , Routes , Route} from 'react-router-dom'
import React, {useState, useMemo} from 'react';
import Home from './Home';
import User from './User';
// import Login from './Login';
import Userprofile from './Userprofile';
import Logout from './Logout';
import Manubar from './Manubar';
import Temp from './Temp';
import Posts from './posts/Posts';
import {UserContext} from './UserContext';
import CreatePost from './CreatePost';
import CreateComments from './CreateComments';
import UpdatePost from './post/Update';
import PostDetails from './post/PostDetails';
import CreateCategories from './CreateCategories';
import UpdateComment from './post/UpdateComment';
import CategoriesData from './CategoryGet';
import EducationCategory from './EducationCategory';
import MusicCategory from './MusicCategory';
const Rout = () => {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({user,setUser}),[user,setUser])
// let {}= useParams();
    return (<>

    <BrowserRouter>
    <Manubar />
    {/* // ager hum Router ko remove krtey hai to hum sab pages daikhiey dien geye */}
        <UserContext.Provider value={value}>
    <Routes>
        {/* route specify the path of component  */}
        <Route path='/home' element={<Home />}/>
        <Route path='/weather' element={<Temp />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/allposts' element={<Posts />} />
        <Route path='/programmingcategories' element={<CategoriesData />} />
        <Route path='/Educationcategories' element={<EducationCategory />} />
        <Route path='/Musiccategories' element={<MusicCategory />} />
        <Route path='/createcategory' element={<CreateCategories />} />
        <Route path='/comments' element={<CreateComments />} />
        <Route path='allposts/updatepost/:id' element={<UpdatePost />} />
        <Route path='allposts/postdetail/:id/updatecomment' element={<UpdateComment />} />
        <Route path='allposts/postdetail/:id' element={<PostDetails />} />
        <Route path='/user' element={<User />}/>
        <Route path='/userprofile/:name' element={<Userprofile />}/>
        <Route path="/logout" element = {<Logout />} />
  


<Route exact path="/userprofile" render={()=><Userprofile name="Userprofile" />} /> */
    </Routes>
</UserContext.Provider>
    </BrowserRouter>
       </>);
}

export default Rout;