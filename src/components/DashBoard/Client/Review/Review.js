import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser] = useContext(UserContext)
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const { name, companyname, description, } = data;
        const formData = new FormData()
        formData.append('image', loggedInUser.photo);
        formData.append('name', name);
        formData.append('companyname', companyname);
        formData.append('description', description);

        fetch('https://cryptic-savannah-96196.herokuapp.comnah-96196.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.replace('/')
            })
            .catch(error => {
                console.error(error)
            })
    };
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
                <div className="col-md-12 order-body p-3">
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
                                            placeholder="Your name" />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="companyname" 
                                            ref={register({ required: true })} 
                                            className="form-control" 
                                            placeholder="Designation, Company Name" />
                                        {errors.companyname && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            className="form-control" 
                                            name="description" 
                                            ref={register({ required: true })} 
                                            rows="5" 
                                            placeholder="Description">
                                        </textarea>
                                        {errors.description && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="mt-4">
                                        <input 
                                            type="submit" 
                                            value="Submit" 
                                            className="btn btn-dark text-white px-3" />
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

export default Review;