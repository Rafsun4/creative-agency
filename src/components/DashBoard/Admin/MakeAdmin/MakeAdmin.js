import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import Sidebar from '../../Client/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();


    const onSubmit = data => {
        const formData = new FormData()
        formData.append('email', data.email);

        fetch('https://cryptic-savannah-96196.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert("admin created succesfully")
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
                        <div className="card pl-5 ml-5" style={{ borderRadius: '15px', width: '700px' }}>
                            <div className="row px-4 py-5">
                                <div className="col-md-6 col-sm-12 col-11">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <div className="row">
                                            <div className="col-md-8 col-sm-10">
                                                <input type="email" name="email" ref={register({ required: true })} className="form-control" placeholder="jon@gmail.com" />
                                                {errors.email && <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div>
                                                <input type="submit" value="Submit" className="btn btn-success text-white px-3 float-right" />
                                            </div>
                                        </div>
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

export default MakeAdmin;