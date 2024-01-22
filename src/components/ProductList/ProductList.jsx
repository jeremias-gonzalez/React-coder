import React from 'react'
import ItemCard from '../ItemCard/ItemCard';

const ProductList = ({ productos = [] }) => {
  // Verificar si 'productos' está vacío y mostrar un mensaje en ese caso
  console.log('Datos recibidos:', productos);
  if (!productos || productos.length === 0) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <div className='grid mx-80 grid-cols-3 grid-rows-1 gap-10'>
      {productos.map((producto) => <ItemCard key={producto.id} {...producto} />)}
    </div>
  );
}

export default ProductList;