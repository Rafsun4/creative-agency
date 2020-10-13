import React from 'react';

const Feedback = (props) => {
    const { name, designation, feedback, img } = props.client;

    return (
        <div className="mr-4 mt-4 p-4 col-md-3" style={{ borderRadius: "5px", backgroundColor: "white", border: "1px solid #BFBFBF" }}>
            <div className="row">
                <div className="col-3">
                    <img src={img} alt="" className="img-fluid" />
                </div>
                <div>
                    <h5 className="font-weight-bolder">{name}</h5>
                    <h6 className="font-weight-bold">{designation}</h6>
                </div>
            </div>
            <div className="mt-2">
                <p style={{ color: "#707070" }}>
                    {feedback}
                </p>
            </div>
        </div>
    );
};

export default Feedback;