import React from 'react';
import Carousel from './Carousel';

const Work = () => {
    return (
        <div className="mt-4 mb-4 pt-4 pb-4" style={{ backgroundColor: "#111430", height: "600px" }}>
            <h2 className="text-center text-white font-weight-bolder pt-4 pb-4">Here are some of <span style={{ color: "#7AB259" }}>our works</span></h2>
            <Carousel />
        </div>
    );
};

export default Work;