import React from 'react';
import './Coin.css';
import {AnimatePresence, motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";



const Coin = ({name, image, symbol, price, volume, priceChange, marketCap}) => {
    return (
        <AnimatePresence>
            <motion.div
                exit={{opacity: 0}}
                initial={{ opacity: 0, y: 0}}
                animate={{ opacity: 1, y: 0}}
            >
                <div className="coin-container">
                    <div className="coin-row">
                        <FontAwesomeIcon className="fav" icon={faHeart} onClick={() => handleFavClick(name.toLowerCase())} color="white"/>
                        <div className="coin">
                            <img src={image} alt="crypto"/>
                            <h1>{name}</h1>
                            <p className="coin-symbol">{symbol}</p>
                        </div>
                        <div className="coin-data">
                            <p className="coin-price">${price}</p>
                            <p className="coin-volume">${volume.toLocaleString()}</p>
                            {priceChange < 0 ? (<p className="coin-percent red">{priceChange.toFixed(2)}%</p>) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}
                            <p className="coin-marketcap">
                                Market Cap: ${marketCap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

function handleFavClick(name) {
    if (sessionStorage.getItem('fav')) {
        const result = JSON.parse(sessionStorage.getItem('fav'));
        if (!result.coins.includes(name)){
            result.coins.push(name);
            sessionStorage.setItem('fav', JSON.stringify(result));
        } else {
            const index = result.coins.indexOf(name);
            result.coins.splice(index, 1);
            sessionStorage.setItem('fav', JSON.stringify(result));
        }
    } else {
        const fav = {
            coins: [name]
        }
        sessionStorage.setItem('fav', JSON.stringify(fav));
    }
}

export default Coin;
