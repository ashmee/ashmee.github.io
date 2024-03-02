import { Fragment } from "react"
import "../Main.scss"
import "./Skills.scss"
import { SkillsData } from "../../../data"

export const Skills = () => {
    return (
        <div className={"skillsWrapper"}>
            {Object.keys(SkillsData).map(key => (
                <Fragment key={key}>
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
                </Fragment>
            ))}
        </div>
    )
}

export default Skills
