import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import ItemDetail from '../componentes/ItemDetail/ItemDetail'
import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer'
import ItemlistFilter from '../componentes/ItemList1/ItemListFilter'
// import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer'
// import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer'
import Layout from '../componentes/Layout/Layout'
import Carrito from '../componentes/Views/Carrito'
// import Checkout from '../componentes/Views/Checkout'
import ComoFunciona from '../componentes/Views/ComoFunciona'
import Error from '../componentes/Views/Error'
import Home from '../componentes/Views/Home'
import Teatro from '../componentes/Views/Teatro'
import Musica from '../componentes/Views/Musica'

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
                        <Route path='/ItemDetail/:categoria' element={<ItemlistFilter />} />
                        <Route path='/Teatro' element={<Teatro />} />
                        <Route path='/Musica' element={<Musica />} />
                    </Route>



                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Rutas