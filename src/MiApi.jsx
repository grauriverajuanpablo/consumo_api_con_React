// MiApi.jsx

import React from 'react'

const MiApi = ({ data }) => {
  return (
    <div className='card'>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MiApi
