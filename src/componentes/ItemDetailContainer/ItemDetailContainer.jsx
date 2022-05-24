import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../service/firebase'
import { collection, getDocs } from "firebase/firestore"

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [eventos, setEventos] = useState(null);
    // const filtrado = data.find((eve) => eve.id === Number(id))


    const getData = async () => {
        const col = collection(db, "productos")
        try {
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            const filtrado = result.find((prod) => prod.id == id)
            setEventos(filtrado)
            console.log(filtrado)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getData()
    }, [])




    return (

        <div className='justify-content m-4'>
            {eventos ? <ItemDetail eventos={eventos} /> : <h5 className='text-warning'>Cargando Evento Seleccionado...</h5>}
        </div>


    );

};

export default ItemDetailContainer