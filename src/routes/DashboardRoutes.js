import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CoinScreen } from '../components/CoinScreen'
import { Page404 } from '../components/Page404'
import { TableCoins } from '../components/TableCoins'

export const DashboardRoutes = ({coins, search, setSearch}) => {
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/criptoApp" element={<TableCoins coins={coins} search={search} setSearch={setSearch}/>}/>
            <Route path='/CoinScreen/:id' element={<CoinScreen coins={coins} />}/>
            <Route path='*' element={<Page404 />}></Route>
        </Routes>
    </BrowserRouter>      
  )
}
