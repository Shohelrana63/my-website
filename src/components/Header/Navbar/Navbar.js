import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <h1 style={{ color: "white" }}>Shohel Rana</h1>
                    </Link>
                    <button className="navbar-toggler" to="/" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/blogs">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link mr-5 font-weight-bold" to="/contact">Contact</Link>
                            </li>
                        </ul>

                        <a className='link' href="https://drive.google.com/u/0/uc?id=1tdv1Vq_K6fNrUa9ZZ-QHrzhM0PPSgRH_&export=download" target="_blank">
                            <button
                                style={{ padding: '4px 20px' }}
                                type="button"
                                className='btn btn-outline-warning text-white font-weight-bold'>Resume</button></a>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;