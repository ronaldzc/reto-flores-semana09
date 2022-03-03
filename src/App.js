
import { useState } from 'react';
import './App.css';
import Flor from './components/Flor';
import Cena from './components/Flor'
import Navbar from './components/Navbar';
function App() {

  const reyes = [
    {
      nombre: 'Camila',
      color: 'darkolivegreen',
      precio: 178

    },

    {
      nombre: 'Elizabeth',
      color: 'crimson',
      precio: 169
    },

    {
      nombre: 'Isabel',
      color: 'darkred',
      precio: 81
    },

    {
      nombre: 'Xiomara',
      color: 'darkmagenta',
      precio: 126
    },

    {
      nombre: 'Tania',
      color: 'brown',
      precio: 142
    },
    {
      nombre: "Sara",
      color: "teal",
      precio: 69
    }
  ]

  const [total, setTotal] = useState(0)


  return (
    <>
      <Navbar />
<div className='container'>
<div className="card border-primary mb-3">
        <div className="card-header">Total a Pagar:</div>
        <div className="card-body text-primary">

          <p className="card-text fs-1 ">S/ {total}</p>
        </div>
      </div>
</div>
      

      <div className='caja-main'>
        <Flor
          nombre={reyes[0].nombre}
          color={reyes[0].color}
          precio={reyes[0].precio}
          setTotal={setTotal}
        />
        <Flor
          nombre={reyes[1].nombre}
          color={reyes[1].color}
          precio={reyes[1].precio}
          setTotal={setTotal}
        />
        <Flor
          nombre={reyes[2].nombre}
          color={reyes[2].color}
          precio={reyes[2].precio}
          setTotal={setTotal}
        />
        <Flor
          nombre={reyes[3].nombre}
          color={reyes[3].color}
          precio={reyes[3].precio}
          setTotal={setTotal}
        />
        <Flor
          nombre={reyes[4].nombre}
          color={reyes[4].color}
          precio={reyes[4].precio}
          setTotal={setTotal}
        />
        <Flor
          nombre={reyes[5].nombre}
          color={reyes[5].color}
          precio={reyes[5].precio}
          setTotal={setTotal}
        />
      </div>

    </>
  );
}

export default App;
