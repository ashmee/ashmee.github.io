import { ExperienceDataT, SkillsDataT } from "../types"

export const SkillsData: SkillsDataT = {
    Frontend: [
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "ReactJS", highlight: true },
        { name: "CSS" },
        { name: "Redux" },
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
        company: "innotech",
        companyLink: "https://inno.tech/",
        position: "Frontend developer",
        dateStart: "april 2022",
        dateEnd: "current time",
        responsibilities: [
            "Поддержка и доработка продукта (формы, баги, доступность)",
            "Перевод текущего продукта на микросервисное взаимодействие",
            "Перевод функционала продукта с CRM Seibel на архитектуру микрофронтендов",
            "Менторинг джуниор-разработчика",
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
        position: "Frontend developer",
        dateStart: "june 2021",
        dateEnd: "april 2022",
        responsibilities: [
            "Разработка нового продукта «Подписки на авто» для долгосрочной аренды с нуля до продакшена",
            "Работа с A11y (accessebility)",
            "Кроссбраузерная верстка",
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
        company: "LLC Gazprom Neft – Digital Solutions",
        companyLink: "https://www.gazprom-neft.ru/",
        position: "Frontend developer",
        dateStart: "january 2021",
        dateEnd: "june 2021",
        responsibilities: [
            "Разработка интерфейса распределенной системы контроля и прогнозирования разработки новых месторождений, нефтедобычи + формирования отчетности по имеющимся.",
            "Поддержка и доработка системы дашбордов (инфосервис с различными графиками и составлением отчетов)",
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
            "Ant Design Charts",
        ],
    },
    {
        company: "Kontur",
        companyLink: "https://kontur-inc.com/",
        position: "Software Engineer (web)",
        dateStart: "september 2019",
        dateEnd: "december 2020",
        responsibilities: [
            "Разработка интерфейсов систем формирования и отправки электронной отчетности с персональными данными с подписанием электронной подписью",
            "Разработал форму с валидациями и кросс-проверками на React + TS + Redux для заполнения отчетности в ФНС",
            "Перевод проекта на React с Razor (CSharp) + JQuery + knockout.js",
            "Оптимизировал процесс сборки приложения из нескольких репозиториев (время сборки уменьшилось с 30 минут до 5 минут",
        ],
        technologies: [
            "Typescript",
            " ReactJS",
            " Redux",
            " Git",
            " JavaScript",
            " JQuery",
            " Stylus",
            " CSS",
            " Webpack",
            " pnpm",
            " PowerShell",
            " Razor (CSharp)",
        ],
    },
]
