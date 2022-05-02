import React from 'react'
import Item from '../Item/Item'




const itemlist1 = ({ eventos }) => {
    return (
        <div className="card-group justify-content bg-dark p-3">

            {eventos.length > 0 ? (
                eventos.map((evento) => <Item
                    data={evento}
                />)
            ) : (
                <h1>Cargando Eventos...</h1>
            )}
        </div>
    );
};

export default itemlist1;