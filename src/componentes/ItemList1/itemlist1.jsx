import React from 'react'
import Item from '../Item/Item'



const itemlist1 = ({ eventos }) => {
    return (
        // <dv className="card-group justify-content bg-dark p-3">
        <div className="card-group  justify-content center container-fluid m-1 p-1">

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

export default itemlist1;