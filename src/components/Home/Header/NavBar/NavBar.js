import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png';

const NavBar = () => {
    return (
        <nav className="container navbar navbar-expand-lg navbar-light">
            
            <Link to="/"><img className="navbar-brand img-fluid" src={logo} style={{ width: "40%" }} alt="logo" /></Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse font-weight-bolder" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link mr-3 active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3 active" to="/">Our Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3 active" to="/">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3 active" to="/">Contact Us</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-3 text-white" to="/login">
                            <button className="btn btn-dark">Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;