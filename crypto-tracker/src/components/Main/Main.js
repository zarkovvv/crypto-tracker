import React from 'react';
import {Route, Switch} from "react-router-dom";
import AllCoins from "../Home/AllCoins";
import Favourites from "../Favourites/Favourites";
import TradingView from "../TradingView/TradingView";
import './Main.css';

const Main = (props) => {
    return (
        <Switch>
            <Route exact path="/">
                <div className='price-app'>
                    <AllCoins coins={props.coins} />
                </div>
            </Route>
            <Route exact path="/fav">
                <div className='price-app'>
                    <Favourites coins={props.coins} />
                </div>
            </Route>
            <Route exact path="/trading-view">
                <TradingView />
            </Route>
        </Switch>
    );
};

export default Main;
