import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import { data } from '../../config';


const ItemCount = ({ data }) => {

    const { stock, precio } = data;

    const { AddItem } = useContext(CartContext)


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
        setComprar(true)
    }

    function volver() {
        setComprar(false)

    }

    const [comprar, setComprar] = useState(false)


    return (
        <>
            {comprar ? (
                <>

                    <h5 className="lead text-danger"> <i>{contador} entradas seleccionadas </i> </h5>

                    <Link to="/cart" className='m-1' >
                        <Button className='m-1' onClick={() => AddItem(data, contador)} variant="outline-danger"> Terminar Compra </Button>
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