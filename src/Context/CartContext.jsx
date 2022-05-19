import React, { createContext, useState } from 'react'

export const CartContext = createContext('')

const GlobalProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    // const AddItem = (producto, cantidad) => {
    //     producto.cantidad = cantidad;
    //     setCarrito([...carrito, producto,])
    // }

    const AddItem = (producto, cantidad) => {
        producto.cantidad = cantidad;
        if (carrito.some(curso => curso.id === producto.id)) {
            alert("Ya tienes este evento en tu carrito")
        } else {
            setCarrito([...carrito, producto])
        }
    }






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