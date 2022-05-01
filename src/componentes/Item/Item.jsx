import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'


const Item = ({ id, evento, descripcion, precio, stock, imagen }) => {
    const [contador, setContador] = useState(1)
    const [stockreal, setStockreal] = useState({ stock } - contador)


    function sumar() {
        if (stockreal > 0) {
            setContador(contador + 1)
            setStockreal(stockreal - 1)
        }

    }

    function restar() {

        if (contador > 1) {

            setContador(contador - 1)
            setStockreal(stockreal + 1)
        }
    }





    return (

        <Card className="m-3" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title className='display-6 text-danger' >{evento}</Card.Title>
                <Card.Text className='lead'>
                    {descripcion}
                </Card.Text>
                <Card.Text className='lead text-danger' > <i>{precio}</i> </Card.Text>

                <Button onClick={restar} variant="dark">-</Button>
                <Button className='m-2' onClick={sumar} variant="dark">+</Button>
                <Card.Text> <i>Cantidad- {contador} - Disponibles : {stockreal}</i></Card.Text>
            </Card.Body>
        </Card>

    )
}

export default Item