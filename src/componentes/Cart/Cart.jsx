import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

// const Cart = () => {

//     const { carrito } = useContext(CartContext)

//     return (
//         <>
//             {carrito.length > 0 ? carrito.map((item, index) => (
//                 <>

//                     <p> {item.cantidad} Entradas para: {item.evento} - el día {item.fecha} - Valor $ {item.precio} </p>
//                 </>



//             )) : <h1>Tu Carrito está vacio </h1>
//             }
//         </ >
//     )
// }

// export default Cart


const Cart = () => {

    const { carrito, removeItem } = useContext(CartContext)

    return (
        <ul>
            {carrito.length > 0 ? carrito.map((item, index) => (
                <li key={index}> {item.cantidad} entradas para: "{item.evento}" - Precio: $ {item.precio}  <button onClick={() => removeItem(item.id)}>X</button> </li>
            )) : <h1 className="text-center" >Tu carrito está vacio </h1>}
        </ul>
    )
}

export default Cart

