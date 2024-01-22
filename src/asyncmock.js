
const productos = [
  
        {   id:'1',
            image :"https://cocotonline.com.ar/media/catalog/product/cache/509d93ef58015d8966566022f288135d/1/0/1002-a_1_.jpg",
            nombre : 'Medias Cocot 3/4 Lycra Pantalon Puntera Art.85',
            precio : '99',
            descripcion : '',
            idCat:"2"
        },
        {   id:'2',
            image :"https://eyelit.com.ar/cdn/shop/products/4654P0A.56.1.jpg?v=1673361452&width=600",
            nombre : 'Bóxer seamless 4654',
            precio : '120',
            descripcion : '',
            idCat:"2"
        },
        {   id:'3',
            image :'https://http2.mlstatic.com/D_NQ_NP_990887-MLA49448372502_032022-O.webp',
            nombre : 'Gorra Vintage Denim 100% Algodón',
            precio:'200',
            descripcion: '',
            idCat:"2"
        },
         { 
            id:'4',
            image :'https://http2.mlstatic.com/D_NQ_NP_867783-MLA73160604910_122023-O.webp',
            nombre : 'Sombrero Panama Solero Playero Verano Simil Paja Paperstraw',
            precio:'110',
            descripcion: '',
            idCat:"2"
         }  , 
         {
           id:'5',
           image:'https://http2.mlstatic.com/D_NQ_NP_969708-MLA54977479440_042023-O.webp',
           nombre : 'Medias Panty Bucaneras Portaligas De Lycra Abiertas Art 401',
           precio : '85',
           descripcion: '',
           idCat:"2"
         },
         {
            id:'6',
            image:'https://http2.mlstatic.com/D_NQ_NP_799447-MLA69859134598_062023-O.webp',
            nombre : 'Calzoncillo Boxer Nene Algodon Kids Fourca Andros',
            precio : '65',
            descripcion: '',
            idCat:"2"
         }
        ]
        export const getProductos = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos);
                }, 100)
            })
        }
        
        //Funcion similar pero que ahora me retorne un solo item: 
        
        export const getUnProducto = (id) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const producto = productos.find(prod => prod.id === id);
                    resolve(producto);
                }, 100)
            })
        }
        
        //Creamos una función que retorne toda la categoria. 
        
        export const getProductosPorCategoria = (idCategoria) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
                    resolve(productosCategoria);
                }, 100)
            })
        }