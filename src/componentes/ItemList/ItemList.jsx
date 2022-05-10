import React from 'react'
import Item from '../Item/Item'



const ItemList = ({ eventos }) => {
    return (
        // <dv className="card-group justify-content bg-dark p-3">
        <div className="row d-flex flex-column flex-md-row justify-content-center col-md-12">

            {eventos.length > 0 ? (
                eventos.map((evento) => <Item
                    data={evento}
                />)
            ) : (
                <h5 className='text-warning'>Cargando Eventos...</h5>
            )}
        </div >
    );
};

export default ItemList;