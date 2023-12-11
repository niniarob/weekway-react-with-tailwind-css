import React from "react";
import ReactPlayer from 'react-player';


const Hero = ({ videoUrl }) => {
    return(
        <div className="w-full h-[90vh] ">
            <ReactPlayer
              url={videoUrl}
              controls={false}
              loop={true}
              playing={true}
              muted
              playsinline
              width="100%"
              height="auto"
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