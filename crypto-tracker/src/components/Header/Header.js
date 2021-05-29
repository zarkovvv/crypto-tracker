import React from 'react';
import './Header.scss'
import Navigation from "../Navigation/Navigation";

const Header = () => {
    window.onscroll = function(){
        let top = window.scrollY;
        let header = document.getElementsByClassName('header');
        let offset = header[0].clientHeight; //changed offset to be dynamic, so it works on mobile screens.
        if(top > offset){
            header[0].classList.remove('top');
            header[0].classList.add('scrolled');
        } else {
            header[0].classList.remove('scrolled');
            header[0].classList.add('top');
        }
    };

    return (
        <div className='header'>
            <Navigation />
        </div>
    );
};

export default Header;
