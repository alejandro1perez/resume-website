import React from "react"
import SkillsCarousel1 from "./SkillsCarousel.js";

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h1>My Skills</h1>
            <div className="container">
                <div className="skills-content">
                    <SkillsCarousel1 />
                </div>
            </div>
        </div>
    )
}

export default Skills
