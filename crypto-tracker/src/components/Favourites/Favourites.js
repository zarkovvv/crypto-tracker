import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Coin from "../Coin/Coin";
import {useState} from "react";
import Search from "../Search/Search";
import './Favourites.css';
import {handleFavClick} from "../../functions/handleFavClick";


const Favourites = (props) => {

    const [favClicked, setFavClicked] = useState(0);
    const [search, setSearch] = useState('');

    function handleFavClickFav(e, symbol) {
        handleFavClick(e, symbol)
        setFavClicked(favClicked + 1);
    }

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const favFromStorage = (localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')).coins : []);

    let favCoins = [];
    if (favFromStorage){
        favFromStorage.forEach(fav => {
            const coin = props.coins.find(coin => coin.symbol.toLowerCase() === fav.toLowerCase());
            favCoins.push(coin);
        });
    }

    const filteredCoins = favCoins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));


    return (
        <React.Fragment>
            <Search handleChange={handleChange} />
            {filteredCoins.map(coin => {coin.isFav = true
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
                                isFav={coin.isFav}
                                handleFavClick={handleFavClickFav}
                            />
                        </motion.div>
                    </AnimatePresence>
                )
            })}
        </React.Fragment>
    );
};

export default Favourites;

