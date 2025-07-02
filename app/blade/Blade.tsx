'use client';
import React, { useState } from "react";

import * as motion from "motion/react-client";

const FlexBlade = () => {
    const [bladeClicked, setBladeClicked] = useState("notClicked");
            const handleBladeClick = (isClicked) => {
                if (isClicked === "notClicked")
                    setBladeClicked("clicked");
                else
                    setBladeClicked("notClicked");
                console.log(bladeClicked)
                
            }

    //geometry
    const bladeW = 25; //adjusting this and the stroke size adjusts the stroke size due to autoscaling
    const bladeBoxX = 2; //bladebox is the aspect ratio for the blade and subsequent display boxes
    const bladeBoxY = 14; //going from 12 to 13 breaks the larger boudning box
    const vBoxW = bladeW*bladeBoxX; //viewBox needs to be larger than the svg, so it is the aspect ratio times the svg size
    const vBoxH = bladeW*bladeBoxY;
    const bladeSkew = 1; //adjusts the overall bend of the blade
    const midPointL = 0.5*(vBoxW - bladeW * (bladeSkew))
    const midPointR = 0.5*(vBoxW + bladeW * (bladeSkew))
    //blade color style
    const bladeCol = "fill-gray-400";
    const bladeSCol = "stroke-gray-600";
    const bladeHCol = "hover:fill-gray-600"; //detects hover in parent div and uses child notation to apply style to child svg
    const bladeSSz = "stroke-1";
    //const motionStyle ="transition ease-in-out duration-300 delay-100"
    //const motion = `hover:translate-x-00 ${motionStyle}`;
    const left = `M ${bladeW} 0 Q ${midPointR} ${vBoxH/2} ${bladeW} ${vBoxH} Q 0 ${vBoxH} 0 ${vBoxH} Q ${midPointL} ${vBoxH/2} 0 0 C ${bladeW} 0 0 0 ${bladeW} 0 `;
    const right = `M ${vBoxW} 0 Q ${midPointR} ${vBoxH/2} ${vBoxW} ${vBoxH} Q ${vBoxW - bladeW} ${vBoxH} ${vBoxW - bladeW} ${vBoxH} Q ${midPointL} ${vBoxH/2} ${vBoxW-bladeW} 0 C ${vBoxW-bladeW} 0 0 0 ${bladeW} 0 `;
    const variants = {
        notClicked: {d: left},
        clicked: {d: right},
    };

    return(
        <div className={`pointer-events-none
            h-[100vh] absolute   aspect-${bladeBoxX}/${bladeBoxY}`}>
            <motion.svg
                animate={bladeClicked}
                className={`${bladeCol} ${bladeSCol} ${bladeSSz} `}
                viewBox={`0 0 ${vBoxW} ${vBoxH}`}
                 
                >
                <motion.path
                    variants={variants}
                    className={`${bladeHCol} pointer-events-auto`}
                    fillRule="evenodd" clipRule="evenodd"
                    d={left}
                    onClick={() => handleBladeClick(bladeClicked)}
                    layout //this instructs framer motion to animate between two layouts
                    transition={{
                        type: "tween",
                        visualDuration: 0.3,
                    }}>
                </motion.path>
            </motion.svg>
            <BladeContent blade={"placeholder"} aspect={[vBoxW/bladeW, vBoxH/bladeW]} />
        </div>
    )
}

const BladeContent = ({name}) => {

    return (
      <>
        {/* Vertical Text Container */}
        <div className={`absolute top-1/2 left-4/7 -translate-x-1/2 -translate-y-1/2 transform rotate-90 whitespace-nowrap`}>
            <span className="text-white text-2xl font-bold">{name}</span>
        </div>
      </>
    );
  };

export default FlexBlade;
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
*/