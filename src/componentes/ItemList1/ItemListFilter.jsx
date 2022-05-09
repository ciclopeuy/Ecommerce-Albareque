import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../../config'
import Item from '../Item/Item';


const ItemListFilter = () => {



    const { categoria } = useParams();
    const [eventos, setEventos] = useState(null);
    const filtrado = data.filter((eve) => eve.categoria === categoria)

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtrado)
            }, 2000);
        })
        promesa.then((res) => {
            setEventos(res)
        }).catch((err) =>
            console.log(err)
        )
        // return () => {
        // }
    }, [])





    return (
        <div className='justify-content m-4'>
            {eventos ? <Item eventos={eventos} /> : <h5 className='text-warning'>Cargando Categorias Seleccionadas...</h5>}
        </div>


    );

}

export default ItemListFilter