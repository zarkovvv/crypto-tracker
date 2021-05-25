import React from 'react';
import './Navigation.scss'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav">
            <NavLink className='navLink' activeClassName='selected' exact to="/" ><button id='allBtn' className='allBtn navBtn'>All</button></NavLink>
            <NavLink className='navLink' activeClassName='selected' exact to="/fav"><button id='favBtn' className='favBtn navBtn'>Favourites</button></NavLink>
            <NavLink className='navLink' activeClassName='selected' exact to="/trading-view"><button id='tradingBtn' className='tradingBtn navBtn'>Trading View</button></NavLink>
        </div>
    );
};

export default Navigation;
