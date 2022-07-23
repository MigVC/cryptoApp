import React from 'react'
import { CoinRow } from './CoinRow'
import { Search } from './Search'

const headers = ["#","Moneda","Precio","Cambio de precio","Volumen 24h"]

export const TableCoins = ({coins, search, setSearch}) => {
    console.log(coins)
    const filteredCoins = coins.filter(
        (coin) => coin.name.toLowerCase().includes(search.toLowerCase())
                    ||
                    coin.symbol.toLowerCase().includes(search.toLowerCase())
        )

    return (
        <>
            <Search setSearch={setSearch}/>
            
                <table className='table table-dark table-hover mt-4'>
                    <thead>
                        <tr>
                            {
                                headers.map((header) => (
                                    <td key={header}>{header}</td>
                                ))
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {   
                            filteredCoins.map((coin,index) => (
                                <CoinRow coin={coin} key={index} index={index+1}/>
                            ))
                        }
                    </tbody>
                </table>
            
            
        </>
        
    )
}
