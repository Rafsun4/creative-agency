import React from 'react';
import Clients from './Clients';
import webDesign from '../../../images/icons/service1.png';
import graphicsDesign from '../../../images/icons/service2.png';
import webDevelopment from '../../../images/icons/service3.png';
import ServiceCard from './ServiceCard';

const serviceCard = [
    {
        name: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: webDesign
    },
    {
        name: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: graphicsDesign
    },
    {
        name: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: webDevelopment
    }
];

const Services = () => {
    let key = 0;
    return (
        <section className="">
            <Clients></Clients>
            <div className="mt-5 mb-4 pt-5 pb-4">
                <h2 className="text-center font-weight-bolder pt-4 pb-4">Provide awesome <span style={{ color: "#7AB259" }}>services</span></h2>
                <div className="row d-flex justify-content-center mw-100 pt-4 pb-4 ml-2">
                    {
                        serviceCard.map(service => <ServiceCard service={service} key={++key} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;