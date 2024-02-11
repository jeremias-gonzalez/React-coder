import { useState } from "react";


const ProductCount = ({inicial, stock, funcionAgregar }) => {

  
      const [contador, setContador] = useState(1);
  
  
      const incrementar = () => {
        if(contador < stock) {
          setContador(contador + 1);
        }
      }
  
      const decrementar = () => {
        if(contador > inicial) {
          setContador(contador - 1);
        }
      }
  
  
    return (
      <>
      <div className="flex  border border-gray-300 text-sm font-semibold mb-1 max-w-full w- contorno completo-ninguno redondeado-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500">
          <button className="px-10 border mx-8" onClick={decrementar}> - </button>
          <p> {contador} </p>
          <button className="px-10 border mx-5" onClick={incrementar}> + </button>
      </div>
        <button onClick={() => funcionAgregar(contador)} className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w- contorno completo-ninguno redondeado-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"> Agregar al Carrito </button>
      </>
    )
  }
  



export default ProductCount