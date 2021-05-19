import React from 'react';
import './Navigation.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav">
            <div className="btn-wrapper">
                <NavLink activeClassName='selected' exact to="/" ><button id='allBtn' className='allBtn navBtn'>All</button></NavLink>
            </div>
            <div className="btn-wrapper">
                <NavLink activeClassName='selected' exact to="/fav"><button id='favBtn' className='favBtn navBtn'>Favourites</button></NavLink>
            </div>
            <div className="btn-wrapper">
                <NavLink activeClassName='selected' exact to="/trading-view"><button id='tradingBtn' className='tradingBtn navBtn'>Trading View</button></NavLink>
            </div>
        </div>
    );
};

export default Navigation;
