import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to='/products'>Products</Link>
        </nav>
    );
};

export default Header;