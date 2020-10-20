import React, { useEffect, useState } from 'react';
import Clients from './Clients';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-savannah-96196.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    
    return (
        <section>
            <Clients></Clients>
            <div className="mt-5 mb-4 pt-5 pb-4">
                <h2 className="text-center font-weight-bolder pt-4 pb-4">Provide awesome <span style={{ color: "#7AB259" }}>services</span></h2>
                <div className="row d-flex justify-content-center mw-100 pt-4 pb-4 ml-2">
                        {
                            service.map(service => <ServiceCard service={service} key={service._id} />)
                        }
                </div>
            </div>
        </section>
    );
};

export default Services;