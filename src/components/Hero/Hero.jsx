import React from "react";
import {getImageUrl} from "../../utils";
import '../Hero/Hero.css';

export const Hero = () => {
    return (
        <section className="container"> 
            <div className="content">
                <h1 className="titleHero">Hii, I'm Sonirista</h1>
                <p className="description">I'm a full-stack developer (Experienced) using React and
                    NodeJS. Reach out if you'd like to learn more!
                </p>
                <a href="mailto:soniristabehera1@gmail.com" className="contactBtn">Contact Me</a>
            </div>
            <img src={getImageUrl('hero/heroImage.png')} alt=' image of me' className="heroImg"/>
            <div className="topBlur" />
            <div className="bottomBlur" />
        </section>
    )
}