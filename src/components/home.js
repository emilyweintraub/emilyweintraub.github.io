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
                    <p className='links'><a href={resume} target="_blank">Resume</a>/
                <a href={resume} target="_blank">Contact</a>/
                <a href='http://www.linkedin.com/in/emilyweintraub' target="_blank">Linkedin</a>
                    </p>
                </div>
                <div className='Projects'>
                    <h1 className='Projects-Header' ref={ref => { this.targetRef = ref }}>Projects</h1>
                    <div className='Projects-Details'>
                        <div className='Proj'>
                            <div><img /></div>
                            <div>
                                <h1>Project 1</h1>
                                <p>This is the information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;