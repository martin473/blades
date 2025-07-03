"use client"
import Card from "./Card";

const Page = () => {
    
    return(
        //boxShadow, border, bgColor, transformOrigin 10% 60%
        <div className="flex h-screen bg-center bg-cover bg-[url(https://images.pexels.com/photos/29008331/pexels-photo-29008331.jpeg)]  w-screen justify-center items-center">
        <Card />
        </div>
    );
};

export default Page;
