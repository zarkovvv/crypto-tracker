import './App.scss';
import axios from "axios";
import {useState, useEffect} from "react";
import Loader from "./components/Loader/Loader";
import React from "react";
import {HashRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {

    const [coins, setCoins] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
                setCoins(result.data);
                setError();
            } catch (error) {
                setError(JSON.stringify(error));
            }
        }
        setTimeout(fetchData, 2000);
        setInterval(async () => {
            await fetchData();
        }, 60000)
    }, []);

    if (error) {
        return <ErrorPage />
    }
    if (coins.length === 0) {
        return (
            <Loader />
        );
    } else {
        return (
            <HashRouter>
                <Header />
                <Main coins={coins} />
            </HashRouter>
        );
    }
}

export default App;
