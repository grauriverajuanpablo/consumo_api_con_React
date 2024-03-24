// Buscador.jsx

import React from 'react'

const Buscador = ({ setSearch }) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Buscar por nombre o fecha...'
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Buscador
