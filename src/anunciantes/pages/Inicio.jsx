import React, { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import "../styles/inicioStyle.css";
import crear from "../styles/img/crear.png";
import usu from "../styles/img/usu.png";
import logo from "../styles/img/logo.png";
import publi from "../styles/img/usu.png";
export const Inicio = () => {
  const { usuario } = useContext(AuthContext);

  return (
    <>
      <header className="text-center text-black masthead">
        <div className="container">
          <img
            className="border img-fluid d-block mx-auto mb-4 mt-4"
            src="https://salamanca.gob.mx/wp-content/uploads/2021/10/logo-salamanca-21-24.png"
            alt="..."
          />
          <h1>{usuario?.nombre}</h1>
          <hr className="star-light" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} alt="xidoo rutas" width="250" height="275" />
            </div>
            <div className="col" id="texto">
              <h3>Acerca de Xidoo Rutas: </h3>
              <p id="letras">
                Xidoo rutas ofrece un portal de noticias oficiales que serán
                verificadas por las instituciones adecuadas para su publicación
                y así mantener a los salamantinos al días con las noticias más
                importantes y relevantes
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col" id="texto">
              <h3>Creacion de publicaciones </h3>
              <p id="letras">
                El portal de noticias permitirá a las instituciones
                correspondientes y verificadas crear diversas noticias
                complementadas con imágenes y texto
              </p>
            </div>
            <div className="col">
              <img
                src={crear}
                alt="crear publicacion"
                width="450"
                height="275"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col" id="img">
              <img src={publi} alt="publicaciones" />
            </div>
            <div className="col" id="texto">
              <h3>publicaciones </h3>
              <p id="letras">
                De igual manera se contará con una página que te permitirá
                navegar entre las noticias mas recientes y antiguas pues se
                encontraran almacenadas dentro de una base de datos en todo
                momento
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col" id="texto">
              <h3>Usuario </h3>
              <p id="letras">
                Los usuarios que podrán acceder a este portal serán de diferente
                índole debido a que no se le permitirá a cualquiera la creación
                de noticias sin verificación alguna
              </p>
            </div>
            <div className="col" id="img">
              <img src={usu} alt="usuario" />
            </div>
          </div>
        </div>
      </header>
      <br />
      <br />
      <br />
    </>
  );
};
