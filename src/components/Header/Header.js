
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="/home">home</a>
                <a href="/country">country</a>
                <a href="about">about</a>
            </nav>
        </div>
    );
};

export default Header;