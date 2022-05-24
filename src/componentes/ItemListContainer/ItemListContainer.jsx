import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { db } from '../../service/firebase'
import { getDocs, collection } from "firebase/firestore"



const ItemListContainer = () => {

    const [eventos, setEventos] = useState([])


    const getData = async () => {
        const col = collection(db, "productos")
        try {
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            setEventos(result)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <div >
                <h1 className='m-2 display-4 text-warning'><strong>PRÓXIMOS EVENTOS</strong>  </h1>
            </div>
            <div>
                <ItemList className='col-md-6' eventos={eventos} />
            </div>

        </>

    )
}

export default ItemListContainer