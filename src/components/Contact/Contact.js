import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import emailjs from 'emailjs-com';
import './Contact.css';
const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_1ptqhyl', 'template_fuu9tce', e.target, 'user_fCffiAVcjnbQ0dq91yGtY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="my-5">

                    <div style={{ backgroundColor: "rgb(23, 42, 69)" }} className='mx-auto contact-form my-3 p-3 px-4' >
                        <div className="">
                            <h2 className="text-center mb-4">Contact form</h2>
                            <form action="" onSubmit={sendEmail}>
                                <div className="form-group">
                                    <input name="user_name" placeholder="Your Name" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input name="user_email" placeholder="Your Email" type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" rows="4" placeholder="Your Message" type="text" className="form-control"></textarea>
                                </div>
                                <div className=" text-center form-group">
                                    <button style={{ backgroundColor: "#e9af1d" }} type="submit" className="btn btn-block">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;