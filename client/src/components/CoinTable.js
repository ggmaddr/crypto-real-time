import React, { useEffect, useState } from 'react'
import axios from 'axios'
const CoinTable = () => {
    const [dataSql, setDataSql] = useState([])
    // useEffect(()=>{
    //     axios.get()
    // },[])
  return (
    <table className="market-table">

    <thead className="table-head">

      <tr className="table-row table-title">

        <th className="table-heading" scope="col">Name</th>

        <th className="table-heading" scope="col">Quantity</th>

        <th className="table-heading" scope="col">Market Value</th>

        <th className="table-heading" scope="col">Cost</th>

        <th className="table-heading" scope="col">Gain($)</th>

        <th className="table-heading" scope="col">24h Change $</th>

        <th className="table-heading" scope="col">7d Change $</th>

        <th className="table-heading" scope="col">Wallet Address</th>

        {/* <th className="table-heading"></th> */}

      </tr>

    </thead>

    <tbody className="table-body">
        <tr className="table-row">

            

            <td className="table-data"> </td>
            <td className="table-data">
            <div className="wrapper">
                <img src="./images/coin-1.svg" width="20" height="20" alt="Bitcoin logo" className="img"/>

                <h3>
                <a href="!#" className="coin-name">Bitcoin <span className="span">BTC</span></a>
                </h3>
            </div>
            </td>

            <td className="table-data">$56,623.54</td>

            <td className="table-data green">+1.45%</td>

            <td className="table-data">$880,423,640,582</td>

            <td className="table-data">
            <img src="./images/chart-1.svg" width="100" height="40" alt="profit chart" className="chart"/>
            </td>

            <td className="table-data">
            <button className="btn btn-outline">Trade</button>
            </td>

        </tr>

    
    </tbody>

</table>


  )
}

export default CoinTable
