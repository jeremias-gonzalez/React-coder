//voy a importar un hook que me permite crear un estado.
import { useState} from 'react'
//primer paso , always lo importamos.
const ItemCount = () => {
  const [contador, setContador] = useState(1);
  //useState me retorna un array con dos elementos , el primero es el estado , y el segundo  es una funcion que me actualiza el valor de ese estado.

  return (
    <div>
      <button> - </button>
      <p> contador </p>
      <button> + </button>

    </div>
  )
}

export default ItemCount