'use client';
import React, { useState, createContext, useContext } from "react";
import * as motion from "motion/react-client";
import FlexBlade from "../blade/BladeV3";
import { renderToString } from "react-dom/server";

//Blades "flex h-screen w-full bg-black overflow-hidden"
// >> MyBlades/BladeDomContent/ActiveIndex/MotionDiv "w-12 h full" 
// >> FlexBlade "absolute" 

//create active index var as a use context function
//create state handler
//wrap in default context component/value
//set onclick to update context with state handler
//onclick set index and set blade position, should update all blades
export var ActiveIndex = createContext(4) //set to last index



const Blades = () => {
  const [activeIndex, setActiveIndex] = useState(4); //use state of last card in blades (blades is 5 long so default state is 4)
//  const ActiveIndex = useContext(activeIndex); //React automatically re-renders components that read some context if it changes. v19.1. To determine the context value, React searches the component tree and finds the closest context provider above for that particular context.


  // Define the blades
  const blades = [
    { name: "contact", color: "bg-green-600", icon: "🌐", content: ActiveIndex },
    { name: "writing", color: "bg-orange-500", icon: "🎮", content: ActiveIndex },
    { name: "art", color: "bg-blue-600", icon: "🎬", content: ActiveIndex },
    { name: "code", color: "bg-yellow-500", icon: "🛒", content: ActiveIndex },
    { name: "hello", color: "bg-gray-600", icon: "⚙️", content: ActiveIndex },
  ];


  const bladeDir = ({curIndex, activeIndex}) => {
        if (curIndex <= activeIndex)
          return "left"
        if (curIndex > activeIndex)
          return "right"
    }
  // Handle blade selection
  const handleBladeClick = (index) => {
    setActiveIndex(index);    
  };
  const myBlades = bladeDOMContent(blades, handleBladeClick, bladeDir, activeIndex);

  return (
    <div className="flex h-screen w-full bg-black overflow-hidden">
        {/* Content for active blade */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl">{blades[activeIndex].name}</h1>
            {/* Content items for active blade goes here */}
            {blades[activeIndex].content}
          </div>
          
        {/* Blades */}
        </div>
          {myBlades}
        </div>
  );
};

const bladeDOMContent = (blades, clickHandler, dirHandler, activeIndex) => {
  return (blades.map((blade, idx) => 
    {
      var dir = "left";
      console.log(activeIndex)
      return ( //blade
          <motion.div
            className={`w-[7vh] h-full cursor-pointer`} //w-7vh is a responsive width that spaces the blades correctly in response to the window height as well as the dynamic blade size
            key={blade.name}
            style={{
              marginLeft: (idx == (Number(activeIndex) + 1)) ? "auto" : 0,
            }}
            //onClick={ () => {clickHandler(idx); dir = dirHandler(idx, activeIndex)} } //old click handler
            onClick ={() => {
              clickHandler(idx);
              (idx <= Number(activeIndex)) ? dir = 'left' : dir = 'right'}}
            layout //this instructs framer motion to animate between two layouts
            transition={{
              type: "tween",
              visualDuration: 0.5,
            }}
          >
          <ActiveIndex value={activeIndex}>
            <FlexBlade name={blade.name} index={idx} ></FlexBlade>
          </ActiveIndex>
          </motion.div>
      );
    }
  ));
};
export default Blades;
