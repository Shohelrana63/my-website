import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import img1 from '../../images/Allprojects/creative agency.png';
import img2 from '../../images/Allprojects/travel guru.png';
import img3 from '../../images/Allprojects/VolunteerNetwork.png';
import img4 from '../../images/Allprojects/doctors portal.png';
import img5 from '../../images/Allprojects/online class.png';
import img6 from '../../images/Allprojects/social buddy.png';
import img7 from '../../images/Allprojects/Hot Gadgets.png';
import img8 from '../../images/Allprojects/E School.png';
import img9 from '../../images/Allprojects/Panda e-commerce.png';
import './AllProject.css';

const AllProjects = () => {

    return (
        <div className="">
            <Navbar></Navbar>

            <section className="container my-5">
                <div>
                    <h1>My Projects</h1>

                    <div className="row d-flex mt-5">

                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={img1} class="card-img-top img-fluid" alt="..." />
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

                    {/* 2ND ROW */}
                    <div className="row d-flex mt-5">

                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={img4} class="card-img-top img-fluid" alt="..." />
                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                    <h5 class="card-title">Doctors Portal</h5>
                                    <p class="card-text">Doctors Portal is a Full Stack Web Application.
                                    <br />
                                    • Here a patient can book an appointment his specific date and time.
                                    <br />
                                    • Doctors can see all patients appointment and add a doctor by dashboard.
                                    </p>
                                    <div className="technology">
                                        <span>React</span>
                                        <span>React Router</span>
                                        <span>Node.js</span>
                                        <span>Express.js</span>
                                        <span>MongoDB</span>
                                        <span>Bootstrap</span>
                                        <span>Heroku</span>
                                        <span>Github</span>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <h6 >
                                            <a style={{ color: "white" }} href="https://doctors-portal-fstack.web.app/" rel="noopener noreferrer" target="_blank">Website</a>
                                        </h6>
                                        <h6 class="text-muted">
                                            <a style={{ color: "white" }} href="https://github.com/Shohelrana63/doctors-portal-client" rel="noopener noreferrer" target="_blank">github</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={img5} class="card-img-top img-fluid " alt="..." />
                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                    <h5 class="card-title">Online Course</h5>
                                    <p class="card-text">Online course is a one page application<br />
                                    • Here customer can buy their selected courses <br />
                                    • Customers can see all orders and Price <br />
                                    </p>
                                    <div className="technology">
                                        <span>React</span>
                                        <span>React Router</span>
                                        <span>Bootstrap</span>
                                        <span>Netlify</span>
                                    </div>
                                </div>

                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <h6 class="text-muted">
                                            <a style={{ color: "white" }} href="https://shohelranabaig-online-class.netlify.app/" rel="noopener noreferrer" target="_blank">Website</a>
                                        </h6>
                                        <h6 class="text-muted">
                                            <a style={{ color: "white" }} href="https://github.com/Shohelrana63/online-class" rel="noopener noreferrer" target="_blank">github</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={img6} class="card-img-top img-fluid" alt="..." />
                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                    <h5 class="card-title">Social Buddy</h5>
                                    <p class="card-text">Social Buddy is a Web Application.
                            <br />
                                • Here you can see 100 posts. <br />
                                • when you click see more then you see this post user details. <br />
                                • Also you can see 5 comments. <br />
                                    </p>
                                    <div className="technology">
                                        <span>React</span>
                                        <span>React Router</span>
                                        <span>Rest Api</span>
                                        <span>React Material-UI</span>
                                        <span>Netlify</span>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <h6 class="text-muted">
                                            <a style={{ color: "white" }} href="https://shohelranabaig-social-buddy-react-router.netlify.app/">Website</a>
                                        </h6>
                                        <h6 class="text-muted">
                                            <a style={{ color: "white" }} href="https://github.com/Shohelrana63/react-material-ui">github</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* 3rd Row */}
                    <div className="row d-flex mt-5">

                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={img7} class="card-img-top img-fluid" alt="..." />
                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                    <h5 class="card-title">Hot Gadgets</h5>
                                    <p class="card-text">Hot Gadgets is a Static Gadgets Shop. Here Customers can order any services.
                                        <br />
                                        • It's Fully Responsive Website.
                                        <br />
                                    </p>
                                    <div className="technology">
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>Bootstrap</span>
                                        <span>Github</span>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <h6 >
                                            <a style={{ color: "white" }} href="https://shohelrana63.github.io/hot-gadgets/" rel="noopener noreferrer" target="_blank">Website</a>
                                        </h6>
                                        <h6 class="text-muted">
                                            <a style={{ color: "white" }} href="https://github.com/Shohelrana63/hot-gadgets" rel="noopener noreferrer" target="_blank">github</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={img8} class="card-img-top img-fluid " alt="..." />
                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                    <h5 class="card-title">E School</h5>
                                    <p class="card-text">E School is a Static Website<br />
                                            • It's Fully Responsive Design. <br />
                                            • You Can see many courses <br />
                                    </p>
                                    <div className="technology">
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>Bootstrap</span>
                                        <span>Github</span>
                                    </div>
                                </div>

                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <h6 class="text-muted">
                                            <a style={{ color: "white" }} href="https://shohelrana63.github.io/e-school-resources/" rel="noopener noreferrer" target="_blank">Website</a>
                                        </h6>
                                        <h6 class="text-muted">
                                            <a style={{ color: "white" }} href="https://github.com/Shohelrana63/e-school-resources" rel="noopener noreferrer" target="_blank">github</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={img9} class="card-img-top img-fluid" alt="..." />
                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-body">
                                    <h5 class="card-title">Panda E-commerce</h5>
                                    <p class="card-text">Panda E-commerce is a Static Website.
                                                    <br />
                                                        • It's Fully Responsive Design. <br />
                                                        • It builds With Carousel slider <br />
                                    </p>
                                    <div className="technology">
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>Bootstrap</span>
                                        <span>Github</span>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#0a192f", color: "white" }} class="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <h6 class="text-muted">
                                            <a style={{ color: "white" }} href="https://volenteer-network-baig.web.app/">Website</a>
                                        </h6>
                                        <h6 class="text-muted">
                                            <a style={{ color: "white" }} href="https://github.com/Shohelrana63/volunteer-network-client">github</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div >

    );
};

export default AllProjects;