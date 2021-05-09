import React from 'react';
import './Navigation.css'
import {Link} from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className="nav">
            <div className="all-coins">
                <Link to="/"><button className={props.category === 'all' ? 'allBtn selected' : 'allBtn'}>All</button></Link>
            </div>
            <div>
                <Link to="/fav"><button className={props.category === 'fav' ? 'favBtn selected' : 'favBtn'}>Favourites</button></Link>
            </div>
        </div>
    );
};

export default Navigation;
