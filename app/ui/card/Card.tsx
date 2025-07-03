import React from "react";

interface cardProps {
  title: string;
}
const Card: React.FC<cardProps> = ({title}) => {
    const loremIpsum = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. 
        
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`;
    return(
        //boxShadow, border, bgColor, transformOrigin 10% 60%
        <div className="flex flex-col">
        <div className="text-2xl py-1.5 text-shadow-xl text-white">{title}</div>
        <div className="w-[80vh] h-[50vh] backdrop-blur-xs shadow-xl rounded-lg bg-radial-[at_0%_15%] from-white/50 to-zinc-900/30 to-100% justify-center items-center flex flex-col  ">
            {/*<div className="w-98/100 h-15/100 rounded-t-lg text-gray-800 align-middle text-2xl text-center">Hello</div>*/}
            <div className="w-98/100 h-98/100 text-gray-800 overflow-auto rounded-b-lg">
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty" content={loremIpsum}/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
                <CardItem text="Lorem Ipsum Solo Dolores Alaretty"/>
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
export default Card;
