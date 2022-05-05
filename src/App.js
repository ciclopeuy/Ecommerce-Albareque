import * as React from 'react';
import './App.css';
// import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
// import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from "./componentes/NavBar/NavBar";
import Rutas from './routes/Rutas';

function App() {
  return (
    <div className="App bg-dark" >
      <NavBar />
      {/* <ItemListContainer />
      <ItemDetailContainer /> */}
      <Rutas />
    </div>
  );
}

export default App;
