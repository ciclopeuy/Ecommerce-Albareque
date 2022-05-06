import React from 'react'
import { } from 'react-bootstrap'
// import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({ eventos }) => {
    return (
        <div className="justify-content center p-3">
            <h1 className='m-2 display-4 text-warning'><strong>EVENTO SELECCIONADO</strong>  </h1>
            <div className="card mb-2 justify-content" style={{ width: '100%' }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={eventos.imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="display-6 text-danger">{eventos.evento}</h5>
                            <p className="lead"> <i>{eventos.fecha} en {eventos.sala}</i> </p>

                            <p className="lead">{eventos.descripcion}</p>
                            <h5 className=" lead text-danger"> <i>Entradas desde $ {eventos.precio}</i> </h5>
                            {/* <ItemCount data={{ stock: data.stock }} /> */}

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ItemDetail