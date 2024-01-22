import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";


const ProductDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect( () => {
      getUnProducto(idItem)
      .then(res => {
          console.log("Datos del producto:", res);
          setProducto(res);
      })
      .catch(error => {
          console.error("Error al obtener el producto:", error);
      });
}, [idItem]);
  return (
    <div>
        <ProductDetail  {...producto} />
    </div>
  )
}

export default ProductDetailContainer