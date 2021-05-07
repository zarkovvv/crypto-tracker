import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";
import Coin from "./components/Coin";
import Loader from "./components/Loader";
import {AnimatePresence, motion} from "framer-motion";
import React from "react";

function App() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            setCoins(result.data);
        }
        setTimeout(fetchData, 2000);
        setInterval(async () => {
            await fetchData();
        }, 60000)
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    if (coins.length === 0) {
        return (
            <Loader />
        );
    } else {
        return (
            <AnimatePresence>
                <motion.div
                    exit={{opacity: 0}}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0}}
                >
                    <div className="price-app">
                        <div className="coin-search">
                            <h1 className="coin-text">Search a currency</h1>
                            <form action="">
                                <input type="text" placeholder="Search..." className="coin-input" onChange={handleChange}/>
                            </form>
                        </div>
                        {filteredCoins.map(coin => {
                            return <Coin
                                        key={coin.id}
                                        name={coin.name}
                                        image={coin.image}
                                        symbol={coin.symbol}
                                        volume={coin.total_volume}
                                        price={coin.current_price}
                                        priceChange={coin.price_change_percentage_24h}
                                        marketCap={coin.market_cap}
                                    />
                            ;
                        })}
                    </div>
                </motion.div>
            </AnimatePresence>
        );
    }
}

export default App;
