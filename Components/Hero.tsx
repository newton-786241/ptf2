import { Spotlight } from "./UI/Spotlight";
import { TextGenerateEffect } from "./UI/text-generate-effect";
import MagicButton from "./UI/Magicbutton";
import { FaLocationArrow } from "react-icons/fa";
import React from "react";

const Hero = () => {
    return ( 
        <div>
        <div className="pb-20 pt-36 text-white text-center">
            <Spotlight className="h-screen -top-40 -left-10 md:-left-32 md:-tpo-20" fill="white"/>
            <Spotlight className="w-[50vw] h-[80vh] top-10 left-full" fill="purple"/>
            <Spotlight className=" top-28 left-80 w-[50vw] h-[80vh]" fill="blue"/>
        </div>
        <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.03] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative mb-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-blue-100 max-w-80">Dynamic web magic with Next.js</h2>
                <h1>
                    <TextGenerateEffect className="text-center text-[40px] md:text-5xl sm:text-6xl" words="Transforming Concepts into Seamless User Experiences"/>
                </h1>
                <p>Hi, Im Tamseel, A NextJS developer based in India</p>
                <div className="my-10">
                <MagicButton
                    title="Show my Work"
                    icon={<FaLocationArrow/>}
                />
            </div>
            </div>
        </div>
      </div>
     );
}
 
export default Hero;