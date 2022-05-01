import React from 'react'
import Item from '../Item/Item'


const itemlist1 = ({ eventos }) => {
    return (
        <div>

            {eventos.length > 0 ? (
                eventos.map((evento) => <Item />)
            ) : (
                <h1>Cargando Eventos...</h1>
            )}
        </div>
    );
};

export default itemlist1;