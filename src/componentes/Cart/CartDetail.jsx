import React, { useContext, } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


const CartDetail = () => {

    const { carrito, removeItem } = useContext(CartContext)


    return (
        <>


            <div>
                {carrito.length > 0 ? carrito.map((item, index) => (

                    <>

                        <div className="table-responsive">
                            <table className="table bg-light">

                                <tbody >
                                    <tr>
                                        <td>{item.cantidad}</td>
                                        <td >{item.evento}</td>
                                        <td align="right">$ {item.precio} </td>
                                        <td align="right"><Button variant="danger" onClick={() => removeItem(item.id)}>X</Button></td>


                                    </tr>
                                </tbody>
                            </table>



                        </div>

                    </>





                    // <li key={index}> {item.cantidad} entradas para: "{item.evento}" - Precio: $ {item.precio}  <button onClick={() => removeItem(item.id)}>X</button> </li>
                )) :
                    <>
                        <div className='justify-content-center align-items-center'>
                            <h5 className="display-6 text-warning">¡Tu carrito está vacio!</h5>
                            <img src="https://media4.giphy.com/media/RjoLWhQBFEcHS/giphy.gif?cid=ecf05e47myayo0z5ubbdvhk4wjqf0c5ovfaildim6dr5qe33&rid=giphy.gif&ct=g" alt="" />
                            <Link className="Lead text-light nav-link" to="/">
                                <Button className='m-1' variant="outline-danger"> Volver a Comprar </Button>
                            </Link>

                        </div>


                    </>

                }
            </div>
        </>
    )
}

export default CartDetail