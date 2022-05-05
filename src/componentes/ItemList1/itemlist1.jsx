import React from 'react'
import Item from '../Item/Item'
import { data } from '../../config';



const itemlist1 = ({ eventos }) => {
    return (
        <div className="card-group justify-content bg-dark p-3">

            {eventos.length > 0 ? (
                eventos.map((evento) => <Item
                    data={evento}
                />)
            ) : (
                <h5 className='text-warning'>Cargando Eventos...</h5>
            )}
        </div>
    );
};

export default itemlist1;