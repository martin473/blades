'use client';
import React, { useState, useEffect, useContext } from "react";
import * as motion from "motion/react-client";
import { ActiveIndex } from "../../page";

//function blade const activeIndex = useContext(ActiveIndex);
interface bladeProps {
  name: string;
  index: number;
  dir: string;
}


const FlexBlade: React.FC<bladeProps> = ({name, index, dir}) => {
    const [bladeClicked, setBladeClicked] = useState("left");
    
    
    //var dir = 'left';
    const aIn = useContext(ActiveIndex);
    //const setDir = () =>{(index <= aIn) ? dir = "left" : dir = "right"; }
    useEffect(() => {
        handleBladeAnim(aIn); console.log("dir" + bladeClicked);
    }, [aIn]);

    const handleBladeAnim = (activeIndex: number) => {
        if (activeIndex < index)
            setBladeClicked("right");
        else
            setBladeClicked("left");
        console.log(bladeClicked, index)
        
    }
    //const dir = () => {(index <= aIn) ? setBladeClicked("left") : setBladeClicked("right") }
    //geometry
    const bladeW = 5; //adjusting this and the stroke size adjusts the stroke size due to autoscaling
    const bladeBoxX = 2; //bladebox is the aspect ratio for the blade and subsequent display boxes
    const bladeBoxY = 14; //going from 12 to 13 breaks the larger boudning box
    const vBoxW = bladeW*2; //viewBox needs to be larger than the svg, so it is the aspect ratio times the svg size
    const vBoxH = bladeW*14;
    //blade color style
    const bladeCol = "fill-gray-400";
    const bladeSCol = "";
    const bladeHCol = "hover:fill-gray-600"; //detects hover in parent div and uses child notation to apply style to child svg
    const bladeSSz = "";
    //const motionStyle ="transition ease-in-out duration-300 delay-100"
    //const motion = `hover:translate-x-00 ${motionStyle}`;
    const left = `M ${bladeW} 0 Q ${vBoxW*1.5} ${vBoxH/2} ${bladeW} ${vBoxH} Q 0 ${vBoxH} 0 ${vBoxH} Q ${vBoxW*1.5 - bladeW} ${vBoxH/2} 0 0`;
    const right = `M ${vBoxW} 0 Q 0 ${vBoxH/2} ${vBoxW} ${vBoxH} Q ${vBoxW - bladeW} ${vBoxH} ${vBoxW - bladeW} ${vBoxH} Q ${-bladeW} ${vBoxH/2} ${vBoxW-bladeW} 0 `;
    const variants = {
        left: {d: left},
        right: {d: right},
    };
    

    return(
        <div className={`pointer-events-none 
            h-[100vh] absolute aspect-${bladeBoxX}/${bladeBoxY}`}>
            <motion.svg
                animate={bladeClicked}
                className={`${bladeCol}  ${bladeSCol} ${bladeSSz} `}
                viewBox={`0 0 ${vBoxW} ${vBoxH}`}
                 
                >
                <motion.path
                    variants={variants}
                    className={`${bladeHCol} pointer-events-auto`}
                    fillRule="evenodd" clipRule="evenodd"
                    d={left}
                    //onClick={() => handleBladeAnim(Number(aIn))} //context passed from main page
                    layout //this instructs framer motion to animate between two layouts
                    transition={{
                        type: "tween",
                        visualDuration: 0.3,
                    }}>
                </motion.path>
            </motion.svg>
            <BladeContent name={name} clickHandler={bladeClicked} />
        </div>
    );
};

const BladeContent = ({name, clickHandler}) => {
    const variants = { //relative not abs transform, vy is also relative dir before rotation
        left: {transform: 'translateY(0vh)'},
        right: {transform: 'translateY(6.8vh)'}

    };
    return (

        <motion.div 
            animate={String(clickHandler)}
            variants={variants}
            className={`flex absolute -translate-y-[52vh] translate-x-[3.8vh] w-full justify-center transform rotate-90 whitespace-nowrap`}>
            <span className="text-gray-300 text-shadow-lg/20 text-center text-[3.5vh]">
            {name}</span>
        </motion.div>
    
    ); //top-[43vh] px-[10.5vh]
  };

export default FlexBlade;