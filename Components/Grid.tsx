import { BentoGrid, BentoGridItem } from "./UI/Bentogrid";
import { gridItems } from "@/data";
import React from "react";

const Grid = () => {
    return ( 
        <section id="about" className='z-10 w-full pb-5'>
        <BentoGrid>
            {gridItems.map((item)=>(
                <BentoGridItem
                    key = {item.id}
                    title = {item.title}
                    description={item.description}
                    className={item.className}
                    img={item.img}
                    imgClassName={item.imgClassName}
                    id={item.id}
                    spareImg={item.spareImg}
                    titleClassname={item.titleClassName}
                />
            ))}
        </BentoGrid>
    </section>
     );
}
 
export default Grid;