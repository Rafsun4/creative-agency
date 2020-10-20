import React from 'react';
import frame from '../../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <section>
            <div className="container row d-flex mt-5 align-items-center offset-md-1">
                <div className="col-md-5 col-sm-6 col-12 header-text">
                    <h1 className="font-weight-bolder">Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                    <small className="text-dark mt-4 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Dolore eveniet necessitatibus et iusto corrupti minima.<br />Lorem ipsum dolor sit amet.<br /></small>
                    <br />
                    <button className="btn btn-dark text-white">Hire Us</button>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                    <img src={frame} className="img-fluid" height="150px" alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;