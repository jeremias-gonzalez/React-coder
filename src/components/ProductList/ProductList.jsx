import React from 'react'
import ItemCard from '../ItemCard/ItemCard';

const ProductList = ({productos}) => {
  return (
    <div className='grid mx-80 grid-cols-3 grid-rows-1 gap-10'>
    {
        productos.map((producto)=>
            
                <ItemCard key={producto.id} {...prod}/>

            
        )
    }
</div>
  )
}

export default ProductList