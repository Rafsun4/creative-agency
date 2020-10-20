import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Sidebar from '../../Client/Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser] = useContext(UserContext)
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const { name, description, file } = data;
        const formData = new FormData()
        formData.append('file', file[0]);
        formData.append('name', name);
        formData.append('description', description);

        fetch('https://cryptic-savannah-96196.herokuapp.com/addService', {
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
                    <h3>Add An Admin</h3>
                    <div className="row mr-3">
                        <img src={loggedInUser.photo} style={{ borderRadius: '50%', width: '50px', padding: "2px" }} alt="" />
                        <h5 className="pt-2">{loggedInUser.name}</h5>
                    </div>
                </div>
                <div className="order-body pt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card pl-5 ml-5" style={{ borderRadius: '15px', width: "950px" }}>
                            <div className="row px-4 py-5">
                                <div className="col-md-6 col-sm-12 col-11 pr-5">
                                    <div className="form-group">
                                        <label htmlFor="name">Service Title</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            ref={register({ required: true })} 
                                            className="form-control" placeholder="Service Title" />
                                        {errors.serviceTitle && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Service Title">Description</label>
                                        <textarea 
                                            className="form-control" 
                                            name="description" 
                                            ref={register({ required: true })} 
                                            rows="4" 
                                            placeholder="Enter description">
                                            </textarea>
                                        {errors.description && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-12 col-11">
                                    <label htmlFor="">Icon</label><br />
                                    <div className="col-md-7 col-sm-12 custom-file">
                                        <input 
                                            type="file" 
                                            className="custom-file-input" 
                                            name="file" ref={register({ required: true })} />
                                        <label 
                                            className="custom-file-label" 
                                            style={{ backgroundColor: '#DEFFED', color: '#009444'}} 
                                            htmlFor="validatedCustomFile"> 
                                            <FontAwesomeIcon icon={faCloudUploadAlt} />Upload Image</label>
                                        {errors.file && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="m-4">
                            <input type="submit" value="Submit" className="btn btn-dark text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;