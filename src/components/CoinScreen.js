import React, { useMemo } from 'react'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import { getCoinById } from '../selectors/getCoinById'
import { LoremIpsum } from 'react-lorem-ipsum'

export const CoinScreen = ({coins}) => {

  const {id} = useParams()
  const navigate = useNavigate()

  const coin = useMemo(()=>getCoinById(id,coins),[id,coins]) 

  const handleReturn = () => {
    navigate(-1)
  }

  if(!coin){
		return <Navigate to='/'/>
	}

  const{
    name,
    symbol, 
    image,
    last_updated,
    high_24h,
    low_24h,
    current_price,
    price_change_percentage_24h

  } = coin

  return (
    <div className='pb-3'>
      <div className='row mt-5'>
      <div className='col-sm-12 col-md-6 col-lg-3 coinPic'>
        <img 
          src={image} 
          alt={name} 
          className="animate__animated animate__fadeInLeft p-4" 
        />
      </div>
      <div className='col-sm-12 col-md-6 col-lg-9 py-2 px-4'>
        <b className='text-light'> What is {name}? </b>
        <div className='text-light'> <LoremIpsum p={2}/> </div> 
      </div>
    </div>

    <div className='row'>
      <div className='animate__animated animate__fadeIn'>
        <h3 className='mt-3 mb-3 text-light'>{name} <span className='text-muted'>{symbol}</span></h3>
        <ul className='list-group bg-dark'>
          <li className='list-group-item bg-dark text-light'><b>Precio actual: </b> {current_price} </li>
          
          {         
            (price_change_percentage_24h>0)
            ? <li className='list-group-item bg-dark text-light'> <b>Cambio de precio: </b><span className='text-success'>{price_change_percentage_24h}</span></li>
            : <li className='list-group-item bg-dark text-light'> <b>Cambio de precio: </b><span className='text-danger'>{price_change_percentage_24h}</span></li>
          }
          
          
          <li className='list-group-item bg-dark text-light'><b>Ultima actualizacion: </b> {last_updated} </li>
          <li className='list-group-item bg-dark text-light'><b>Maximo 24h: </b> {high_24h} </li>
          <li className='list-group-item bg-dark text-light'><b>Minimo 24h: </b> {low_24h} </li>
        </ul>
        <button
          className='btn btn-outline-info mt-3'
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>  

      
    
    </div>
    
  )
}
