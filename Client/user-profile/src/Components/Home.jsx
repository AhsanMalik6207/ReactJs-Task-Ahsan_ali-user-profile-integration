import React from 'react';
import "./home.css";
import Rout from './Rout';
import img from "./images/blog.jpg";
import blog from "./images/download.jpeg";
import title from "./images/title.jpg";
// import Manubar from './Manubar';
// import Rout from './Rout';
const Home = () => {
    return <div>
      {/* <Rout /> */}
        <div className="header">
        <div className="fakeimg" > <img src={title} alt="ahsan"/> </div>
</div>

<div className="row">
  <div className="leftcolumn">
    <div className="card">
      <h2>Web Technology</h2>
      <h5>Web technologies refers to the way computers/devices communicate. with each other using mark up languages. It invo It is communication. across the web, and create, deliver or manage web content using hypertext markup language (HTML).</h5>
      <div className="fakeimg" > <img src={img} alt="ahsan"/> </div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
    <div className="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <div className="fakeimg" ><img src={blog} alt="ahsan"/>  </div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>About Me</h2>
      <div className="fakeimg" ><img src="https://picsum.photos/200" alt="" /></div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div className="card">
      <h3>Popular Post</h3>
      <div className="fakeimg"><img src="https://picsum.photos/201" alt="img" /></div><br />
      <div className="fakeimg"><img src="https://picsum.photos/204" alt="img" /></div><br />
      <div className="fakeimg"><img src="https://picsum.photos/202" alt="img" /></div>
    </div>
    <div className="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div>
</div>

<div className="footer">
<footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">The site of your Compaign</h5>
                <p class="grey-text text-lighten-4">Check your “Behavior Flow” report in Analytics. Where do visitors seem to want to go.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Stay Connected </h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Services</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">About</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Posts</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
</div>

    </div>;
}


export default Home;