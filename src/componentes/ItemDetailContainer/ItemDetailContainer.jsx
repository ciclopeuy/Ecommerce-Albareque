import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../service/firebase'
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [eventos, setEventos] = useState(null);
    // const filtrado = data.find((eve) => eve.id === Number(id))


    // useEffect(() => {
    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(filtrado)
    //         }, 2000);
    //     })
    //     promesa.then((res) => {
    //         setEventos(res)
    //     }).catch((err) =>
    //         console.log(err)
    //     )
    //     // return () => {
    //     // }
    // }, [])

    useEffect(() => {

        /* 
                getData()
                    .then( resp => {
                        setItem( resp.find( prod => prod.id === Number(itemId)) )
                    })
                    .finally(() => {
                        setLoading(false)
                    })  */


        const miproducto = doc(db, 'productos', id)
        getDoc(miproducto)
            .then((prod) => {
                setEventos({ id: prod.id, ...prod.data() });

            }).finally(() => {
            })



    }, [id])





    return (

        <div className='justify-content m-4'>
            {eventos ? <ItemDetail eventos={eventos} /> : <h5 className='text-warning'>Cargando Evento Seleccionado...</h5>}
        </div>


    );

};

export default ItemDetailContainer