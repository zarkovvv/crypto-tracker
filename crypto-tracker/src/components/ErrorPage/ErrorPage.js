import React from 'react';
import './ErrorPage.scss';
import {AnimatePresence, motion} from "framer-motion";

const ErrorPage = () => {
    return (
        <AnimatePresence>
            <motion.div
                exit={{opacity: 0}}
                initial={{ opacity: 0, y: 0}}
                animate={{ opacity: 1, y: 0}}
            >
                <div className='container'>
                    <h1 className='oops'>Oops!</h1>
                    <h1 className='error'>404</h1>
                    <h2>Something went wrong!</h2>
                    <p>Please try again later.</p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ErrorPage;
