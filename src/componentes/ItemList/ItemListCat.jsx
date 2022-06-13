import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from '../../service/firebase'
import { collection, getDocs } from "firebase/firestore"

function ItemListCat() {

    const { categoria } = useParams();
    const [eventos, setEventos] = useState([])

    const getData = async () => {
        const col = collection(db, "productos")
        try {
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            const filtrado = result.filter((prod) => prod.categoria.toLowerCase() === categoria.toLowerCase())

            setEventos(filtrado)
            console.log(filtrado)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getData()
    }, [categoria])


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

export default ItemListCat;
