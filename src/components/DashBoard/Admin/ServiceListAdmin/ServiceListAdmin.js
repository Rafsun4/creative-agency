/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Client/Sidebar/Sidebar';

const ServiceListAdmin = () => {
    const [loggedInUser] = useContext(UserContext)
    const [services, setServices] = useState([]);
    const [isStatus, setIsStatus] = useState(null);


    useEffect(() => {
        fetch('https://cryptic-savannah-96196.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isStatus]);

    const handleStatus = (id, status) => {
        const formData = new FormData()
        formData.append('status', status);

        fetch(`http://localhost/orderUpdate/${id}`, {
            method: 'PATCH',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result === true) {
                    setIsStatus(Math.floor(Math.random() * 11));
                }
            })
    }

    return (
         <div>
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
                <div className="order-body p-3">
                    <div className="container-fluid card" style={{ borderRadius: '15px' }}>
                        <table className="table table-responsive pt-3">
                            <thead>
                                <tr style={{ backgroundColor: "#F5F6FA", border: 'none'}}>
                                    <th scope="col">Sl.No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Product Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map((service, index) => <tr key={service._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{service.name}</td>
                                        <td>{service.email}</td>
                                        <td>{service.task}</td>
                                        <td>{service.productDetails}</td>
                                        <td>
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item dropdown">
                                                    {
                                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                                        service.status === 'Pending' && <a className="nav-link dropdown-toggle" style={{ color: '#FF4545' }} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            {service.status}
                                                        </a>
                                                    }
                                                    {
                                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                                        service.status === 'On going' && <a className="nav-link dropdown-toggle" style={{ color: '#FFBD3E' }} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            {service.status}
                                                        </a>
                                                    }
                                                    {
                                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                                        service.status === 'Done' && <a className="nav-link dropdown-toggle" style={{ color: '#009444' }} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            {service.status}
                                                        </a>
                                                    }
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <a className="dropdown-item" onClick={() => handleStatus(service._id, 'Pending')} href="#">Pending</a>
                                                        <a className="dropdown-item" onClick={() => handleStatus(service._id, 'On going')} href="#">On going</a>
                                                        <a className="dropdown-item" onClick={() => handleStatus(service._id, 'Done')} href="#">Done</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceListAdmin;