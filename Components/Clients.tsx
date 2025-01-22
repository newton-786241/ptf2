import { companies, testimonials } from "../data";
import InfiniteMovingCards from "./UI/Infinite-moving-cards";

const Clients = () => {
    return ( 
        <div className="py-20 px-20" id="testimonials">
            <h1 className="heading sm:mx-10">
                Kind words from 
                <span className="text-purple"> satisfied clients</span>
            </h1>
            <div className="flex flex-col items-center my-16">
                <InfiniteMovingCards 
                    items={testimonials}
                    direction="right"
                    speed="slow"
                    pauseOnHover
                />
            </div>
            <div className="flex flex-wrap gap-16 justify-evenly">
                {companies.map((copmany)=>(
                    <div className="flex gap-4 mt-6">
                    <img src={copmany.img} alt={copmany.name}/>
                    <img src={copmany.nameImg} alt={copmany.name} />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Clients;