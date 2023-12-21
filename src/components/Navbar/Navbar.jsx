import React from 'react'
import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
const Navbar = () => {
  return (
    <header>

     <h1>Merceria Dina</h1>

     <nav>
        <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
     </nav>
   <CardWidget/>
    </header>
  )
}

export default Navbar