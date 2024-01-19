import React from 'react'
import { useState,useEffect } from 'react'
import ProductList from '../ProductList/ProductList';
import Navbar from '../Navbar/Navbar';
import  {getProductos, getProductosPorCategoria} from '../../asyncmock';
import { useParams } from 'react-router-dom';
const ProductListContainer = () => {
  const [productos,setProductos] = useState([]);

  const {idCategoria}=useParams();

  useEffect(()=>{

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
    .then(res=> setProductos(res))
    .catch(error =>console.log(error))


  },[idCategoria])

  return (

    <div>
    <Navbar/>
     <ProductList productos={productos}/>
    </div>
  )
}

export default ProductListContainer