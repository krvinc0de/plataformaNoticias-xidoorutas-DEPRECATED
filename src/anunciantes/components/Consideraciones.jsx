import React from 'react'

export const Consideraciones = () => {
  return (
    <>
      <div className="mb-5">
        <h4 className="text-muted">Publica tu anuncio en Xidoo Rutas</h4>
        <p className="text-muted">
          Para publicar dentro de Xidoo Rutas recuerda lo siguiente:
        </p>
        <div class="btn-group">
          <button
            class="btn btn-secondary dropdown-toggle"
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
            <li class="dropdown-item list-group-item text-justify d-flex justify-content-between align-items-start col-5">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Ortografía</div>
                Considera cuidar la ortografía de tu redacción en todo momento.
              </div>
              <span class="badge bg-primary rounded-pill">Importante!</span>
            </li>
            <li class="dropdown-item list-group-item text-justify d-flex justify-content-between align-items-start col-5">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Lenguaje</div>
                Xidoo Rutas es una aplicación para todas las edades, en tu
                redacción ten en cuenta utilizar lenguaje que no resulte
                ofensivo.
              </div>
              <span class="badge bg-primary rounded-pill">Importante!</span>
            </li>
            <li class="dropdown-item list-group-item text-justify d-flex justify-content-between align-items-start col-5">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Imagenes</div>
                Recuerda utilizar imágenes de título e imágenes para que
                aparezcan dentro del cuerpo de la publicación.
              </div>
              <span class="badge bg-primary rounded-pill">Importante!</span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
