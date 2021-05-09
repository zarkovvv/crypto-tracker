import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Navigation from "../Navigation/Navigation";
import Coin from "../Coin/Coin";
import {useState} from "react";
import Search from "../Search/Search";
import './Home.css';


const Home = (props) => {

    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const favFromStorage = JSON.parse(sessionStorage.getItem('fav')).coins;

    let favCoins = [];
    favFromStorage.forEach(fav => {
        const coin = props.coins.find(coin => coin.symbol.toLowerCase() === fav.toLowerCase());
        favCoins.push(coin);
    });

    const filteredCoins =
        props.category === 'all' ?
        props.coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())) :
        favCoins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));


    return (
        <AnimatePresence>
            <motion.div
                exit={{opacity: 0}}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0}}
            >
                <div className="price-app">
                    <Search handleChange={handleChange}/>
                    <Navigation category={props.category} />
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
                    })}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Home;