import * as React from 'react';
import './App.css';
import GlobalProvider from './Context/CartContext';
import Rutas from './routes/Rutas';

function App() {
  return (
    <div className="App bg-dark" >
      <GlobalProvider>
        <Rutas />
      </GlobalProvider>
    </div>
  );
}

export default App;
