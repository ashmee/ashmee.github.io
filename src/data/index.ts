import { ExperienceDataT, SkillsDataT } from "../types"

export const SkillsData: SkillsDataT = {
    Frontend: [
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "ReactJS", highlight: true },
        { name: "RxJS" },
        { name: "Redux" },
        { name: "CSS" },
        { name: "styled-components" },
        { name: "GraphQL" },
        { name: "Apollo" },
        { name: "MobX" },
        { name: "Stylus" },
        { name: "SCSS" },
        { name: "Webpack", highlight: true },
        { name: "Parcel" },
        { name: "Gulp" },
    ],
    "Backend and Database": [
        { name: "Node.js", highlight: true },
        { name: "Express.js" },
        { name: "Sequelize" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
    ],
    "Dev tools": [
        { name: "WebStorm", highlight: true },
        { name: "Visual Studio Code" },
        { name: "Git" },
        { name: "PowerShell" },
        { name: "Postman" },
    ],
}

export const ExperienceData: ExperienceDataT[] = [
    {
        company: "Tochka",
        companyLink: "https://tochka.com/",
        position: "Frontend developer",
        dateStart: "december 2022",
        dateEnd: "current time",
        responsibilities: [
            "Development of interfaces for bank compliance functionality",
            "Setting up A/B tests to test the best solutions for the problems we found in the research",
            "End-to-end tests",
        ],
        technologies: [
            "TypeScript",
            "React",
            "RxJS",
            "JavaScript",
            "emotion",
            "sentry",
            "Playwright",
            "Figma",
            "TeamCity",
            "BitBucket",
            "Git",
        ],
    },
    {
        company: "INNOTECH",
        companyLink: "https://inno.tech/",
        position: "Frontend developer",
        dateStart: "april 2022",
        dateEnd: "december 2022",
        responsibilities: [
            "Product support and enhancement (forms, bugs, accessibility)",
            "Transfer of the current product to microservice interaction",
            "Migration of product functionality from Seibel CRM to microfrontend architecture",
            "Mentoring for a junior developer",
        ],
        technologies: [
            "TypeScript",
            "React",
            "Redux",
            "JavaScript",
            "styled-components",
            "React Query",
            "Figma",
            "TeamCity",
            "BitBucket",
            "Git",
        ],
    },
    {
        company: "EPAM Systems Inc.",
        companyLink: "https://www.epam.com/",
        position: "Frontend developer",
        dateStart: "june 2021",
        dateEnd: "april 2022",
        responsibilities: [
            "Developing a new product “Autosubscription” for long-term rentals from scratch to production",
            "Working with A11y (accessibility)",
            "Cross-browser layout",
        ],
        technologies: [
            "React",
            "TypeScript",
            "Redux",
            "JavaScript",
            "CSS-in-JS",
            "Figma Design",
            "TeamCity",
            "Git",
        ],
    },
    {
        company: "LLC Gazprom Neft – Digital Solutions",
        companyLink: "https://www.gazprom-neft.ru/",
        position: "Frontend developer",
        dateStart: "january 2021",
        dateEnd: "june 2021",
        responsibilities: [
            "Development of an interface for a distributed system for monitoring and forecasting the development of new fields, oil production + reporting on existing ones.",
            "Support and refinement of dashboard system (information service with various graphs and reports)",
        ],
        technologies: [
            "TypeScript",
            "ReactJS",
            "Git",
            "JavaScript",
            "GraphQL",
            "CSS",
            "Webpack",
            "Apollo",
            "Docker",
            "G2 Plot",
            "Ant Design Charts",
        ],
    },
    {
        company: "Kontur",
        companyLink: "https://kontur-inc.com/",
        position: "Software Engineer (web)",
        dateStart: "september 2019",
        dateEnd: "december 2020",
        responsibilities: [
            "Development of interfaces for systems to generate and send electronic reporting with personal data with electronic signature",
            "Developed a form with validations and cross-checks in React + TS + Redux for filling reporting to the Federal Tax Service",
            "Transferred the project to React with Razor (CSharp) + JQuery + knockout.js",
            "Optimized the process of building an application from multiple repositories (build time was reduced from 30 minutes to 5 minutes)",
        ],
        technologies: [
            "Typescript",
            "ReactJS",
            "Redux",
            "Git",
            "JavaScript",
            "JQuery",
            "Stylus",
            "CSS",
            "Webpack",
            "pnpm",
            "PowerShell",
            "Razor (C#)",
        ],
    },
]
