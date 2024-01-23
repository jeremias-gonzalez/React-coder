import React from 'react'
import ProductListContainer from '../ProductListContainer/ProductListContainer'
const ProductsSection = () => {
  return (
    <div>
      <div className='mx-96 my-20'>
         <h1 className=" text-4xl font-bold tracking-tight text-gray-900">Nuestros Productos</h1>
         </div>
    <ProductListContainer/>
    </div>
  )
}

export default ProductsSection