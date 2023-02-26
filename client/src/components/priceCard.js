import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

export const PriceCard = () =>{
    const [coinData, setCoinData] = useState(null)
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20binancecoin%2C%20staked-ether%2C%20unidex%2C%20ripple%2C%20okb%2C%20neo%2C%20dash&order=market_cap_desc&per_page=8&page=1&sparkline=false&price_change_percentage=24h'

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setCoinData(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    },[])
    // console.log(coincoinData)
    if (!coinData) return null

    return (
        
        <ul className="tab-content">

        {coinData.map((coin) => (
        <li key={coin.id}>
            <div className="trend-card">

                <div className="card-title-wrapper">
                    <img src={coin.image} alt='' />
    
                    <a href="!#" className='card-title'>{coin.name} {coin.symbol.toUpperCase()}/USD</a>

                </div>
                
                <data className="card-value">${coin.current_price}</data>
                
                
                {coin.price_change_percentage_24h < 0 ? (
                    <div className="card-analytics">
                        <FiArrowDown/>
                        <div className="badge red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        
                    </div>
                ) : (
                    <div className="card-analytics">
                        <FiArrowUpRight/>
                        <div className="badge green">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    </div>
                )}
            </div>
        </li>
    ))}
    </ul>
      
    )
}