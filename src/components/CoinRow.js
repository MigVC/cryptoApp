import React from 'react'
import { Link } from "react-router-dom";

export const CoinRow = ({coin,index}) => {

  return (
    <tr>
        <td className='index'> {index} </td>
        <td data-title = "moneda">
            <img src={coin.image} alt={coin.name} className="me-4 imageCoin"/>
            <Link to={`/CoinScreen/${coin.id}`} className='navbar-brand text-light'>{coin.name}</Link> 
                        
            <span className='ms-2 text-muted text-uppercase'> {coin.symbol} </span> 
        </td>
        <td data-title = "precio"> {coin.current_price} </td>
        {
            (coin.price_change_percentage_24h>0)
            ? <td data-title = "cambio de precio" className='text-success'> {coin.price_change_percentage_24h} </td>
            : <td data-title = "cambio de precio" className='text-danger'> {coin.price_change_percentage_24h} </td>
        }
        <td data-title = "volumen 24h"> {coin.total_volume} </td>
    </tr>
  )
}
