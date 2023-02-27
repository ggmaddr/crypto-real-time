import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import {apiURLs} from '../assets/apiURLs'
const PriceCard = (props) =>{
    const category = props.category;
    const [coinData, setCoinData] = useState(null)
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20binancecoin%2C%20staked-ether%2C%20unidex%2C%20ripple%2C%20euler%2C%20neo%2C%20dash&order=market_cap_desc&per_page=8&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d"
    
    const findAPI = ()=>{
        for (let apiURL of apiURLs)
        {
            if (category == apiURL.name)
            {
                url = apiURL.url
                return
            }
        }
    }

    useEffect(()=>{
        findAPI();
        axios.get(url)
        .then((res)=>{
            setCoinData(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    },[category]) //re-render when "Category" updates

    if (!coinData) return null

    return (
        
        <ul className="tab-content">

        {coinData.map((coin) => (
        <li key={coin.id}>
            <div className="trend-card">

                <div className="card-title-wrapper">
                    <img src={coin.image} alt='' />
    
                    <a href="!#" className='card-title'>{coin.name} <span className='sym'>{coin.symbol.toUpperCase()}</span></a>

                </div>
                
                <data className="card-value">${coin.current_price}</data>
                
                
                {coin.price_change_percentage_24h < 0 ? (
                    <div className="card-analytics">
                        24h% <FiArrowDown/>
                        <div className="badge red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        
                    </div>
                ) : (
                    <div className="card-analytics">
                        24h% <FiArrowUpRight/>
                        <div className="badge green">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    </div>
                )}
            </div>
        </li>
    ))}
    </ul>
      
    )
}
export default PriceCard;