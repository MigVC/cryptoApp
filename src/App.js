import axios from 'axios';
import { useEffect, useState } from 'react';
import { DashboardRoutes } from './routes/DashboardRoutes';
import React from 'react';
import "./style/style.css"

export const App = () =>  {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")


  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    setCoins(res.data)
  }

  useEffect(() => { 
    getData()
  },[])

  return (
    <div className='container'>
      <div className='row'>
        <DashboardRoutes coins={coins} search={search} setSearch={setSearch}/>
        
      </div>
        
    </div>
  ); 
}

