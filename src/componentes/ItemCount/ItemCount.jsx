import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const ItemCount = () => {

    const [contador, setContador] = useState(1)
    const [stock, setStock] = useState(30 - contador)


    function sumar() {
        if (stock > 0) {
            setContador(contador + 1)
            setStock(stock - 1)
        }

    }

    function restar() {

        if (contador > 1) {

            setContador(contador - 1)
            setStock(stock + 1)
        }
    }


    return (

        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://tickantel.cdn.antel.net.uy/media/Espectaculo/40010864/GORILLAZ_TICKANTEL_700X390.jpg" />
            <Card.Body>
                <Card.Title className='display-6 text-danger' >Primavera 0</Card.Title>
                <Card.Text className='lead'>
                    Primavera 0 festeja su décima edición con una espectacular apertura en pleno otoño:
                    Open doors: 19:30
                    Zeballos: 20:00
                    Nathy Peluso: 20:30
                    Gorillaz: 22:00
                </Card.Text>
                <Card.Text className='lead text-danger' > <i>Precio: $ 2500</i> </Card.Text>

                <Button onClick={restar} variant="dark">-</Button>
                <Button className='m-2' onClick={sumar} variant="dark">+</Button>
                <Card.Text> <i>Cantidad- {contador} - Disponibles : {stock}</i></Card.Text>
            </Card.Body>
        </Card>

    )
}

export default ItemCount