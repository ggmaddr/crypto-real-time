import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard'
import {categories} from '../assets/apiURLs'
const TrendTab = () => {
    
    const[cardCategory, setCardCategory] = useState('Favorite')
    const[activeBtn, setActiveBtn] = useState(false)
    return (
        <div className="trend-tab">
            <ul className='tab-nav'>
                {categories.map((category)=>(
                    <li>
                        <button className={activeBtn ? "nav-btn" : "active-btn"} 
                        onClick={()=>{
                            setCardCategory(category);
                            setActiveBtn(true);
                            }
                        } >{category}</button>
                    </li>
                ))}
            </ul>
            <h2 style={{paddingBottom:"1rem"}}>Watchlist</h2>
            <PriceCard category={cardCategory}/>
        </div>
    )
}

export default TrendTab
