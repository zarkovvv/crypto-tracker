import React from 'react';
import './Coin.scss';
import {AnimatePresence, motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";



const Coin = ({name, image, symbol, price, volume, priceChange, marketCap, isFav, handleFavClick}) => {
    return (
        <AnimatePresence>
            <motion.div
                exit={{opacity: 0}}
                initial={{ opacity: 0, y: 0}}
                animate={{ opacity: 1, y: 0}}
            >
                <div className="coin-container">
                    <div className="coin-row">
                        <FontAwesomeIcon id={symbol} className={`fav ${isFav ? 'favourite' : ''}`} icon={faHeart} onClick={(e) => handleFavClick(e, symbol.toLowerCase())}/>
                        <div className="coin">
                            <img src={image} alt="crypto"/>
                            <h1>{name}</h1>
                            <p className="coin-symbol">{symbol}</p>
                        </div>
                        <div className="coin-data">
                            <p className="coin-price">${price}</p>
                            <p className="coin-volume">Vol: ${volume.toLocaleString()}</p>
                            {priceChange < 0 ? (<p className="coin-percent red">{priceChange.toFixed(2)}%</p>) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}
                            <p className="coin-marketcap">
                                Mrkt Cap: ${marketCap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};



export default Coin;
