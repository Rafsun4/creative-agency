import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../Sidebar/Sidebar.css';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';


const TakeOrder = () => {
    const history = useHistory();
    const [loggedInUser] = useContext(UserContext)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const { name, email, task, file, productDetails, price } = data;
        const status = "Pending";
        const formData = new FormData()
        formData.append('file', file[0]);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('task', task);
        formData.append('productDetails', productDetails);
        formData.append('price', price);
        formData.append('status', status);

        fetch('https://cryptic-savannah-96196.herokuapp.com/placeOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.replace('/client/services');
            })
            .catch(error => {
                console.error(error)
            })
    };


    return (
        <div className="d=flex">
            <div className="bg-none sidenav">
                <Sidebar></Sidebar>
            </div>
            <div className="main">
                <div className="col-md-12 mt-4 mb-4 d-flex justify-content-between font-weight-bolder">
                    <h3>Order</h3>
                    <div className="row mr-3">
                        <img src={loggedInUser.photo} style={{ borderRadius: '50%', width: '50px', padding: "2px"}} alt="" />
                        <h5 className="pt-2">{loggedInUser.name}</h5>
                    </div>
                </div>
                <div className="form-body order-body pl-4 pt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="" style={{ borderRadius: '15px' }}>
                            <div className="row px-4 py-5">
                                <div className="col-md-6 col-sm-12 col-11">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            ref={register({ required: true })} 
                                            className="form-control" 
                                            placeholder="Your name/Company name" />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            ref={register({ required: true })} 
                                            className="form-control" 
                                            placeholder="Your email address" />
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="task" 
                                            ref={register({ required: true })} 
                                            className="form-control" 
                                            placeholder="Graphic Design" />
                                        {errors.task && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            className="form-control" 
                                            name="productDetails" 
                                            ref={register({ required: true })} 
                                            rows="5" 
                                            placeholder="Product Details" />
                                        {errors.productDetails && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input 
                                                type="number" 
                                                name="price" 
                                                ref={register({ required: true })} 
                                                className="form-control" 
                                                placeholder="Price" />
                                            {errors.price && <span className="text-danger">This field is required</span>}
                                        </div>
                                        <div className="col-md-6 custom-file">
                                            <div className="col-md-12">
                                                <input 
                                                    type="file"
                                                    className="custom-file-input" 
                                                    name="file" ref={register({ required: true })} />
                                                <label 
                                                    className="custom-file-label" 
                                                    style={{ backgroundColor: '#DEFFED', color: '#009444' }} 
                                                    htmlFor="validatedCustomFile"> 
                                                <FontAwesomeIcon icon={faCloudUploadAlt} />Upload image</label>
                                                {errors.file && <span className="text-danger">This field is required</span>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <input type="submit" value="Submit" className="btn btn-dark text-white px-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TakeOrder;
