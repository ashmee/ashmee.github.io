import { animated, useTrail } from "@react-spring/web"
import useMeasure from "react-use-measure"

import "./Main.scss"
import { NavigationT } from "../../types"
import { CurrentInfo } from "./CurrentInfo"

type MainProps = {
    nav: NavigationT
}

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 190, friction: 50 }
const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export const Main = ({ nav }: MainProps) => {
    const [trail, api] = useTrail(3, i => ({
        xy: [0, 0],
        config: i === 0 ? fast : slow,
    }))
    const [ref, { left, top }] = useMeasure()
    const isSafari =
        /constructor/i.test(window?.HTMLElement as unknown as string) ||
        (!!navigator.userAgent.match(/safari/i) &&
            !navigator.userAgent.match(/chrome/i) &&
            typeof document.body.style.webkitFilter !== "undefined")
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
        api.start({ xy: [e.clientX - left, e.clientY - top] })
    }

    return (
        <main className={`main ${nav === "experience" || isSafari ? "hide" : ""}`}>
            <svg style={{ position: "absolute", width: 0, height: 0 }}>
                <filter id="allowemptyinput">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="35" />
                    <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                </filter>
            </svg>
            <div ref={ref} className={"hooks-main"} onMouseMove={handleMouseMove}>
                {trail.map(({ xy }, index) => (
                    <animated.div key={index} style={{ transform: xy.to(trans) }} />
                ))}
            </div>
            <div className="greet" onMouseMove={handleMouseMove}>
                <CurrentInfo nav={nav} />
            </div>
        </main>
    )
}

export default Main
