import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCommentAlt, faListAlt, faLock, faPlus, faShoppingCart, faUserCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../../images/logos/logo.png';
import { UserContext } from '../../../../App';

const Sidebar = () => {
    const [loggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const formData = new FormData()
        formData.append('email', loggedInUser.email);
        fetch(`https://cryptic-savannah-96196.herokuapp.com/isAdmin`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [loggedInUser.email])

    return (
        <div>
            <div className="pt-4 pl-5">
                <Link to="/"><img src={logo} height="50px" alt=".." /></Link>
            </div>
            <div className="list-group pt-5 list-unstyled">
            {
                    admin === true ? <div>
                        <div className="list-group pt-5">
                            <ul>
                                <li>
                                    <Link to="/admin/serviceListAdmin" style={{ textDecoration: "none", color: "black" }}>
                                        <FontAwesomeIcon icon={faLock} /> Service List</Link>
                                </li>
                                <li>
                                    <Link to="/admin/addService" style={{ textDecoration: "none", color: "black" }}>
                                        <FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                                </li>
                                <li>
                                    <Link to="/admin/makeAdmin" style={{ textDecoration: "none", color: "black" }}>
                                        <FontAwesomeIcon icon={faUserCog} /> Make Admin </Link>
                                </li>
                            </ul>
                        </div>
                    </div> :
                    <div className="list-group pt-5 list-unstyled">
                        <ul>
                            <li>
                                <Link to="/client/order" style={{ textDecoration: "none", color: "black" }}>
                                    <FontAwesomeIcon className="icon pr-1" icon={faShoppingCart} />
                                    <span>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/client/services" style={{ textDecoration: "none", color: "black" }}>
                                    <FontAwesomeIcon className="icon pr-1" icon={faListAlt} />
                                    <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/client/review" style={{ textDecoration: "none", color: "black" }}>
                                    <FontAwesomeIcon className="icon pr-1" icon={faCommentAlt} />
                                    <span>Review</span>
                                </Link>
                            </li>
                        </ul>
                </div>
                }
            </div>
        </div>
                
    );
};

export default Sidebar;