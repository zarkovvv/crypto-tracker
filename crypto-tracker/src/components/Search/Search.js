import React from 'react';
import './Search.scss';

const Search = (props) => {
    return (
        <div className="coin-search">
            <h1 className="coin-text">Search a currency</h1>
            <input type="text" placeholder="Search..." className="coin-input" onChange={props.handleChange}/>
        </div>
    );
};

export default Search;