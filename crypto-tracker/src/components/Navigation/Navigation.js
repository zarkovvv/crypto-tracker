import React from 'react';
import './Navigation.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav">
            <div className="all-coins">
                <NavLink activeClassName='selected' exact to="/" ><button id='allBtn' className='allBtn'>All</button></NavLink>
            </div>
            <div>
                <NavLink activeClassName='selected' exact to="/fav"><button id='favBtn' className='favBtn'>Favourites</button></NavLink>
            </div>
        </div>
    );
};

export default Navigation;
