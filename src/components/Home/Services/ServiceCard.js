import React from 'react';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const { name, description, img } = props.service;
    return (
        <div className="card mr-4 shadow mt-3 col-md-3" style={{ borderRadius: "10px" }}>
            <div className="d-flex justify-content-center mt-4">
                <img className="card-img-top img-fluid" style={{ width: "20%" }} src={img} alt="" />
            </div>
            <div className="card-body text-center">
                <h5 className="card-title font-weight-bolder">{name}</h5>
                <div className="card-title">{description}</div>
            </div>
        </div>  
    );
};

export default ServiceCard;