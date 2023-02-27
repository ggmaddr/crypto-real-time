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

        <th className="table-heading"></th>

        <th className="table-heading" scope="col">#</th>

        <th className="table-heading" scope="col">Name</th>

        <th className="table-heading" scope="col">Last Price</th>

        <th className="table-heading" scope="col">24h %</th>

        <th className="table-heading" scope="col">Market Cap</th>

        <th className="table-heading" scope="col">Last 7 Days</th>

        <th className="table-heading"></th>

      </tr>

    </thead>

    <tbody className="table-body">


    </tbody>

</table>


  )
}

export default CoinTable
