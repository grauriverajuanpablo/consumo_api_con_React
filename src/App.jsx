import React, { useEffect, useState } from 'react'
import MiApi from './MiApi' // Importa el componente MiApi
import Buscador from './Buscador' // Importa el componente Buscador

const App = () => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((data) => setData(data))
  }, [])

  // Filtra los datos según el criterio de búsqueda
  const filteredData = data?.filter((user) => user.name.includes(search))

  // Ordena los datos alfabéticamente
  const sortedData = filteredData?.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className='App'>
      <h1>Bienvenido a mi aplicación</h1>
      <Buscador setSearch={setSearch} /> {/* Agrega el componente Buscador */}
      <MiApi data={sortedData} /> {/* Agrega el componente MiApi pasándole los datos ordenados */}
    </div>
  )
}

export default App
