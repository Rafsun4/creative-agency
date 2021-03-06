import React, { useEffect, useState } from 'react';
import Feedback from './Feedback';
import MyLoader from '../../MyLoader';

const Testimonial = () => {
    const [feedBack, setFeedBack] = useState([]);
    const [loading, setLoading] =useState(true)   

    useEffect(() => {
        fetch('https://cryptic-savannah-96196.herokuapp.com/allReview')
            .then(res => res.json())
            .then((data) => {
                setFeedBack(data);
                setLoading(false);
              });
    }, [])


    return (
        <section className="mt-4 mb-4 pt-4 pb-4 mw-75">
            <h2 className="text-center font-weight-bolder pt-4 pb-4">Clients <span style={{ color: "#7AB259" }}>Feedback</span></h2>
            <div className="row d-flex justify-content-center mw-100 pt-4 pb-4">
                {
                    loading ? (<MyLoader />):
                    feedBack.map(client => <Feedback client={client} key={client._id} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;