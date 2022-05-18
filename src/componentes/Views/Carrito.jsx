import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import Cart from '../Cart/Cart'


const Carrito = () => {

    const { clear } = useContext(CartContext)


    return (
        <>
            <div className='m-2 text-warning text-start'>
                <Cart />
            </div>
            <div>
                <button onClick={clear}  >Limpiar Carrito</button>
            </div>
        </>

    )
}

export default Carrito