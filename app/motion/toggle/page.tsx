"use client"

import * as motion from "motion/react-client"
import { useState } from "react"

export default function LayoutAnimation() {
    const [isOn, setIsOn] = useState(false)
    const [isOn2, setIsOn2] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)
    const toggleSwitch2 = () => setIsOn2(!isOn2)

    return (
        <div className="flex h-screen w-screen justify-center items-center">
        <button
            className="toggle-container"
            style={container}
            
        >
            <motion.div
                className="toggle-handle"
                style={{
                    ...handle,
                    marginLeft: isOn ? 0 : "auto",
                }}
                onClick={toggleSwitch}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
            <motion.div
                className="toggle-handle"
                style={{
                    ...handle,
                    marginLeft: isOn2 ? 0 : "auto",
                }}
                onClick={toggleSwitch2}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const container = {
    width: 1000,
    height: 50,
    backgroundColor: "red",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 5,
}

const handle = {
    width: 40,
    height: 40,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
    
}
