import React from "react";

const Card = () => {
    
    return(
        //boxShadow, border, bgColor, transformOrigin 10% 60%
        <div className="flex flex-col">
        <div>Top Level Title</div>
        <div className="w-[80vh] h-[50vh] shadow-xl rounded-lg bg-white/10 justify-center items-center flex flex-col  ">
            {/*<div className="w-98/100 h-15/100 rounded-t-lg text-gray-800 align-middle text-2xl text-center">Hello</div>*/}
            <div className="w-98/100 h-98/100 text-gray-800 overflow-auto rounded-b-lg">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </div>
        </div>
    );
};

const CardItem = (text) => {
    return(
        <div className="py-1">
        <div className="py-1 inset-shadow-black inset-shadow-sm inset-shadow-black/30 rounded-sm">
            <div className="py-3.5 px-5">text</div>
        </div>
        </div>
    )
};
export default Card;