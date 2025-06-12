import React from "react";
import { getImageUrl } from "../../utils";
import "../About/About.css";

export const About = () => {
    return(
        <section className="aboutContainer" id="about">
            <h2 className="aboutTitle">About</h2>
            <div className="aboutContent">
                <img src={getImageUrl("about/aboutImage.png")} 
                alt="me setting with laptop" className="aboutImg" />
                <ul className="aboutItems">
                    <li className="aboutItem">
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon" />
                        <div className="aboutItemText">
                            <h3>Crafting Beautiful Interfaces</h3>
                            <p>I specialize in building sleek, responsive user interfaces using modern frontend technologies like React, ensuring smooth user experiences across all devices.</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={getImageUrl("about/serverIcon.png")} alt="server Icon" />
                        <div className="aboutItemText">
                            <h3>Building Robust Backends</h3>
                            <p>I design and develop scalable backend systems and APIs using Node.js and Express, focusing on performance, security, and maintainability.</p>
                        </div>
                    </li>
                    <li className="aboutItem"> 
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI Icon" />
                        <div className="aboutItemText">
                            <h3>Designing Thoughtful Experiences</h3>
                            <p>My design work focuses on user-centered interfaces — from wireframes to final designs — ensuring functionality meets aesthetics seamlessly.</p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}