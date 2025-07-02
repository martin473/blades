"use client"
import Card from "./Card";

const Page = () => {
    
    return(
        //boxShadow, border, bgColor, transformOrigin 10% 60%
        <div className="flex h-screen bg-orange-500 w-screen justify-center items-center">
        <Card />
        </div>
    );
};

export default Page;