import Image from 'next/image'; 
import React from "react";
import Link from 'next/link'

interface cardProps {
  title: string;
  url: string;
}
const HelloCard: React.FC<cardProps> = ({title, url}) => {
    const hello = `Obsessed with climate, audio, and useability.

Full stack specialist, connecting customer and business needs with a beautiful final products.`
    return(
        //boxShadow, border, bgColor, transformOrigin 10% 60%
        <div className="flex flex-col">
            <div className="text-2xl py-1.5 text-shadow-xl text-white">{title}</div>
            <div className="grid grid-cols-2 gap-4">
                <Image src="/blogimages/me.png" 
                                alt="Sawyer Sweet Headshot" 
                                width={500} 
                                height={500} 
                                className="rounded-lg w-[40vh]"
                        />
                <div className="w-[30vh] h-auto flex backdrop-blur-md shadow-xl rounded-lg bg-radial-[at_0%_15%] from-white/50 to-zinc-900/30 to-100%">
                {/*<div className="w-98/100 h-15/100 rounded-t-lg text-gray-800 align-middle text-2xl text-center">Hello</div>*/}
                    
                    <div className="w-98/100 h-98/100 text-gray-800 overflow-auto rounded-b-lg">
                        <CardItem content={hello}/>
                        <div className="grid grid-cols-2 gap-4 place-items-center">
                            <Link href="https://www.github.com/martin473">
                            <Image src="/blogimages/github-mark.png" 
                                alt="Github" 
                                width={40} 
                                height={40}
                            /></Link>
                            <Link href="https://www.linkedin.com/in/sawyersweet">
                            <Image src="/blogimages/InBug-Black.png" 
                                alt="LinkedIn" 
                                width={40} 
                                height={40}
                            /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};  


const CardItem = ({content}) => {
    return(
        <div className="py-2 px-2">
        <div className="py-1 inset-shadow-black hover:bg-radial-[at_5%_50%] from-white/40 to-white/5 to-100% transition-discrete duration-200 inset-shadow-sm  inset-shadow-black/10 rounded-sm">
            
            <>
            <div className="text-xl px-5">{content}</div>
            </>
        </div>
        </div>
    )
};
export default HelloCard;
