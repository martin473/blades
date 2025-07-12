import React from "react";
import Oops from "@/app/content/blog/oops/page";

interface cardProps {
  title: string;
}
const BlogCard: React.FC<cardProps> = ({title}) => {

const post3 = <Oops/>;
    return(
        //boxShadow, border, bgColor, transformOrigin 10% 60%
        <div className="flex flex-col">
        <div className="text-[3vh] py-1.5 text-shadow-xl text-white">{title}</div>
        <div className="w-[80vh] h-[50vh] backdrop-blur-md shadow-xl rounded-lg bg-radial-[at_0%_15%] from-white/50 to-zinc-900/30 to-100% justify-center items-center flex flex-col  ">
            {/*<div className="w-98/100 h-15/100 rounded-t-lg text-gray-800 align-middle text-2xl text-center">Hello</div>*/}
            <div className="w-98/100 h-98/100 text-gray-800 overflow-auto rounded-b-lg">
                <CardItem text="Oops! I'm 5 Paradigms Deep!" content={post3}/>
            </div>
        </div>
        </div>
    );
};

const CardItem = ({text, content}) => {
    return(
        <div className="py-2">
        <div className="py-1 inset-shadow-black hover:bg-radial-[at_5%_50%] from-white/40 to-white/5 to-100% transition-discrete duration-200 inset-shadow-sm  inset-shadow-black/10 rounded-sm">
            
            <>
            <label className="peer flex">
                <input type="checkbox" className="hidden" /> <div className="py-4 px-5">{text}</div>
            </label>
            <div className="hidden px-5 transition-all duration-500 not-peer-has-checked:opacity-0 peer-has-checked:block">{content}</div>
            </>
        </div>
        </div>
    )
};
export default BlogCard;
