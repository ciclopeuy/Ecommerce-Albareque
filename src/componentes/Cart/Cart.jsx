import React, { useContext, useEffect, useState } from 'react'
import { } from 'react-bootstrap'
import { } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import Formulario from '../Formulario/Formulario'
import CartDetail from './CartDetail'

const Cart = () => {

    const { carrito } = useContext(CartContext)
    const [total, setTotal] = useState();

    //Sumar Total
    function pagoTotal() {
        const sumAll = [];
        carrito.forEach((e) => {
            sumAll.push(e.precio * e.cantidad);
        });
        const sumWithInitial = sumAll.reduce(
            (previousValue, currentValuem, index) => previousValue + currentValuem,
            0
        );
        setTotal(sumWithInitial);
    }

    useEffect(() => {
        pagoTotal();
    }, [carrito]);


    return (

        carrito.length > 0 ?
            <div className="row">
                <div className="container col col-12 my-5 py-2 col-md-4 bg-light">
                    <Formulario />
                </div>
                <div className="container col col-12 col-md-7 my-4 py-2 bg-light">
                    <CartDetail />
                    <h5 className="display-6 text-danger text-align-right">Total a pagar: $ {total}</h5>
                </div>

            </div>


            :


            <div className="container col col-12 col-md-7 my-4 py-2 bg-dark">
                <CartDetail />
            </div>

    )
}

export default Cart