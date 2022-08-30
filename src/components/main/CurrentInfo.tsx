import { MainInfo } from "./MainInfo"
import Skills from "./skills/Skills"
import Experience from "./experience/Experience"
import React from "react"
import { NavigationT } from "../../types"

type Props = {
    nav: NavigationT
}
export const CurrentInfo = React.memo(({ nav }: Props) => {
    switch (nav) {
        case "main":
            return <MainInfo />
        case "skills":
            return <Skills />
        case "experience":
            return <Experience />
        default:
            return <MainInfo />
    }
})

CurrentInfo.displayName = "CurrentInfo"
