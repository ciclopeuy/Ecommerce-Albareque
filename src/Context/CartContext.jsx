import React, { createContext, useState } from 'react'

export const CartContext = createContext('')

const GlobalProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    // const AddItem = (producto, cantidad) => {
    //     producto.cantidad = cantidad;
    //     setCarrito([...carrito, producto,])
    // }

    // const AddItem = (producto, cantidad) => {
    //     producto.cantidad = cantidad;
    //     if (carrito.some(curso => curso.id === producto.id)) {
    //         // alert("Ya tienes este evento en tu carrito")
    //         producto.cantidad += producto.cantidad
    //     } else {
    //         setCarrito([...carrito, producto])
    //     }
    // }

    const AddItem = (producto, cantidad) => {
        let existe = false;
        producto.cantidad = cantidad;

        const productoFilter = carrito.map((p) => {
            if (p.id === producto.id) {
                p.cantidad += producto.cantidad
                existe = true;
            }
            return p;

        })
        if (existe) {
            setCarrito(productoFilter);
        } else {
            setCarrito([...carrito, producto]);
        }
    };






    const clear = () => setCarrito([])

    const removeItem = (id) => {
        const prodEliminar = carrito.filter(evento => evento.id !== id)
        setCarrito(prodEliminar)
    }







    return (
        <CartContext.Provider value={{ carrito, AddItem, clear, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default GlobalProvider