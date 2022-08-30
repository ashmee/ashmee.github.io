export type NavigationT = "main" | "skills" | "experience"

type SkillDataT = {
    name: string
    highlight?: boolean
}
export type SkillsDataT = {
    [key: string]: SkillDataT[]
}
export type ExperienceDataT = {
    company: string
    companyLink: string
    position: string
    dateStart: string
    dateEnd: string
    responsibilities: string[]
    technologies: string[]
}
