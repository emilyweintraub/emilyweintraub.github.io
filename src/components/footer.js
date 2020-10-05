import React from "react";
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright} from '@fortawesome/free-regular-svg-icons'
import { useLocation, Link } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
        <footer className="sticky-footer">
            <p className="bottom-nav">
            <Link class="drop" to={{ pathname: `/`, state: { fromBanner: true } }} onClick={location.pathname === 'home.js' ? this.targetRef.scrollIntoView({
                behavior: 'smooth'
            }) : undefined}><a>Projects</a></Link> | 
            <Link to={{ pathname: `/about` }} onClick={scrollTop}><a>About Me</a></Link> | 
            <Link to={{ pathname: `/about`, state: { fromBanner: true } }} onClick={location.pathname === 'about.js' ? this.targetRef.scrollIntoView({
                behavior: 'smooth'
            }) : undefined}><a>Contact</a></Link>
            </p>
                <p className="copyright">
            <FontAwesomeIcon icon={faCopyright} className="icon" />Emily Weintraub 2020
            </p>
        </footer>
    );
}

export default Footer;
