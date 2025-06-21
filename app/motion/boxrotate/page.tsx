import * as motion from "motion/react-client"
const variants = {
    load: {rotate: 360, left: 0},
    hover: {left: 100},
    tap: {rotate: 720},
    keyframes: {rotate: [null, 400, 720, 800, 720, 360]},
    transition: {
        duration: 2,
        times: [0, 0.2, 0.5, 0.8, 1, 1.2],
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
    },
}

export default function Rotate() {
    return (
        <div className="flex h-screen w-screen justify-center items-center">
        <motion.div
            animate="keyframes"
            transition="transition"
            variants = {variants}
            className="blur-xs"
            style={box}
            //animate="load"
            whileHover="hover"
            whileTap="tap"
            //transition={{ duration: 1 }}
        /></div>
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}
