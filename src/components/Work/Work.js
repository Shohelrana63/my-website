import React from 'react';
import img1 from '../../images/projects/creative agency.png';
import img2 from '../../images/projects/travel guru.png';
import img3 from '../../images/projects/VolunteerNetwork.png';
import './Work.css';
const Work = () => {
    return (
        <section className="container">
            <div>
                <h1>My projects</h1>

                <div className="row d-flex mt-5">
                    <div className="col-md-4 my-3">
                        <div class="card">
                            <img src={img1} class="card-img-top card-shadow img-fluid" alt="..." />
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                <h5 class="card-title">Creative Agency</h5>
                                <p class="card-text">Creative Agency is a Full-Stack Web Application. Here Customers can order any services.
                        <br />
                        • When Client logging in by gmail. They can see the client dashboard.
                        <br />
                        • Then the client can see their order and they can also add a review in the Website.
                        <br />
                         •Admin can add service make admin and see all orders submitted by clients. </p>


                                <div className="technology">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MongoDB</span>
                                    <span>Firebase</span>
                                    <span>Heroku</span>
                                </div>

                            </div>
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                <div className="d-flex justify-content-between">
                                    <h6 >
                                        <a style={{ color: "white" }} href="https://creative-agency-srbaig.web.app/" rel="noopener noreferrer" target="_blank">Website</a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/Shohelrana63/creative-agency-client" rel="noopener noreferrer" target="_blank">github</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div class="card">
                            <img src={img2} class="card-img-top img-fluid " alt="..." />
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                <h5 class="card-title">Travel Guru</h5>
                                <p class="card-text">A website for travelers. <br />
                        • Travel Guru is a Travelling Website.
                        • it is also Tour booking website. <br />
                        • You can choose your favorites place and select this place. <br />
                       • When you can booking this place then you can see the hotel and hotel description for the selected place.</p>
                                <div className="technology">
                                    <span>React.js</span>
                                    <span>Bootstrap</span>
                                    <span>Material-UI</span>
                                    <span>React Google Map</span>
                                    <span>Firebase</span>
                                </div>
                            </div>

                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                <div className="d-flex justify-content-between">
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://travel-guru-4d13c.web.app/" rel="noopener noreferrer" target="_blank">Website</a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/Shohelrana63/travel-guru" rel="noopener noreferrer" target="_blank">github</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div class="card">
                            <img src={img3} class="card-img-top img-fluid" alt="..." />
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                <h5 class="card-title">Volunteer Network</h5>
                                <p class="card-text">User can register as a volunteer.
                        <br />
                             • User can apply any events. <br />
                            • User can register any event as a volunteering activity. <br />
                            • They can also cancel their submitted event if they want</p>
                                <div className="technology">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MongoDB</span>
                                    <span>Firebase</span>
                                    <span>Heroku</span>
                                </div>
                            </div>
                            <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                <div className="d-flex justify-content-between">
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://volenteer-network-baig.web.app/" rel="noopener noreferrer" target="_blank">Website</a>
                                    </h6>
                                    <h6 class="text-muted">
                                        <a style={{ color: "white" }} href="https://github.com/Shohelrana63/volunteer-network-client" rel="noopener noreferrer" target="_blank">github</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Work;