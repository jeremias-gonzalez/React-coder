import React from 'react'
import TituloPrincipal from './components/TItuloPrincipal/TituloPrincipal'
import ItemCount from './components/ItemCount/ItemCount'
//componentes 1 :

/*
 conjunto de elementos que cumplen una funcion , ejemplo , una card , un boton , un header.

 Ventajas de trabajar con componentes:

 -Reutilizar codigo.
 -Favorece la separacion de responsabilidades.
 -El codigo es mas facil de entender.
 -Mejora  el rendimiento de la aplicaion


 caracteristicas principales:
  -renderizar un unico elemento
  -pueden recibir props.(propiedades).
  -pueden tener un estado.

  que es el estado? es un OBJETO que contiene 
  informacion del componente que puede cambiar
   durante la ejecucion de la app.


   
*/

const App = () => {
  return (
    <>
      <h1>Hola mundo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto aliquam, perferendis harum at architecto ducimus similique ad accusamus obcaecati deserunt tempore blanditiis eveniet illum! Laboriosa
        m, atque maxime? Quod, veritatis.</p>
   
     <TituloPrincipal saludo = "Hola grupo" nombre = "jere" edad ={18}/>
     <TituloPrincipal saludo = "eje" nombre = "jarra" edad ={20}/>
     <ItemCount/>
    </>

  )
}

export default App