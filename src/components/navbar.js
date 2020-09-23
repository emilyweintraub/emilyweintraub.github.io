import React, { Component } from "react";
import '../styles/Nav.css';
import logo from '../images/esw.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";

// class NavBar extends Component {
const NavBar = () => {
  function sayHello() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      // alert('Hello!');
      x.className += " responsive";
    }
    else {
      x.className = "topnav";
    }
  }
  // render() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark mb-3 sticky-nav">
        <a className="App-logo"><Link to={{ pathname: `/home` }}>esw.</Link></a>
        <a href="javascript:void(0);" class="ico" onClick={sayHello}>&#9776;</a>
        <a className="topnav" id="myTopnav">
          <div className="dropdown">
          <Link class="drop" to={{ pathname: `/projects.js` }}><a>+ Projects</a></Link>
          <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>  
          <Link to={{ pathname: `/about.js` }}><a>About Me</a></Link>
          <Link to={{ pathname: `/contact.js` }}><a>Contact</a></Link>
        </a>
        <a className="icons" id="myTopnav">
          <Link to={{ pathname: `/contact.js` }}><FontAwesomeIcon icon={faEnvelope} className="icon" /></Link>
          <a href='http://www.linkedin.com/in/emilyweintraub'><FontAwesomeIcon icon={faLinkedinIn} className="icon" /></a>
        </a>

        {/* <a>Hey Emily!</a>
          {/* <a className="navbar-brand" href="#">
            <h1>Total Items <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
          </a> */}
      </nav>
    </React.Fragment>
  );
  // }
}

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar navbar-dark bg-dark mb-3 sticky-nav">
//         <a className="App-logo">esw.</a>
//         <a className="all">
//           <a>+ Projects</a>
//           <a>About Me</a>
//           <a>Contact</a>
//         </a>
//           <a className="icons">
//           <FontAwesomeIcon icon={faEnvelope} className="icon" />
//           <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
//           </a>

//           {/* <a>Hey Emily!</a>
//           {/* <a className="navbar-brand" href="#">
//             <h1>Total Items <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
//           </a> */}
//         </nav>
//       </React.Fragment>
//     );
//   }
// }

// export default NavBar;