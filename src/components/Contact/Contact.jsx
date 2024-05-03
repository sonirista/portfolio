import React from "react";
import "../Contact/Contact.css";

import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footerText">
                <h2>Contact</h2>
                <p>Feel free to Reach Out!</p>
            </div>
            <ul className="footerLinks">
                <li className="footerLink" >
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /> 
                    <a href="mailto:contactsoni2001@gmail.com">contactsoni2001@gmail.com</a>
                </li>
                <li className="footerLink">
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" /> 
                    <a href="https://www.linkedin.com/in/sonirista-behera-388335280/">linkedin.com/sonirista</a>
                </li>
                <li className="footerLink">
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /> 
                    <a href="#">github.com/sonirista</a>
                </li>
            </ul>
        </footer>
    )
}