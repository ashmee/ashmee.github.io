import React from "react"
import { animated, useTrail } from "react-spring"
import { Spring } from "react-spring/renderprops-universal"
import "./Main.scss"

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x: any, y: any) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const Main: React.FC = () => {
    const [trail, setTrail] = useTrail(3, () => ({
        xy: [0, 0],
        // @ts-ignore
        config: i => (i === 0 ? fast : slow),
    }))

    return (
        <main className={"main"}>
            <Spring delay={3} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {props => (
                    <>
                        <div style={props}>👋 Hey there!</div>
                        <div>I'm Eugene, frontend developer from Russia</div>
                        <div>Site will be launched soon! Stay tuned!</div>
                    </>
                )}
            </Spring>
            <div className={"circle"}>
                <svg style={{ position: "absolute", width: 0, height: 0 }}>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                        <feColorMatrix
                            in="blur"
                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
                        />
                    </filter>
                </svg>
                {/*@ts-ignore*/}
                <div
                    className="hooks-main"
                    // @ts-ignore
                    onMouseMove={e => setTrail({ xy: [e.clientX, e.clientY] })}
                >
                    {trail.map((props: any, index) => (
                        <animated.div
                            key={index}
                            style={{ transform: props?.xy?.interpolate(trans) }}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Main
