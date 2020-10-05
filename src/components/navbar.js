import React from "react";
import '../styles/Nav.css';
import { useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
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
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark mb-3 sticky-nav">
        <a className="App-logo"><Link to={{ pathname: `/` }} onClick={scrollTop}>esw</Link></a>
        <a href="javascript:void(0);" class="ico" onClick={sayHello}>&#9776;</a>
        <a className="topnav" id="myTopnav">
          {/* <Link to={{ pathname: `/`, state: { fromBanner: true } }} onClick={location.pathname === 'home.js' ? this.targetRef.scrollIntoView({
            behavior: 'smooth'
          }) : undefined}><a>Projects</a></Link> */}

          
          {/* Start of project nav details */}
          <div className="dropdown">
            <Link class="drop" to={{ pathname: `/`, state: { fromBanner: true } }} onClick={location.pathname === 'home.js' ? this.targetRef.scrollIntoView({
              behavior: 'smooth'
            }) : undefined}><a>+ Projects</a></Link>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          {/* End of project nav details */}

          <Link to={{ pathname: `/about` }} onClick={scrollTop}><a>About Me</a></Link>
          <Link to={{ pathname: `/about`, state: { fromBanner: true } }} onClick={location.pathname === 'about.js' ? this.targetRef.scrollIntoView({
            behavior: 'smooth'
          }) : undefined}><a>Contact</a></Link>
        </a>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
