import React, { Component } from "react";
import '../styles/Home.css'
import resume from '../images/Resume.pdf'
import nodi from '../images/nodi.png'
import elcare from '../images/elcare.png'
import peerpal from '../images/peerpal.png'

class Home extends Component {
    targetRef = React.createRef()

    render() {
        if (this.props.location.state) {
            setTimeout(() => {
                this.targetRef.scrollIntoView({
                    behavior: 'smooth'
                })
            }, 500);
        }
        return (
            <div className='Home'>
                <div className='top'>
                    <h1 className='Name'>Emily Weintraub</h1>
                    <p className='links'><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>/
                <a href="mailto:emilysweintraub@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>/
                <a href='http://www.linkedin.com/in/emilyweintraub' target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </p>
                </div>
                <div className='Projects' ref={ref => { this.targetRef = ref }}>
                    <h1 className='Projects-Header'>Experience</h1>
                    <div className='Projects-Details'>
                        <div className='Project R'>
                        <div>
                                <h2 className="Title">PeerPal</h2>
                                <ul className="Project-Description">
                                    <li>Individually responsible for design and implementation of front end of web application using next.js server side rendering with an express server</li>
                                    <li>Dynamically updated postgresql database based on user action and algorithm results</li>
                                    <li>Assisted in full stack-development of broader tool as well as high level technical direction of the development of custom API</li>
                                    </ul>
                            </div>
                            <div className="Project-Picture">
                                <img alt="" src={peerpal}/>
                            </div>
                        </div>
                        <div className='Project L'>
                        <div className="Project-Picture">
                                <img alt="" src={nodi} />
                            </div>
                            <div>
                                <h2 className="Title">Northwestern Open Data Portal</h2>
                                <ul className="Project-Description">
                                <li>Developed site’s navigational user interface using React</li>
                                <li>Aggregated public student data from University data books, directors of research, and student surveys</li>
                                <li>Pitched and developed relationship with Northwestern’s Office of Institutional Research to obtain data resources and university support</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Project R'>
                        <div>
                                <h2 className="Title">ElCare</h2>
                                <ul className="Project-Description">
                                <li>Ideated, developed and pitched ElCare, an application that allows family members to quickly check in with elderly loved ones online</li>
                                    <li>Conducted user testing with Northwestern students to prototype and adjust ElCare UX</li>
                                    <li>Created and designed application’s UI using Figma and React</li>
                                </ul>
                            </div>
                            <div className="Project-Picture">
                                <img alt="" src={elcare}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;