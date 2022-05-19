import React, { useContext } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from '../../Context/CartContext';





const CartWidget = () => {

    const { carrito } = useContext(CartContext)

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" >
                <FiShoppingCart style={{ color: "white" }} />
                <h6 className="Lead text-warning">{carrito.length}</h6>
            </div>
        </>

    )
}

export default CartWidget