import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";
import Loader from "./components/Loader/Loader";
import React from "react";
import Home from "./components/Home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import TradingView from "./components/TradingView/TradingView";

function App() {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
                setCoins(result.data);
            } catch (error) {
                alert(error.message)
            }
        }
        setTimeout(fetchData, 2000);
        setInterval(async () => {
            await fetchData();
        }, 60000)
    }, []);


    if (coins.length === 0) {
        return (
            <Loader />
        );
    } else {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home coins={coins} category={"all"}/>
                    </Route>
                    <Route exact path="/fav">
                        <Home coins={coins} category={"fav"}/>
                    </Route>
                    <Route exact path="/trading-view">
                        <TradingView />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
