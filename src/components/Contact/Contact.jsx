import React from "react";
import "../Contact/Contact.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer className="footer" id="contact">
            <div className="contactContainer">
                <div className="contactIntro">
                    <h2>Let’s Connect</h2>
                    <p>I'm always open to new opportunities and collaborations. Drop me a line!</p>
                </div>
                <div className="contactLinks">
                    <a
                        href="mailto:soniristabehera1@gmail.com"
                        className="contactItem"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                        <span>soniristabehera1@gmail.com</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sonirista-behera-388335280/"
                        className="contactItem"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
                        <span>linkedin.com/in/sonirista-behera-388335280</span>
                    </a>
                    <a
                        href="https://github.com/sonirista"
                        className="contactItem"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
                        <span>github.com/sonirista</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};
