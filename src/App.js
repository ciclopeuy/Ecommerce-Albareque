import * as React from 'react';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from "./componentes/NavBar/NavBar";

function App() {
  return (
    <div className="App bg-dark" >
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
