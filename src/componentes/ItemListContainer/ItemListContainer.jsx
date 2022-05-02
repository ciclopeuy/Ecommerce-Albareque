import React, { useState, useEffect } from 'react'
import ItemList1 from '../ItemList1/itemlist1'

const ItemListContainer = () => {

    const [eventos, setEventos] = useState([])

    const data = [
        {
            id: 1,
            evento: "Rossana Taddei",
            descripcion: "Rossana Taddei vuelve a Uruguay por una breve estadía y se presentará en Magnolio el 29/4. Único concierto en Montevideo con su proyecto MINIMAL mambo junto al percusionista Gustavo Etchenique",
            precio: "700",
            stock: "120",
            imagen: "https://tickantel.cdn.antel.net.uy/media/Espectaculo/40011267/MagnolioSala-04-29-RossanaTaddei-Tickantel%C2%B7BannerWeb.jpg"

        },
        {
            id: 2,
            evento: "Andres Stagnaro",
            descripcion: "Un pulso que golpea las tinieblas Andrés Stagnaro presenta un renovado espectáculo  unipersonal  e  intimista  donde  musicaliza y canta a la poesía uruguaya, en particular a las mujeres poetas incorporando también a poetas portugueses.",
            precio: "650",
            stock: "100",
            imagen: "https://tickantel.cdn.antel.net.uy/media/Espectaculo/40010958/1647139367164_ToqueAndresStagnaro_BannerWeb_V2.jpg"

        },
        {
            id: 3,
            evento: "Pavana Criolla",
            descripcion: "Pavana Criolla nace como un proyecto artístico-musical que une dos mundos musicales que separados por el tiempo, logran coexistir en un escenario y potenciarse en melodías no tan distintas.",
            precio: "350",
            stock: "80",
            imagen: "https://tickantel.cdn.antel.net.uy/media/Espectaculo/40011177/700x390.png"

        },
    ]

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
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
                <h1 className='m-2 display-5 text-warning'><strong>PRÓXIMOS EVENTOS</strong>  </h1>
            </div>
            <div>
                <ItemList1 eventos={eventos} />
            </div>

        </>

    )
}

export default ItemListContainer