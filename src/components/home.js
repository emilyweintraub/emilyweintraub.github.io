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
                <h1 className='Name'>Emily Weintraub</h1>
                <p className='links'><a href={resume} target="_blank">Resume</a>/
                <a href={resume} target="_blank">Contact</a>/
                <a href='http://www.linkedin.com/in/emilyweintraub' target="_blank">Linkedin</a>
                </p>
                <h1 ref={ref => {this.targetRef = ref}}>Projects</h1>
            </div>
        );
    }
}

export default Home;