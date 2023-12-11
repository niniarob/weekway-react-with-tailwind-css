import React from "react";

const Activities = () => {
    return(
        <div className="max-w-[1140px] m-auto m-auto md:flex mt-[-75px]">
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold">Resorts</h3>
                <img 
                className="w-full h-full object-cover relative border-4 border-white shadow-lg"
                src="https://todaysparent.mblycdn.com/tp/resized/2023/06/767x431/beaches-negril-resort.jpeg" 
                alt="/"
                />
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold">Resorts</h3>
                <img 
                className="w-full h-full object-cover relative border-4 border-white shadow-lg"
                src="https://imageio.forbes.com/specials-images/imageserve/650bce6056e139baa562da78/ayanaresortandspa/0x0.jpg?crop=2041,1360,x1,y0,safe&height=473&width=711&fit=bounds" 
                alt="/"
                />
            </div>
        </div>
    )
};
export default Activities;