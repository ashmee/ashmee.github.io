import React from "react"
import "../Main.scss"
import "./Experience.scss"
import { ExperienceData } from "../../../data"

export const Experience = () => {
    return (
        <div className={"experiencesWrapper"}>
            {ExperienceData.map(item => (
                <div key={item.company} className={"experienceWrapper"}>
                    <div className={"experienceDate"}>
                        <div>{item.dateEnd}</div>
                        <div className={"dash"}>{"—"}</div>
                        <div>{item.dateStart}</div>
                    </div>
                    <div className={"experienceInfo"}>
                        <div className={"companyInfo"}>
                            <div className={"company"}>{item.company}</div>
                            <a
                                href={item.companyLink}
                                target={"_blank"}
                                className={"link"}
                                title={`go to ${item.company} site`}
                                rel="noreferrer"
                            >
                                <svg
                                    className={"linkicon"}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    width={16}
                                    height={16}
                                >
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                </svg>
                                {item.companyLink}
                            </a>
                            <div className={"position"}>{item.position}</div>
                        </div>
                        <ul>
                            {item.responsibilities.map(goals => (
                                <li key={goals}>{goals}</li>
                            ))}
                        </ul>
                        <div>
                            {item.technologies.map(technology => (
                                <span key={technology} className={"technology"}>
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience
