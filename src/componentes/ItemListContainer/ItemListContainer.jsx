import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = () => {
    return (
        <div className='p-3'>
            <h1 className='display-5 text-warning'><strong>PRÓXIMOS EVENTOS</strong>  </h1>
            <ItemCount />
        </div>
    )
}

export default ItemListContainer