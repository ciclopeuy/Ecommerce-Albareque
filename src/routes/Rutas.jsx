import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../componentes/Cart/Cart'
import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListCat from '../componentes/ItemList/ItemListCat'
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer'
import Layout from '../componentes/Layout/Layout'
import Error from '../componentes/Error/Error'


const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route Index element={<Layout />}>
                        <Route index element={<ItemListContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/ItemDetail/:id' element={<ItemDetailContainer />} />
                        <Route path="*" element={<Error />} />
                        <Route path='/categoria/:categoria' element={<ItemListCat />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Rutas
