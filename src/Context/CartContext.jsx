import React, { createContext, useState } from 'react'

export const CartContext = createContext('')

const GlobalProvider = ({ children }) => {





    const [carrito, setCarrito] = useState([])

    const totalcarrito = (carrito) => {
        let suma = 0;
        for (let i = 0; i < carrito.length; i++) {
            suma = suma + carrito[i].cantidad * carrito[i].precio;
        }
        return suma;
    };


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
        <CartContext.Provider value={{ carrito, AddItem, clear, removeItem, totalcarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default GlobalProvider