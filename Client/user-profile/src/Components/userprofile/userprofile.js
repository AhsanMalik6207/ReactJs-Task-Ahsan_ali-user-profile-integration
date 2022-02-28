import "./userprofile.css";

export default function Userprofile({ userprofile }) {
  console.log(userprofile.picture);
  var name = `http://localhost:8000/${userprofile.picture.slice(7,)}`;

  return(
  <>
  <div id="card">
  <img src={name} alt="Avatar"  id="picturedata"/>
 
  {/* <div id="container">
    <h4><b>{post.title}</b></h4>
    <p>{post.description}</p>
  </div> */}
</div>
   {/* <div>
      <h1>{post.title}</h1>
      
    <p>{post.description}</p>
    <img src={post.picture} alt="jk"/>
    </div> */}
    </>
  );
}