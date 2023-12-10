import React from "react";

const Hero = () => {
    return(
        <div className="w-full h-[90vh]">
            <img src="https://www.remotelands.com/travelogues/app/uploads/2018/03/four-seasons-bali-renovation-01-1.jpg"alt="/"
            className="w-full h-full object-cover"
            />
        <div className="max-w-[1140px] m-auto">
            <div className="absolute top-[40%] w-full md:[50%] max-w-[600px] h-full flex flex-col text-white p-4">
                <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
                <h2 className="text-4xl py-4 italic">With WeekaWay</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Amet quisquam nam porro distinctio eum quidem voluptatem. 
                    Laborum inventore saepe fugit, adipisci quibusdam placeat enim, 
                    reiciendis dolore eum natus hic alias!
                </p>
            </div>
        </div>
        </div>
    )
};
export default Hero;