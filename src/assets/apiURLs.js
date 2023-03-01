export const categories =["Favorite", "DeFi", "AI", "NFT", "Governance", "Eth 2.0 Staking", "Zero Knowledge", "Smart Contract", "Metaverse"]
export const apiURLs = [
    {
        //bitcoin, binancecoin, staked-ether, unidex, ripple, euler, neo, dashh
        name:"Favorite",
        url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20binancecoin%2C%20staked-ether%2C%20unidex%2C%20ripple%2C%20euler%2C%20neo%2C%20dash&order=market_cap_desc&per_page=8&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d"
    },
    {
        //category_id: decentralized-finance-defi
        name:"DeFi",
        url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized-finance-defi&order=market_cap_desc&per_page=8&page=1&sparkline=false"
    },
    {
        //category_id: governance
        name:"Governance",
        url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=governance&order=market_cap_desc&per_page=8&page=1&sparkline=false"
    },
    {
        //category_id: artificial-intelligence
        name:"AI",
        url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=artificial-intelligence&order=market_cap_desc&per_page=8&page=1&sparkline=false"
    },
    {
        //category_id: non-fungible-tokens-nft
        name:"NFT",
        url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=non-fungible-tokens-nft&per_page=8&page=1&sparkline=false"
    },
    {
        //  zero-knowledge-zk
        name:"Zero Knowledge",
        url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=zero-knowledge-zk&order=market_cap_desc&per_page=8&page=1&sparkline=false"
    },
    {
        // smart-contract-platform
        name:"Smart Contract",
        url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=smart-contract-platform&order=market_cap_desc&per_page=8&page=1&sparkline=false"
    },
    {
        // eth-2-0-staking
        name:"Eth 2.0 Staking",
        url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=eth-2-0-staking&order=market_cap_desc&per_page=8&page=1&sparkline=false"
    },
    {
        // metaverse
        name:"Metaverse",
        url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&per_page=8&page=1&sparkline=false"
    }
]
export const SQLdata =[
    {"id":"apecoin","qty":800,"cost":2},
    {"id":"bitcoin","qty":20,"cost":6700},
    {"id":"ethereum","qty":40,"cost":976.03},
    {"id":"harvest-finance","qty":130,"cost":43.12},
    {"id":"maker","qty":20,"cost":597.22},
    {"id":"oraichain-token","qty":200,"cost":6.03},
    {"id":"smart-game-finance","qty":1000,"cost":8.12},
    {"id":"tether","qty":10000,"cost":0.98}]