import axios from 'axios';

let cache = {
    data: [{rate: null}, {marketPrice: null}],
    timestamp: 0,
};

async function getBitcoinRate() {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1';
    const cacheTime = 60 * 1000 * 30;

    try {
        if (cache.data[0].rate && Date.now() - cache.timestamp < cacheTime) {
            return Promise.resolve(cache.data[0].rate);
        } else {
            const res = await axios.get(url);
            cache = {
                data: [{rate: res.data}, {marketPrice: cache.data[1].marketPrice}],
                timestamp: Date.now(),
            }
            return res.data;
        }
    } catch (error) {
        console.error('Error fetching bitcoinRate:', error);
        throw error;
    }
}

async function getMarketPrice() {
    const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
    const cacheTime = 60 * 1000 * 30;

    try {
        if (cache.data[1].marketPrice && Date.now() - cache.timestamp < cacheTime) {
            return Promise.resolve(cache.data[1].marketPrice);
        } else {
            const res = await axios.get(url);
            cache = {
                data: [{rate: cache.data[0].rate}, {marketPrice: res.data}],
                timestamp: Date.now(),
            }
            return res.data;
        }
    } catch (error) {
        console.error('Error fetching bitcoinRate:', error);
        throw error;
    }
}


export const bitcoinService = {
    getBitcoinRate,
    getMarketPrice
}