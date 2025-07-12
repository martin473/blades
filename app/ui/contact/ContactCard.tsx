import Image from 'next/image'; 
import React from "react";
import Link from 'next/link'

interface cardProps {
  title: string;
}
const ContactCard: React.FC<cardProps> = ({title}) => {

    return(
        //boxShadow, border, bgColor, transformOrigin 10% 60%
        <div className="flex flex-col">
            <div className="text-2xl py-[0.5rem] text-shadow-xl text-white">{title}</div>
                <div className="w-[30vh] backdrop-blur-md shadow-xl rounded-lg bg-radial-[at_0%_15%] from-white/50 to-zinc-900/30 to-100% justify-center items-center">
                {/*<div className="w-98/100 h-15/100 rounded-t-lg text-gray-800 align-middle text-2xl text-center">Hello</div>*/}
                    <div className="py-[1rem] w-98/100 h-98/100 text-gray-800 overflow-auto rounded-b-lg">
                        <div className="grid grid-cols-3 gap-4 place-items-center">
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
                            <Link href="https://bsky.app/profile/sawyersweet.bsky.social">
                            <Image src="/blogimages/bsky-black.png" 
                                alt="BlueSky" 
                                width={40} 
                                height={40}
                            /></Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};  

export default ContactCard;
