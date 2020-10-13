import React from 'react';
import client1 from '../../../images/customer-1.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-3.png';
import Feedback from './Feedback';

const clients = [
    {
        name: 'Nash Patrik',
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem inventore eveniet. Ut temporibus ex odio aperiam. Distinctio, id ipsam!',
        designation: 'CEO, Manpol',
        img: client1
    },
    {
        name: 'Miriam Barron',
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem inventore eveniet. Ut temporibus ex odio aperiam. Distinctio, id ipsam!',
        designation: 'CEO, Manpol',
        img: client2
    },
    {
        name: 'Bria Malone',
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem inventore eveniet. Ut temporibus ex odio aperiam. Distinctio, id ipsam!',
        designation: 'CEO, Manpol',
        img: client3
    }
]

const Testimonial = () => {
    let key = 0;
    return (
        <section className="mt-4 mb-4 pt-4 pb-4 mw-75">
            <h2 className="text-center font-weight-bolder pt-4 pb-4">Clients <span style={{ color: "#7AB259" }}>Feedback</span></h2>
            <div className="row d-flex justify-content-center mw-100 pt-4 pb-4">
                {
                    clients.map(client => <Feedback client={client} key={++key} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;