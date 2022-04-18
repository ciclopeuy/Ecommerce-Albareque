import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
    return (
        <>
            <div class="d-flex justify-content-center align-items-center" >
                <FiShoppingCart variant="dark" />
                <p>+1</p>
            </div>
        </>

    )
}

export default CartWidget