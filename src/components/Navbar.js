import React from 'react';
import { useState } from 'react';

export const Navbar = () => {

    const [openBurger, setOpenBurger] = useState(false)

    return (
        <div className='navBar'>
            <div onClick={() => setOpenBurger(!openBurger)} className='burgerMenu'>
                <div className='burger1'></div>
                <div className='burger2'></div>
                <div className='burger3'></div>
            </div>
            {openBurger &&
                <div className='menu'>
                    <a className='menu-item' onClick={() => setOpenBurger(!openBurger)} href='#about-me-section'>About me</a>
                    <a className='menu-item' onClick={() => setOpenBurger(!openBurger)} href='#projects-section'>Projects</a>
                    <a className='menu-item' onClick={() => setOpenBurger(!openBurger)} href='#contact-section'>Contact me</a>
                </div>
            }
            <div className='desktop-navbar'>
                <ul className='desktop-menu-list'>
                <li><a className='menu-item-desktop' href='#about-me-section'>About me</a></li>
                <li><a className='menu-item-desktop' href='#projects-section'>Projects</a></li>
                <li><a className='menu-item-desktop' href='#contact-section'>Contact me</a></li>
                </ul>
            </div>
        </div>
    )
}
