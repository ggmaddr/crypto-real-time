import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard'
import {categories} from '../assets/apiURLs'
const TrendTab = () => {
    
    const[cardCategory, setCardCategory] = useState('Favorite')
    // const[btnClass, setbtnClass] = useState("tab-btn") 
    // const[active,setActive] = useState("no")
    return (
        <div className="trend-tab">
            <ul className='tab-nav'>
                {categories.map((category)=>(
                    <li>
                        <button className="tab-btn"
                        onClick={()=>{
                            setCardCategory(category);}
                        } >{category}</button>
                    </li>
                ))}
            </ul>
            <h2 style={{paddingBottom:"1rem"}}> Grady's <span className='span'>{cardCategory}</span> Watchlist</h2>
            <PriceCard category={cardCategory}/>
        </div>
    )
}

export default TrendTab
