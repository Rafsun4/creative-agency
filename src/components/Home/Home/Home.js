import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonials/Testimonial';
import Work from '../Works/Work';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Work></Work>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;