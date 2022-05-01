import React, { useState } from 'react'

const Promise = () => {

    const [eventos, setEventos] = useState([])

    const item = { id: 1, nombre: "Gonzalo Deniz", Lugar: "Magnolio Sala", Precio: 700 }

    const pedido = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, 5000);
    })

    pedido.then((res) => { setEventos(res) }).then(() => console.log(eventos))
        .catch((err) => console.log(err))
    console.log(eventos);
    ;



    return (
        <div>Promise</div>




    )
}

export default Promise

