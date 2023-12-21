import React from 'react'

const TituloPrincipal = ({saludo,nombre,edad}) => {
  return (
    <div>
        <h2>{saludo}</h2>
        <h3>{nombre}</h3>
        <h3>tengo {edad} de edad</h3>
    </div>
  )
}

export default TituloPrincipal