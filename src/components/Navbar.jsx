import React from "react";

const Navbar = () => {

    const cargarImagen = require.context('../img', true);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" >
            <img className='logo' src={cargarImagen(`./shopee-logo.png`)}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Catalogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Historias
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
