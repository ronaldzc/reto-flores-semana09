import React from "react";
import "../App.css";

const Flor = ({ nombre = "", color = "", precio = 0, setTotal = 0 }) => {
  const cargarImagen = require.context("../img", true);

  const comprar = (e) => {
    setTotal((val) => val + precio);
    e.target.parentNode.parentNode.parentNode.style.display = "none";
  };

  return (
    <>
      <div className="flor card" style={{ backgroundColor: color }}>
        <h1>{nombre}</h1>
        <img
          className="card-img-top"
          src={cargarImagen(`./flor_${nombre.toLowerCase()}.png`)}
          alt={nombre}
        />
        <div className="card-body">
          <h5 class="card-title">S/ {precio}</h5>
          <div>
            <button onClick={comprar} type="button" className="btn btn-primary">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flor;
