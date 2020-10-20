import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const { name, description } = props.service;
    return (
        <div className="task-card mr-4 shadow mt-3 pb-3 col-md-3" style={{ borderRadius: "10px" }}>
            <Link to={`/sidebar`} style={{ textDecoration: 'none', color: "black" }}>
                <div className="d-flex justify-content-center mt-4">
                <img className="card-img-top img-fluid" style={{ width: "20%" }} src={`data:image/png;base64,${props.service.image.img}`} alt="..." />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title font-weight-bolder">{name}</h5>
                    <div className="card-title">{description}</div>
                </div>
            </Link>
        </div>  
    );
};

export default ServiceCard;