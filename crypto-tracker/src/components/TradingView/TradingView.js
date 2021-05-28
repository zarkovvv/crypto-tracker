import React from 'react';
import './TradingView.scss';

const TradingView = () => {
    return (
        <div className="view-container">
            <div className="heading-container">
                <h1 className='heading'>Trading View</h1>
            </div>
            <div className='chart-container'>
                <iframe id="tradingview_78c91"
                        title='trading-view'
                        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_78c91&amp;symbol=BTCUSD&amp;interval=D&amp;hidesidetoolbar=1&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=F1F3F6&amp;studies=%5B%5D&amp;hideideas=1&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=eu&amp;utm_medium=widget&amp;utm_campaign=chart&amp;"

                        frameBorder="0" scrolling="no" allowFullScreen=""></iframe>
            </div>
        </div>
    );
};

//style="position: relative;box-sizing: content-box;width: 100%;height: 100%;margin: 0 auto !important;padding: 0 !important;font-family:Arial,sans-serif;"
//style="width: 100%;height: 100%;background: transparent;padding: 0 !important;"
//style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"

export default TradingView;