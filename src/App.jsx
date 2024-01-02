import React from 'react'
import Navbar from './components/Navbar/Navbar';
import itemListContainer from './components/itemListContainer/itemListContainer';


const App = () => {
  return (
    <>
   
     <Navbar/>
     <itemListContainer greeting ="Bienvenido/a , a Merceria dina!"/>
    </>

  )
}

export default App