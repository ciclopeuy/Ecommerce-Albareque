import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer'

const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<ItemListContainer />} />
                    <Route path='/ItemDetail/:id' element={<ItemDetailContainer />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Rutas