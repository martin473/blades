'use client';
import React, { useState } from "react";
import * as motion from "motion/react-client"

//Blades is a function with no input
//CONSTS
//index, setindex being set by useState(0)
//blades are a list of dicts
//blade click handler takes clicked index and sets it to the active index
//sets isLast and isFirst to end and beginning of index

//Xbox Live is first, System is last
//!!!ERROR > First and last anchor everything left or right, should instead be the ONLY thing
//anchored when selected
//!!!ERROR > Allignment is off when a middle item is selected

//RETURN
//Header, xbox360 > Gamer
//Footer, nav controls, time
//Content for each blade
//First blade
//Last blade
//Middle blade
const Blades = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Define the blades
  const blades = [
    { name: "Xbox Live", color: "bg-green-600", icon: "🌐" },
    { name: "Games", color: "bg-orange-500", icon: "🎮" },
    { name: "Media", color: "bg-blue-600", icon: "🎬" },
    { name: "Marketplace", color: "bg-yellow-500", icon: "🛒" },
    { name: "System", color: "bg-gray-600", icon: "⚙️" },
  ];

  // Handle blade selection
  const handleBladeClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative flex h-screen w-full bg-black overflow-hidden">
      {/* Main Content Area */}
        {/* Content for active blade */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="text-center">
            <h1 className="text-white text-4xl">{blades[activeIndex].name}</h1>
            {/* Content items for active blade goes here */}
          </div>
        </div>
        {/* All blades behavior */}
        {(
          <>
            {/* Items to the left of active and active */}
              {/* list of left blades */}
              {blades.map((blade, idx) => {
                return ( //blade
                
                  <motion.div
                    onClick={ () => handleBladeClick(idx) }
                    key={blade.name} 
                    
                    className={`w-12 h-full static content-center justify-self-start z-1
                      transition-all duration-500 ease-in-out cursor-pointer `} 
                    style={{
                      marginLeft: (idx == (activeIndex + 1)) ? "auto" : 0,
                      borderRight: (idx <= activeIndex) ? "1px solid" : "",
                      borderLeft: (idx > activeIndex) ? "1px solid" : "",
                    }}
                    transition={{
                      type: "spring",
                      visualDuration: 1,
                      bounce: 1,
                    }}
                  >
                  <BladeContent blade={blade} isActive={idx=== activeIndex} position="left" />
                  </motion.div>
                
                );
              })}
          </>
        )}
        </div>
  );
};

// Extracted blade content component for reuse
const BladeContent = ({ blade, isActive, position }) => {

  return (
    <>
      {/* Vertical Text Container */}
      <div className="flex flex-col items-center">
        <div className="-rotate-90 whitespace-nowrap">
          <span className="text-white text-l font-bold uppercase">{blade.name}</span>
        </div>
      </div>
    </>
  );
};

// Extracted blade content component for reuse
const Blade = ({ index, blade }) => {

  return (
    <div onClick={() => handleBladeClick(index)}
      key={blade.name} 
      className={`border-l w-12 h-full float-right static content-center justify-self-end z-1
        transition-all duration-500 ease-in-out cursor-pointer`} >
      <BladeContent blade={blade} isActive={false} position="right"/>
    </div>
  );
};

export default Blades;
