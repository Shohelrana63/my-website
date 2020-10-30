import React from 'react';
import Blogs from '../Home/Blogs/Blogs';
import Work from '../Work/Work';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Work></Work>
            <Blogs></Blogs>
        </div>
    );
};

export default Header;