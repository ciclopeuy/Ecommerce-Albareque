import React, { } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
// import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({ eventos }) => {




    return (
        <div className="justify-content-center">
            <h1 className='m-2 display-4 text-warning'><strong>EVENTO SELECCIONADO</strong>  </h1>
            <div className="card mb-2 justify-content" style={{ width: '100%' }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={eventos.imagen} className="img-fluid rounded-start" alt="..." />
                        <Link className='text-decoration-none' to={`/categoria/${eventos.categoria}`}>
                            <Card.Text className=' text-light bg-danger' > {eventos.categoria} </Card.Text>
                        </Link>
                    </div>

                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="display-6 text-danger">{eventos.evento}</h5>
                            <p className="lead"> <i>{eventos.fecha} en {eventos.sala}</i> </p>

                            <p className=" text-start lead">{eventos.descripcion}</p>
                            <h5 className="lead text-danger"> <i>Entradas desde $ {eventos.precio}</i> </h5>
                            <hr />

                            <ItemCount data={{ stock: eventos.stock }} />

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ItemDetail