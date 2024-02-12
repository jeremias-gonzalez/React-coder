//Versión sin descuento de stock: 

import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContex";



const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    //Funcion manejador del form: 

    const manejadorSubmit = (event) => {
        event.preventDefault();

        //Verificamos que todos los campos se completen: 
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("¡Por favor completa todos los campos o moriremos!");
            return;
        }

        //Validamos que el email coincida: 
        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden, rata de dos patas!");
            return;
        }

        //Creamos un objeto con todos los datos de la orden: 
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //Guardamos la orden de compras en la base de datos: 
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden compra", error);
                setError("No se pudo crear la orden, revisa tu codigo maldito");
            })
    }

    return (
        <div>
            <div className="text-center my-20">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Checkout - Finalizamos la Compra </h2>
            </div>
            <div className="my-20">
            <form onSubmit={manejadorSubmit} className="my-20">
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> {producto.item.precio} </p>
                            <hr />
                        </div>
                    ))
                }

                <div className='mx-auto max-w-2xl text-center my-10'>
                    <label className="block text-sm leading-6 font-bold text-gray-900 my-2" htmlFor="nombre"> Nombre </label>
                    <input  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className='mx-auto max-w-2xl text-center my-10'> 
                    <label className="block text-sm  leading-6 font-bold  text-gray-900 my-2" htmlFor="apellido"> Apellido </label>
                    <input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ired-600 sm:text-sm sm:leading-6" type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className='mx-auto max-w-2xl text-center my-10'>
                    <label className="block text-sm leading-6 font-bold  text-gray-900 my-2" htmlFor="telefono"> Telefono </label>
                    <input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className='mx-auto max-w-2xl text-center my-10'>
                    <label className="block text-sm   font-bold leading-6 text-gray-900 my-2" htmlFor="email"> E-mail </label>
                    <input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='mx-auto max-w-2xl text-center my-10'>
                    <label className="block text-sm leading-6 font-bold  text-gray-900 my-2" htmlFor="emailcon"> Email Confirmación </label>
                    <input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" type="email" id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button className="mt-10 mx-10 flex w-36 items-center justify-center rounded-md border border-transparent bg-red-600 px-2 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"> Finalizar Orden </button>

                {
                    ordenId && <strong>¡Gracias por su compra! Tu número de orden es el siguiente: {ordenId} </strong>
                }

            </form>
            </div>
        </div>
    )
}

export default Checkout