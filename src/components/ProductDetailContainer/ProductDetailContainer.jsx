import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";


const ProductDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect( () => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
    }, [idItem])

  return (
    <div>
        <ProductDetail  {...producto} />
    </div>
  )
}

export default ProductDetailContainer