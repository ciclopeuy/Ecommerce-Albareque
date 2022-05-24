import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListCat from '../componentes/ItemList/ItemListCat'
import Layout from '../componentes/Layout/Layout'
import Carrito from '../componentes/Views/Carrito'
import ComoFunciona from '../componentes/Views/ComoFunciona'
import Error from '../componentes/Views/Error'
import Home from '../componentes/Views/Home'


const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route Index element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/cart' element={<Carrito />} />
                        <Route path='/comofunciona' element={<ComoFunciona />} />
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