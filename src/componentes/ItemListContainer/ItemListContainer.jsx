import React, { useState, useEffect } from 'react'
import ItemList1 from '../ItemList1/itemlist1'
import { data } from '../../config'

const ItemListContainer = () => {

    const [eventos, setEventos] = useState([])



    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
        promesa.then((res) => {
            setEventos(res)
        }).catch((err) =>
            console.log(err)
        )
        return () => {
        }
    }, [])


    return (
        <>
            <div >
                <h1 className='m-2 display-4 text-warning'><strong>PRÓXIMOS EVENTOS</strong>  </h1>
            </div>
            <div>
                <ItemList1 eventos={eventos} />
            </div>

        </>

    )
}

export default ItemListContainer