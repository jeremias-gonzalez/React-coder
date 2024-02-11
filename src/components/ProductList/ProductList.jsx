import React from 'react'
import ItemCard from '../ItemCard/ItemCard';

const ProductList = ({ productos = [] }) => {
  // Verificar si 'productos' está vacío y mostrar un mensaje en ese caso
  console.log('Datos recibidos:', productos);
  if (!productos || productos.length === 0) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
      {productos.map((producto) => <ItemCard key={producto.id} {...producto} />)}
    </div>
  );
}

export default ProductList;