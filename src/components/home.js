import React, { Component } from "react";
import '../styles/Home.css'
import resume from '../images/Resume.pdf'

class Home extends Component {
    render() {
        return (
            <div>
                <h1> Hi, I'm Emily Weintraub</h1>
                <p>I'm a senior at Northwestern studying Computer Science and Communication Studies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur odio vitae ex fringilla, id maximus sapien volutpat. Ut eu interdum est. Cras cursus posuere dignissim. Donec a orci malesuada, consectetur quam eget, ullamcorper neque. Nullam neque risus, malesuada quis congue ut, ornare quis neque.</p>
                <br/>
                <p><a href={resume} target="_blank">Resume</a>
                <a href={resume} target="_blank">Contact</a>
                </p>
            </div>
        );
    }
}

export default Home;