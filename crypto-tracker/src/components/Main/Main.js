import React from 'react';
import {Route, Switch} from "react-router-dom";
import AllCoins from "../Home/AllCoins";
import Favourites from "../Favourites/Favourites";
import TradingView from "../TradingView/TradingView";
import './Main.scss';

const Main = (props) => {
    return (
        <Switch>
            <Route exact path="/">
                <div className='coins-container'>
                    <AllCoins coins={props.coins} />
                </div>
            </Route>
            <Route exact path="/fav">
                <div className='coins-container'>
                    <Favourites coins={props.coins} />
                </div>
            </Route>
            <Route exact path="/tradingView">
                <TradingView />
            </Route>
        </Switch>
    );
};

export default Main;
