import React from "react";
import "../Experience/Experience.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section id="experience" className="expContainer">
            <h2 className="expTitle">Experience</h2>
            <div className="expContent">
                <div className="skills">{
                    skills.map((skill, id) => {
                        return (
                            <div key={id} className="skill">
                                <div className="skillImageContainer">
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </section>
    )
}