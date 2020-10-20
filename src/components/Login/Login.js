import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from "../../App";
import './Login.css';

const Login = () => {

    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);;
    }

    /* GOOGLE Sign in*/
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                // The signed-in user info.
                const { displayName, email, photoURL} = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div>
            <div className="login-form">
                <div className="container">
                    <header className="d-flex align-items-center justify-content-center mt-5">
                        <Link to="/">
                            <img src={require('../../images/logos/logo.png')} alt="" width="230" />
                        </Link>
                    </header>
                    <div className="login-form-content pb-2 rounded border">
                        <h2 className="font-weight-bolder">Login With</h2>
                        <button className="social-signIn pt-2" onClick={handleGoogleSignIn}>
                            <img src={require("../../images/icons/google.png")} alt="" height="30px" width="32px" />
                            <p className="ml-3">
                               Continue With Google
                        </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;