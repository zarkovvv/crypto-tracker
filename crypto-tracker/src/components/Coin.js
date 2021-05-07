import React from 'react';
import './Coin.css';
import {AnimatePresence, motion} from "framer-motion";

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

export default Coin;
