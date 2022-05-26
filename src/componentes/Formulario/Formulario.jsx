import React, { useContext } from 'react'
import { Button, ButtonGroup, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const Formulario = () => {

    const { clear } = useContext(CartContext)

    return (
        <Form>
            <h5 className="display-6 text-danger">Datos del Comprador</h5>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Nombre completo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Telefono de contacto" />
            </Form.Group>

            <ButtonGroup >
                <Button className='m-1' variant="danger"> Finalizar Compra </Button>
                <Link to="/">
                    <Button className='m-1' variant="danger"> Seguir Comprando </Button>
                </Link>
                <Button onClick={clear} className='m-1' variant="danger"> Vaciar Carrito </Button>
            </ButtonGroup>



        </Form>)

}

export default Formulario
