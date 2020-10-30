import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import baig1 from '../../../images/baig/baig.png';
import './About.css';
const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-5">
                        <div className="my-pic">
                            <img className="img-fluid" src={baig1} alt="" />
                        </div>
                        <div>
                            <h2>I'm Shohel Rana</h2>
                            <p>I am a highly passionate, enthusiastic, hardworking and dedicated learner. Self-motivated IT professional with
                            deep knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development, as
                        well as highly potent skills and ability in encoding virus-free and efficient code.</p>
                        </div>
                        <Link to="/contact">
                            <button style={{ backgroundColor: "#e9af1d" }} className="btn ">Contact Me</button>
                        </Link>
                    </div>
                    <div className="col-md-6 my-5">
                        <h1>My Skills</h1>
                        <div className="my-4">
                            <h4>Comfortable</h4>
                            <div className="skills my-3">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>ES6</span>
                                <span>React</span>
                                <span>React Router</span>
                                <span>Bootstrap</span>
                                <span>Material-UI</span>
                                <span>React Router</span>
                            </div>
                        </div>
                        <div className="my-4">
                            <h4>Familiar</h4>
                            <div className="skills my-3">
                                <span>MongoDB</span>
                                <span>Express.js</span>
                                <span>Node.js</span>
                                <span>SASS</span>
                                <span>Data Structure</span>
                                <span>Java</span>
                                <span>OOP</span>
                                <span>Algorithm</span>
                                <span>Firebase</span>
                                <span>Netlify</span>
                                <span>Heroku</span>
                            </div>
                        </div>
                        <div className="my-4">
                            <h4>Tools</h4>
                            <div className="skills my-3">
                                <span>Visual Studio Code</span>
                                <span>Git</span>
                                <span>GitHub</span>
                                <span>Yarn</span>
                                <span>Chrome Dev Tool</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;