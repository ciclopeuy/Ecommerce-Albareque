import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const ItemCount = ({ data }) => {

    const { stock } = data;

    const [contador, setContador] = useState(1)
    const [stockReal, setStockReal] = useState(stock - contador)




    function sumar() {
        if (stockReal > 0) {
            setContador(contador + 1)
            setStockReal(stockReal - 1)
        }

    }

    function restar() {

        if (contador > 1) {

            setContador(contador - 1)
            setStockReal(stockReal + 1)
        }
    }





    return (

        <>
            <Button onClick={restar} variant="dark">-</Button>
            <Button className='m-2' onClick={sumar} variant="dark">+</Button>
            <p> <i>Entradas Seleccionadas - {contador} - Disponibles : {stockReal}</i></p>

        </>



    )
}

export default ItemCount