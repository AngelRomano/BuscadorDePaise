import React from 'react';

const BarraBusqueda = ({ onBuscar }) => {
  const manejarCambio = (evento) => {
    onBuscar(evento.target.value);
  };

  return (
    <div className="barra-busqueda">
      <input
        type="text"
        placeholder="Busca un país..."
        onChange={manejarCambio}
      />
    </div>
  );
};

export default BarraBusqueda;
