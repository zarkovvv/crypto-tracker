import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <div className="coin-search">
            <h1 className="coin-text">Search a currency</h1>
            <form action="">
                <input type="text" placeholder="Search..." className="coin-input" onChange={props.handleChange}/>
            </form>
        </div>
    );
};

export default Search;