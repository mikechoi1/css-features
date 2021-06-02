import React from 'react';

const Header = () => {
    return (
        <header className='header header-container'>
            <div className='logo'>
                Logo
            </div>
            <nav className='nav'>
                <div className='nav__about'>
                    About
                </div>
                <div className='nav__contact'>
                    Contact
                </div>
            </nav>
        </header>
    );
}

export default Header;