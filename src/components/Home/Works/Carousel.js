import React from 'react';
import './Carousel.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';


const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="1000">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner d-flex align-items-center rounded pb-5">
                <div className="carousel-item active">
                    <img src={carousel1} className="mx-auto d-block w-50" height="350px" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carousel2} className="mx-auto d-block w-50" height="350px" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carousel3} className="mx-auto d-block w-50" height="350px" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Carousel;