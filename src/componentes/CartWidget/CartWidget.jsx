import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" >
                <FiShoppingCart style={{ color: "white" }} />
                <p style={{ color: "white" }}>+1</p>
            </div>
        </>

    )
}

export default CartWidget