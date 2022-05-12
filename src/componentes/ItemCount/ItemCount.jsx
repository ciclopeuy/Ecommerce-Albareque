import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import { data } from '../../config';


const ItemCount = ({ data }) => {

    const { stock } = data;

    const [contador, setContador] = useState(1)
    const [stockReal, setStockReal] = useState(stock - contador)
    const [comprar, setComprar] = useState(false)


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
        console.log(`Agregaste ${contador} entradas `)
        setComprar(true)
    }

    function volver() {
        setComprar(false)

    }

    return (
        <>
            {comprar ? (
                <>

                    <h5 className="lead text-danger"> <i>{contador} entradas seleccionadas </i> </h5>

                    <Link to="/cart" className='m-1' >
                        <Button className='m-1' onClick={onAdd} variant="outline-danger"> Terminar Compra </Button>
                    </Link>
                    <Button className='m-1' onClick={volver} variant="outline-danger"> Cambiar cantidad </Button>
                </>

            ) :
                <>
                    <Button className='m-1' onClick={restar} variant="dark"> - </Button>
                    <label className='m-3'> {contador} </label>
                    <Button className='m-1' onClick={sumar} variant="dark"> + </Button>
                    <p> <i>Entradas Disponibles : {stockReal}</i></p>
                    <Button className='m-1' onClick={onAdd} variant="outline-danger">Comprar Entradas</Button>
                </>
            }
        </>
    )
}

export default ItemCount