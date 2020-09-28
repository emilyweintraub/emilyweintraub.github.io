import React, { Component } from "react";
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright} from '@fortawesome/free-regular-svg-icons'
import { useLocation, Link } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    return (
        <footer className="sticky-footer">
            {/* <div className="bottom-nav"> */}
            <p className="bottom-nav">
            <Link class="drop" to={{ pathname: `/home`, state: { fromBanner: true } }} onClick={location.pathname == 'home.js' ? this.targetRef.scrollIntoView({
                behavior: 'smooth'
            }) : undefined}><a>Projects</a></Link> | 
            <Link to={{ pathname: `/about` }}><a>About Me</a></Link> | 
            <Link to={{ pathname: `/about`, state: { fromBanner: true } }} onClick={location.pathname == 'about.js' ? this.targetRef.scrollIntoView({
                behavior: 'smooth'
            }) : undefined}><a>Contact</a></Link>
            </p>
            {/* </div>
            <div > */}
                <p className="copyright">
            <FontAwesomeIcon icon={faCopyright} className="icon" />Emily Weintraub 2020
            </p>
            {/* </div> */}
        </footer>
    );
}

export default Footer;
