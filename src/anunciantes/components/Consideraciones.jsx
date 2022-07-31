import React from 'react'

export const Consideraciones = () => {
  return (
    <>
      <div className="mb-5 mt-3">
        <h4 className="text-muted">Publica tu anuncio en Xidoo Rutas</h4>
        <p className="text-muted">
          Para publicar dentro de Xidoo Rutas recuerda lo siguiente:
        </p>
        <div className="btn-group">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuClickableInside"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Ver consideraciones
          </button>
          <ol
            className="dropdown-menu"
            aria-labelledby="dropdownMenuClickableInside"
          >
            <li className="dropdown-item list-group-item text-justify d-flex justify-content-between align-items-start col-5">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Ortografía</div>
                  Cuida la ortografía de tu redacción en todo momento.
              </div>
              <span className="badge bg-primary rounded-pill">Importante!</span>
            </li>
            <li className="dropdown-item list-group-item text-justify d-flex justify-content-between align-items-start col-5">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Lenguaje</div>
                Xidoo Rutas es una aplicación para todas las edades, en tu
                redacción ten en cuenta utilizar lenguaje que no resulte
                ofensivo.
              </div>
              <span className="badge bg-primary rounded-pill">Importante!</span>
            </li>
            <li className="dropdown-item list-group-item text-justify d-flex justify-content-between align-items-start col-5">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Imagenes</div>
                Recuerda utilizar imágenes de título e imágenes para que
                aparezcan dentro del cuerpo de la publicación.
              </div>
              <span className="badge bg-primary rounded-pill">Importante!</span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
