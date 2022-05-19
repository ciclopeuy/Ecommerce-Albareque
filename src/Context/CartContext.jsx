import React, { createContext, useState } from 'react'

// nombre del context que estan creando 
export const CartContext = createContext('')

const GlobalProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([])

  const AddItem = (producto, cantidad) => {
    producto.cantidad = cantidad;
    setCarrito([...carrito, producto,])
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