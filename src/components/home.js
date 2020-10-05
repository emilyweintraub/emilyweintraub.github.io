import React, { Component } from "react";
import '../styles/Home.css'
import resume from '../images/Resume.pdf'

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
                    <h1 className='Projects-Header'>Projects</h1>
                    <div className='Projects-Details'>
                        <div className='Project L'>
                            <div className="Project-Picture">
                                <img alt="" />
                            </div>
                            <div>
                                <h2 className="Title">PeerPal</h2>
                                <p className="Project-Description">
                                    • Individually responsible for design and implementation of front end of web application using next.js server side rendering with an express server
                                    • Dynamically updated postgresql database based on user action and algorithm results
                                    • Assisted in full stack-development of broader tool as well as high level technical direction of the development of custom API</p>
                            </div>
                        </div>
                        <div className='Project R'>
                            <div>
                                <h2 className="Title">NODI: Northwestern Open Data Portal</h2>
                                <p className="Project-Description">
                                    • Developed site’s navigational user interface using React
                                    • Aggregated public student data from University data books, directors of research, and student surveys
                                    • Pitched and developed relationship with Northwestern’s Office of Institutional Research to obtain data resources and university support
                                </p>
                            </div>
                            <div className="Project-Picture">
                                <img alt="" />
                            </div>
                        </div>
                        <div className='Project L'>
                            <div className="Project-Picture">
                                <img alt="" />
                            </div>
                            <div>
                                <h2 className="Title">ElCare</h2>
                                <p className="Project-Description">
                                    • Ideated, developed and pitched ElCare, an application that allows family members to quickly check in with elderly loved ones online
                                    • Conducted user testing with Northwestern students to prototype and adjust ElCare UX
                                    • Created and designed application’s UI using Figma and React
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;