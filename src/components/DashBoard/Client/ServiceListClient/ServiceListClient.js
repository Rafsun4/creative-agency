import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServiceListClient = () => {
    const [loggedInUser] = useContext(UserContext)
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://cryptic-savannah-96196.herokuapp.com/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [loggedInUser]);

    return (
        <div className="d=flex">
            <div className="bg-none sidenav">
                <Sidebar></Sidebar>
            </div>
            <div className="main">
                <div className="col-md-12 mt-4 mb-4 d-flex justify-content-between font-weight-bolder">
                    <h3>Service List</h3>
                    <div className="row mr-3">
                        <img src={loggedInUser.photo} style={{ borderRadius: '50%', width: '40px', padding: "2px" }} alt="" />
                        <h5 className="pt-2">{loggedInUser.name}</h5>
                    </div>
                </div>
                
                    {
                        // eslint-disable-next-line eqeqeq
                        services == 0 && <div className="col-md-12 order-body p-3 font-weight-bolder">
                        <h4>Loading...</h4>
                        </div>
                    }
                    <div className="col-md-12 order-body p-3">
                    <div className="row">
                    {
                        services.map(service => 
                            <div key={service._id} className="col-md-5 card m-4" style={{ borderRadius: '15px' }}>
                                <div className="row p-4">
                                    <div>
                                        <img src={`data:${service.image.contentType};base64,${service.image.img}`} style={{ width: "60px" }} alt="" />
                                    </div>
                                    <div className="ml-auto">
                                    {
                                        service.status === 'Pending' && 
                                        <button 
                                            className="btn" 
                                            style={{ color: '#FF4545', backgroundColor: '#FFE3E3' }}>
                                            {service.status}
                                        </button>
                                    }
                                    {
                                        service.status === 'On going' && 
                                        <button 
                                            className="btn" 
                                            style={{ color: '#009444', backgroundColor: '#C6FFE0' }}>
                                            {service.status}
                                        </button>
                                    }
                                    {
                                        service.status === 'Done' && 
                                            <button 
                                                className="btn" 
                                                style={{ color: '#009444', backgroundColor: '#C6FFE0' }}>
                                                {service.status}
                                            </button>
                                    }
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h3>{service.task}</h3>
                                    <p>{service.productDetails}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                </div>    
            </div>    
        </div>
    );
};

export default ServiceListClient;