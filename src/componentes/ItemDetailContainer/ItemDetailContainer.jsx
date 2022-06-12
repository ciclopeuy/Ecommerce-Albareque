import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../service/firebase'
import { collection, getDocs } from "firebase/firestore"
import { Spinner } from 'react-bootstrap'


const ItemDetailContainer = () => {

    const { id } = useParams();
    const [eventos, setEventos] = useState(null);

    const getData = async () => {
        const col = collection(db, "productos")
        try {
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            const filtrado = result.find((prod) => prod.id === id)
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
            {eventos ? <ItemDetail eventos={eventos} /> : <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
        </div>
    );

};

export default ItemDetailContainer
