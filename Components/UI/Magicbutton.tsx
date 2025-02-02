import React from "react";

/* eslint-disable */

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}:{
    title: string,
    icon?: React.ReactNode, 
    handleClick ?: ()=>void, 
    otherClasses ?: string,
    position?: string  
}) => {
    return ( 
        <div>
            <button onClick={handleClick} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none md:w-60 md:mt-10" >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                <span className="px-1">{title}</span>
                <span className="px-1">{icon}</span>
            </span>
            </button>
        </div>
     );
}
/* eslint-enable */
 
export default MagicButton;