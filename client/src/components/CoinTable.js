import React, { useEffect, useState } from 'react'
import axios from 'axios'
function combineArrays(array1, array2) {
    return array1.map((coin) => {
      const matchingCoin = array2.find((item) => item.id === coin.id);
      return {
        ...coin,
        qty: matchingCoin ? matchingCoin.qty : 0,
        cost: matchingCoin ? matchingCoin.cost : 0,
      };
    });
  }


export const CoinTable = () => {
    const [dataSql, setDataSql] = useState([])
    const [dataAPI, setDataAPI] = useState([])
    const urlSql = "http://localhost:3001/db"
    const urlApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=apecoin%2C%20bitcoin%2C%20ethereum%2C%20harvest-finance%2C%20maker%2C%20oraichain-token%2C%20smart-game-finance%2C%20tether&order=id_asc&page=1&sparkline=false"
    // const [Marketvalue, setMarketvalue] = useState(0);
    
    useEffect(()=>{
        axios.get(urlApi)
        .then((res)=>{
            setDataAPI(res.data)
        })
        .catch((err) =>{console.log(err)})

        axios.get(urlSql)
        .then((res)=>{
            setDataSql(res.data);
        })
        .catch((err)=>console.log(err))
        
    }, [])
    const mergedData = combineArrays(dataAPI,dataSql);
    let Marketvalue = 0;
    let Gain = 0;
    let Change24 = 0;
    let cost = 0;
    for (let data of mergedData)
    {
        Marketvalue += data.qty*data.current_price;
        cost += data.qty*data.cost;
        Change24 += data.qty*data.price_change_24h;
    }
     Gain = Marketvalue - cost;

  return (
    <div className="container">

          <div className="title-wrapper">
            <h2 className="h2 section-title">Boss Porfolio</h2>
          </div>
          <div className='summary'>
            <h2>Market Value: ${Marketvalue.toLocaleString("en-US")}</h2>
            <h2 className={Gain > 0? 'green' : 'red'}>Gain($): ${Gain.toLocaleString("en-US")}</h2>
            <h2 className={Change24 > 0? 'green' : 'red'}>24h change($): ${Change24.toLocaleString("en-US")}</h2>
          </div>
    
    <table className="market-table">
        

    <thead className="table-head">

      <tr className="table-row table-title">

        <th className="table-heading" scope="col">Name</th>

        <th className="table-heading" scope="col">Quantity</th>

        <th className="table-heading" scope="col">Market Value</th>

        <th className="table-heading" scope="col">Cost</th>

        <th className="table-heading" scope="col">Gain($)</th>

        <th className="table-heading" scope="col">24h Change $</th>

        <th className="table-heading" scope="col">All Time High</th>

        <th className="table-heading" scope="col">Wallet Address</th>

        {/* <th className="table-heading"></th> */}

      </tr>

    </thead>

    <tbody className="table-body">
        {mergedData.map((data)=>(
            <tr className="table-row" key={data.id}>
                <td className='table-data'>
                    <div className='wrapper'>
                        <img src={data.image} alt=""className='logo'/>
                        <h3>
                            <a href='!#' className="coin-name">{data.name} <span className="span">{data.symbol.toUpperCase()}</span></a>
                        </h3>
                    </div>
                </td>
                <td className='table-data'>
                    {data.qty}
                </td>
                {/* market value */}
                <td className='table-data'>
                    ${(data.qty*data.current_price).toLocaleString("en-US")}
                </td>
                {/* cost */}
                <td className='table-data'>
                    ${(data.qty*data.cost).toLocaleString("en-US")}
                </td>
                {/* Gain */}
                <td className={(data.current_price - data.cost) > 0? 'table-data green' : 'table-data red'}>
                    ${(data.qty*(data.current_price - data.cost)).toLocaleString("en-US")}
                </td>
                {/* 24h change */}
                <td className={data.price_change_24h > 0? 'table-data green' : 'table-data red'}>
                    ${(data.qty*data.price_change_24h).toLocaleString("en-US")}
                </td>
                {/* ATH */}
                <td className='table-data green'>
                    ${(data.qty*data.ath).toLocaleString("en-US")}
                </td>
                {/* Wallet */}
                <td className='table-data'>
                    <button className='btn btn-outline'>Wallet</button>
                </td>
                
            </tr>

        ))}
       

    
    </tbody>

</table>
</div>

// </div>
  )
};
