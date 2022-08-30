import React from "react"
import "../Main.scss"
import "./Skills.scss"
import { SkillsData } from "../../../data"

export const Skills = () => {
    return (
        <>
            {Object.keys(SkillsData).map(key => (
                <React.Fragment key={key}>
                    <div className={"skillTitle"}>{key}</div>
                    <div className={"skillNames"}>
                        {SkillsData[key].map(skill => (
                            <div
                                key={skill.name}
                                className={`skillName ${skill.highlight ? "highlight" : ""}`}
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </>
    )
}

export default Skills
