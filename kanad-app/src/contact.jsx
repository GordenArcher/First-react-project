import React from "react";
import ContactImg from "./assets/images/contact.svg";
import "./assets/CSS/contact.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {  

    const showToastMessage = (e) => {
        e.preventDefault();
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
          });

          console.log(showToastMessage);
    };
    

    return(

        <div className="contact_container" id="contact">
            <div className="contact_card">
                <div className="contact_header">
                    <h4 className="contact_tittle">Contact me</h4>
                </div>

                    <div className="container_wrapper">
                        <div className="contact_form">
                        <div className="contactphoto">
                            <div className="contact_left">
                                <img src={ContactImg} alt="contact img" />
                            </div>
                        </div>

                        <div className="contact_form_container">
                            <div className="main_contact">
                                <div className="form_header">
                                    <h3>Fill and send me a message</h3>
                                </div>
                                <div className="contact_wrapper">

                                    <form>
                                        <div className="form_fields">
                                            <div className="name_group">
                                                <div className="form_group name">
                                                    <label>First Name</label>
                                                    <input type="text" 
                                                    className="form_input 
                                                    fname" />
                                                </div>

                                                <div className="form_group name">
                                                    <label>Last Name</label>
                                                    <input type="text"
                                                    className="form_input 
                                                    lname" 
                                                    
                                                    />
                                                </div>
                                            </div>

                                            <div className="form_group">
                                                <label>Email</label>
                                                <input type="email" 
                                                className="form_input email" 
                                                
                                                />
                                            </div>

                                            <div className=" name_group">

                                                <div className="phone">
                                                    <label>Phone</label>
                                                    <input type="number" 
                                                    className="form_input phone_number"
                                                    
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                    />
                                                    
                                                </div>
                                                
                                                <div className="request_call_back">
                                                    <input type="button" value="Request a Call Back" className="form_input call_back"
                                                    />

                                                    <i className="bi bi-phone"></i>

                                                </div>

                                            </div>

                                            <div className="form_group">
                                                <label className="textlabel">Type Your Message</label>
                                                <textarea className="form_textarea textarea" required></textarea>
                                            </div>

                                            <div className="form_group">
                                                <button type="button" 
                                                className="form_btn"
                                                onClick={showToastMessage}
                                                >Submit
                                                </button>
                                            </div>   
                                        </div> 
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>

    );

};

export default Contact;