import React from 'react';
import baig1 from '../../../images/baig/baig.png';
import { Link } from "react-router-dom";
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <section>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6 my-5">
                        <h5 style={{ color: '#e9af1d' }}>Hi, I'm</h5>
                        <h1 className="" style={{ fontSize: "60px" }}>Shohel Rana</h1>
                        <h3 style={{ color: '#e9af1d' }} className="mb-4">Fontend Web Developer</h3>
                        <div class="social mt-4">
                            <div class="social-menu d-flex justify-content-center">
                                <ul>
                                    <li><a href="https://github.com/Shohelrana63" target="_blank"><i class="fa fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/shohelranabaig/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.facebook.com/shohelranabeg" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>

                                </ul>
                            </div>
                        </div>
                        <p className="my-5">I am a highly passionate, enthusiastic, hardworking and dedicated learner. Self-motivated IT professional with
                        deep knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development, as
                        well as highly potent skills and ability in encoding virus-free and efficient code.</p>
                        <Link to="/about">
                            <button style={{ backgroundColor: '#e9af1d' }} className="btn">About me</button>
                        </Link>
                    </div>
                    <div className="col-md-6 my-3">
                        <img
                            className="img-fluid mx-5 "
                            // src={baig}
                            style={{ height: "400px", width: "400px", borderRadius: '50%', boxSizing: 'border-box', padding: '10px' }}
                            src={baig1}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;