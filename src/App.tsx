import { useState } from "react"
import Main from "./components/main/Main"
import "./App.scss"
import Header from "./components/header/Header"
import { NavigationT } from "./types"

function App() {
    const [currentNav, setCurrentNav] = useState<NavigationT>("main")

    return (
        <div className={"app"}>
            <Header nav={currentNav} changeNav={setCurrentNav} />
            <Main nav={currentNav} />
        </div>
    )
}

export default App
