import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
// import { data } from '../../config';


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

    function onAdd() {
        alert(`Agregaste ${contador} entradas`)

    }





    return (

        <>
            <Button className='m-1' onClick={restar} variant="dark"> - </Button>
            <label className='m-3'> {contador} </label>
            <Button className='m-1' onClick={sumar} variant="dark"> + </Button>
            <p> <i>Entradas Disponibles : {stockReal}</i></p>
            <Button className='m-1' onClick={onAdd} variant="outline-danger"> Comprar Entradas </Button>



        </>



    )
}

export default ItemCount