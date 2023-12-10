import React from "react";

const Gallery = () => {
    return(
        <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16">
            <h2 className="text-center text-gray-700 p-4">Galery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img 
                    className="w-full h-full object-cover"
                    src="https://images.summitmedia-digital.com/realliving/resize/images/2021/12/16/TINY-RESORT-MAIN.webp" 
                    alt="/"
                    />
                </div>
                <div>
                    <img 
                    className="w-full h-full object-cover"
                    src="https://media.istockphoto.com/id/536048545/photo/tropical-resort.jpg?s=612x612&w=0&k=20&c=TR9a_ToayikLVagrZlq8ebvZFRZx_WH25q9_9m884Jk=" 
                    alt="/"
                    />
                </div>
                <div>
                    <img 
                    className="w-full h-full object-cover"
                    src="https://media.istockphoto.com/id/536048545/photo/tropical-resort.jpg?s=612x612&w=0&k=20&c=TR9a_ToayikLVagrZlq8ebvZFRZx_WH25q9_9m884Jk=" 
                    alt="/"
                    />
                </div>
                <div>
                    <img 
                    className="w-full h-full object-cover"
                    src="https://media.istockphoto.com/id/536048545/photo/tropical-resort.jpg?s=612x612&w=0&k=20&c=TR9a_ToayikLVagrZlq8ebvZFRZx_WH25q9_9m884Jk=" 
                    alt="/"
                    />
                </div>
                <div>
                    <img
                    className="w-full h-full object-cover"
                    src="https://media.istockphoto.com/id/536048545/photo/tropical-resort.jpg?s=612x612&w=0&k=20&c=TR9a_ToayikLVagrZlq8ebvZFRZx_WH25q9_9m884Jk=" 
                    alt="/"
                    />
                </div>
            </div>
        </div>
    )
};
export default Gallery;