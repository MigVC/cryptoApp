import React from 'react'

export const Search = ({setSearch}) => {
  return (
        <input type="text" placeholder="Busca una moneda..." className="buscar form-control bg-dark text-light border-0 mt-3"
            onChange={e => setSearch(e.target.value)}
        />
  )
}
