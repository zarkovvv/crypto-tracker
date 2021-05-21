import React, {useEffect} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Coin from "../Coin/Coin";
import {useState} from "react";
import Search from "../Search/Search";
import './AllCoins.css';
import {handleFavClick} from "../../functions/handleFavClick";


const AllCoins = (props) => {

    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const favFromStorage = React.useMemo(() => (localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')).coins : []), []);

    const filteredCoins = props.coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        const allCoins = filteredCoins;
        let allCoinSymbols = [];
        allCoins.forEach(coin => allCoinSymbols.push(coin.symbol));
        allCoinSymbols.forEach(symbol => {
            if (favFromStorage.includes(symbol)) {
                document.getElementById(symbol).classList.add('favourite');
            } else {
                document.getElementById(symbol).classList.remove('favourite');
            }
        })
    }, [filteredCoins, favFromStorage])


    return (
        <React.Fragment>
            <Search handleChange={handleChange} />
            {filteredCoins.map(coin => {
                return (
                    <AnimatePresence key={coin.id}>
                        <motion.div
                            exit={{opacity: 0}}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0}}
                        >
                            <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                volume={coin.total_volume}
                                price={coin.current_price}
                                priceChange={coin.price_change_percentage_24h}
                                marketCap={coin.market_cap}
                                handleFavClick={handleFavClick}
                            />
                        </motion.div>
                    </AnimatePresence>
                )
            })}
        </React.Fragment>
    );
};

export default AllCoins;

