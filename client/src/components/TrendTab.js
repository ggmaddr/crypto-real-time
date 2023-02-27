import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard'

const TrendTab = () => {
    const categories =["Favorite", "DeFi", "AI", "NFT", "Governance", "AR", "Zero Knowledge", "Smart Contract", "ETH Ecosystem"]
    const[cardCategory, setCardCategory] = useState('Favorite')
    return (
        <div className="trend-tab">
            <ul className='tab-nav'>
                {categories.map((category)=>(
                    <li>
                        <button className='tab-btn' onClick={()=>setCardCategory(category)} >{category}</button>
                    </li>
                ))}
            </ul>
            <h2 style={{paddingBottom:"1rem"}}>Watchlist</h2>
            <PriceCard category={cardCategory}/>
        </div>
    )
}

export default TrendTab
