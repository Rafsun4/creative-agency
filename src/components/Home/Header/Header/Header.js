import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <NavBar ></NavBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;