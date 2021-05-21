export function handleFavClick(e, symbol) {
    /////////////////////////////
    if (localStorage.getItem('fav')) {
        const result = JSON.parse(localStorage.getItem('fav'));
        if (!result.coins.includes(symbol)){
            result.coins.push(symbol);
            localStorage.setItem('fav', JSON.stringify(result));
            document.getElementById(symbol).classList.add('favourite');
        } else {
            const index = result.coins.indexOf(symbol);
            result.coins.splice(index, 1);
            localStorage.setItem('fav', JSON.stringify(result));
            document.getElementById(symbol).classList.remove('favourite');
        }
    } else {
        const fav = {
            coins: [symbol]
        }
        localStorage.setItem('fav', JSON.stringify(fav));
    }
}