import React, { Component } from "react";
import '../styles/About.css'
import me from '../images/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

class About extends Component {
    targetRef = React.createRef()
    currentPage = 'about';
    
    render() {
        if (this.props.location.state) {
            setTimeout(() => {
            this.targetRef.scrollIntoView({
                behavior: 'smooth'
            })
        }, 500);
        }
        return (
            <div className="about">
                <div className="info">
                    <div><img src={me} alt="me" /></div>
                    <div className="details">
                        <h2>
                            Hi, I'm Emily!
                    </h2>
                        <p>
                            I'm currently a senior at Northwestern studying Computer Science and Communication Studies. I'm passionate about problem solving and the power of technology in society. In my free time, you can find me watching the West Wing or listening to one of my favorite podcasts.
                    </p>
                    </div>
                </div>
                <div className="contact">
                    <h1>
                        Get In Touch:
                </h1>
                <div className="Icons" ref={ref => {this.targetRef = ref}}>
                <a href="mailto:emilysweintraub@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="icon" /></a>
                <a href='https://github.com/emilyweintraub'><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                    <a href='http://www.linkedin.com/in/emilyweintraub'><FontAwesomeIcon icon={faLinkedinIn} className="icon" /></a>
                    </div>
                </div>
            </div>

        );
    }
}

export default About;