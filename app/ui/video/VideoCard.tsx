import React from "react";

interface cardProps {
  title: string;
  url: string;
}
const VideoCard: React.FC<cardProps> = ({title, url}) => {
    return(
        //boxShadow, border, bgColor, transformOrigin 10% 60%
        <div className="flex flex-col">
        <div className="text-2xl py-1.5 text-shadow-xl text-white">{title}</div>
        <div className="w-[80vh] h-[45.9vh] backdrop-blur-md shadow-xl rounded-lg bg-radial-[at_0%_15%] from-white/50 to-zinc-900/30 to-100% justify-center items-center flex flex-col  ">
            {/*<div className="w-98/100 h-15/100 rounded-t-lg text-gray-800 align-middle text-2xl text-center">Hello</div>*/}
            <div className="w-98/100 h-98/100 text-gray-800 overflow-auto rounded-b-lg">
                <iframe className="w-full h-full" src={url} width="full" allowFullScreen />
            </div>
        </div>
        </div>
    );
};


export default VideoCard;
