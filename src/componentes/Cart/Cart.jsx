import React, { useContext, } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


const Cart = () => {

    const { carrito, removeItem, clear } = useContext(CartContext)


    return (
        <div>
            {carrito.length > 0 ? carrito.map((item, index) => (

                <>

                    <div className="table-responsive">
                        <table className="table bg-light">
                            <thead>
                                <tr>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Evento</th>
                                    <th scope="col">Precio de la entrada</th>
                                    <th scope="col">Remover</th>
                                    <th scope="col">Remover Todo</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item.cantidad}</td>
                                    <td>{item.evento}</td>
                                    <td>$ {item.precio} </td>
                                    <td><button onClick={() => removeItem(item.id)}>X</button></td>
                                    <td><button onClick={clear}>X</button></td>

                                </tr>
                            </tbody>
                        </table>



                    </div>

                </>





                // <li key={index}> {item.cantidad} entradas para: "{item.evento}" - Precio: $ {item.precio}  <button onClick={() => removeItem(item.id)}>X</button> </li>
            )) :
                <>
                    <div className='justify-content-center align-items-center'>
                        <h1 className="text-center" >Tu carrito está vacio </h1>
                        <Link className="Lead text-light nav-link" to="/">
                            <button className='m-1 justify-content-center'>Volver a Comprar</button>
                        </Link>

                    </div>


                </>

            }
        </div>
    )
}

export default Cart

