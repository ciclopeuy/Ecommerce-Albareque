import React, { useContext, useState } from 'react'
import { Button, ButtonGroup, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { collection, getFirestore, addDoc } from "firebase/firestore";


const Formulario = () => {

    const { clear, carrito, totalcarrito } = useContext(CartContext)

    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [OrderId, SetOrderId] = useState("")

    const handleInput = (e) => {
        switch (e.target.name) {
            case "phone":
                setPhone(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "nombre":
                setNombre(e.target.value);
                break;
            default:
                break;
        }
    };


    const sendOrder = () => {
        console.log("hola");
        const order = {
            buyer: { name: { nombre }, phone: { phone }, email: { email } },
            items: [{ carrito }],
            total: { totalcarrito }
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order).then(({ id }) => SetOrderId(id));


    }

    return (


        <Form className="needs-validation" id="form" noValidate onSubmit={sendOrder}>
            <h5 className="display-6 text-danger">Datos del Comprador</h5>
            <div class="mb-3">
                <input type="text" class="form-control" onChange={handleInput} id="nombre" placeholder="Ingresa tu nombre" />
            </div>
            <div class="mb-3">
                <input type="email" class="form-control" onChange={handleInput} id="email" placeholder="Ingresa tu E-mail" />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" onChange={handleInput} id="phone" placeholder="Ingresa tu Teléfono de contacto" />
            </div>

            <ButtonGroup >
                <Button className='m-1' variant="danger" type="submit"> Finalizar Compra </Button>
                <Link to="/">
                    <Button className='m-1' variant="danger"> Seguir Comprando </Button>
                </Link>
                <Button onClick={clear} className='m-1' variant="danger"> Vaciar Carrito </Button>
            </ButtonGroup>
        </Form>


    )
}

export default Formulario