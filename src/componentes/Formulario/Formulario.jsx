import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { db } from "../../service/firebase";
import { addDoc, collection } from "firebase/firestore";
import { CartContext } from '../../Context/CartContext'
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Formulario = () => {

    const {
        carrito,
        clear
    } = useContext(CartContext);

    const [orderID, setOrderID] = useState();
    function mostrarOrder(order) {
        if (order) {
            window.alert("Gracias por tu compra, tu numero de orden es => " + orderID)
        }
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [id]: value,
            },
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const oCollection = collection(db, "orders");
            console.log(formulario);
            await addDoc(oCollection, formulario).then(({ id }) => setOrderID(id));
            clear();
        } catch (error) {
            console.log(error)
        }
    };
    const itemsCart = carrito.map(({ id, evento, precio, cantidad }) => ({
        id,
        evento,
        precio,
        cantidad,
    }));

    const [formulario, setFormulario] = useState({
        buyer: {
            name: "",
            phone: "",
            email: "",

        },
        items: itemsCart,
        date: Date(),

    });

    useEffect(() => {

        mostrarOrder(orderID);

        return () => {

        }
    }, [orderID])

    return (
        <Form className="g-3 form needs-validation" onSubmit={handleSubmit} id="form">
            <h5 className="display-6 text-danger">Datos del Comprador</h5>
            <div className="col-md-12 mb-3">
                {/* <label className="form-label">Nombre</label> */}
                <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" onChange={handleChange} required />
                <div className="invalid-feedback">
                    Ingrese su nombre
                </div>
            </div>
            <div className="col-md-12 mb-3">
                {/* <label className="form-label">Teléfono</label> */}
                <input type="text" className="form-control" id="phone" placeholder="Ingresa tu Telefono" onChange={handleChange} required />
                <div className="invalid-feedback">
                    Ingrese su teléfono
                </div>
            </div>
            <div className="col-md-12 mb-3">
                {/* <label className="form-label">Email</label> */}
                <input type="text" className="form-control" id="email" aria-describedby="inputGroupPrepend" placeholder="Ingresa tu e-mail" onChange={handleChange} required />
                <div className="invalid-feedback">
                    Ingrese su email
                </div>
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
