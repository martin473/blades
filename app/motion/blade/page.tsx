'use client';
import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { useMotionValue, animate } from "motion/react"

const Blades = () => {
    const blades = [
            { name: "", icon: "Hello" }, //text width is deciding width of box, need to override
        ];

        const [bladeClicked, setBladeClicked] = useState([]);
            const handleBladeClick = (isClicked) => {
                blades[0].icon = isClicked;
                console.log("clicked\n")
                setBladeClicked(isClicked);
        }
    //geometry
    const bladeW = 25; //adjusting this and the stroke size adjusts the stroke size due to autoscaling
    const bladeBoxX = 2; //bladebox is the aspect ratio for the blade and subsequent display boxes
    const bladeBoxY = 14; //going from 12 to 13 breaks the larger boudning box
    const vBoxW = bladeW*bladeBoxX; //viewBox needs to be larger than the svg, so it is the aspect ratio times the svg size
    const vBoxH = bladeW*bladeBoxY;
    const bladeSkew = 1.2; //adjusts the overall bend of the blade
    //blade color style
    const bladeCol = "fill-gray-400";
    const bladeSCol = "stroke-gray-600";
    const bladeHCol = "hover:fill-gray-600"; //detects hover in parent div and uses child notation to apply style to child svg
    const bladeSSz = "stroke-1";
    const motionStyle ="transition ease-in-out duration-300 delay-100"
    const motionRaw = `hover:translate-x-2 ${motionStyle}`;
    const count = useMotionValue(0)
    useEffect(() => {
        const controls = animate(count, 100, { duration: 5 })
        return () => controls.stop()
    }, [])
    const variants = {
        initial: {rotate: 0},
        onClick: {rotate: 720},
        bladeL: {d: `M ${bladeW} 0 
        Q ${bladeW*(bladeSkew+1)} ${vBoxH/2} ${bladeW} ${vBoxH} 
        Q 0 ${vBoxH} 0 ${vBoxH} 
        Q ${bladeW*bladeSkew} ${vBoxH/2} 0 0 
        C ${bladeW} 0 0 0 ${bladeW} 0 `},
        bladeR: {d: `M ${vBoxW} 0 
            Q ${bladeW*(-bladeSkew+1.1)} ${vBoxH/2} ${vBoxW} ${vBoxH} 
            Q ${bladeW} ${vBoxH} ${bladeW} ${vBoxH} 
            Q ${bladeW*(-bladeSkew+0.3)} ${vBoxH/2} ${bladeW} 0 
            C ${vBoxW} 0 0 0 ${vBoxW} 0 `},
    }
    return(
        <div className={`pointer-events-none ${motionRaw} 
            h-[100vh] absolute flex aspect-${bladeBoxX}/${bladeBoxY}`}>
            <motion.svg
                
                className={`${bladeCol} ${bladeSCol} ${bladeSSz}`}
                viewBox={`0 0 ${vBoxW} ${vBoxH}`} 
                xlmns="http://www.w3.org/2000/svg">
                <motion.path
                    variants={variants}
                    initial="bladeL"
                    onTap="bladeR"
                    className={`${bladeHCol} ${motionStyle} active:translate-x-5 pointer-events-auto`}
                    fillRule="evenodd" clipRule="evenodd"
                    
                    >
                </motion.path>
            </motion.svg>
            <BladeContent blade={blades[0]} aspect={[vBoxW/bladeW, vBoxH/bladeW]} />
        </div>
    )
}

const BladeContent = ({blade, aspect}) => {
    const aspectX = aspect[0];
    const aspectY = aspect[1];

    return (
      <>
        {/* Vertical Text Container */}
        <div className={`absolute top-1/2 left-4/7 -translate-x-1/2 -translate-y-1/2 transform rotate-90 whitespace-nowrap`}>
            <span className="text-xl mb-0 ml-0">{blade.icon}</span>
            <span className="text-white text-2xl font-bold">{blade.name}</span>
        </div>
      </>
    );
  };

export default Blades;
//transform-origin-tl transform translate-[100%] display-inline-block padding-right-[0.25r] margin-right-[-999px] width-auto min-width-[1.2r] float-left height-[100%]
//viewbox is weird. It lets you scale the svg rather than have it at a uniform size
//its got some weird behaviors 
// 1) the aspect ratio auto scales up if you are LARGER than the svg
// 2) the aspect ratio crops instead if you are SMALLER than the svg
// 3) it responds to the XY size of your browser window
// so if you have a square, but you are viewing in a rectangle, viewbox will autoscale the x-val to match the width of your screen, and you will see a scaled up version of the svg with a scrollbar and the bottom cut off

// https://webkit.org/blog/16794/the-css-shape-function/
// https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/viewBox
/*                  d={`M ${bladeW} 0 
                        Q ${bladeW*(bladeSkew+1)} ${vBoxH/2} ${bladeW} ${vBoxH} 
                        Q 0 ${vBoxH} 0 ${vBoxH} 
                        Q ${bladeW*bladeSkew} ${vBoxH/2} 0 0 
                        C ${bladeW} 0 0 0 ${bladeW} 0 `}

                    d={`M ${bladeW} 0 
                        Q ${bladeW*(bladeSkew+1)} ${vBoxH/2} ${bladeW} ${vBoxH} 
                        Q 0 ${vBoxH} 0 ${vBoxH} 
                        Q ${bladeW*bladeSkew} ${vBoxH/2} 0 0 
                        C ${bladeW} 0 0 0 ${bladeW} 0 `}

                    {`M ${vBoxW} 0 
                        Q ${bladeW*(-bladeSkew+1.1)} ${vBoxH/2} ${vBoxW} ${vBoxH} 
                        Q ${bladeW} ${vBoxH} ${bladeW} ${vBoxH} 
                        Q ${bladeW*(-bladeSkew+0.3)} ${vBoxH/2} ${bladeW} 0 
                        C ${vBoxW} 0 0 0 ${vBoxW} 0 `}
*/