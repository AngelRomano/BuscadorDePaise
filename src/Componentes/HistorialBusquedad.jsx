import React from 'react';

const HistorialBusquedad = ({ historial }) => {
  return (
    <div className="historial-busqueda">
      <h2>Historial de Búsqueda</h2>
      <ul>
        {historial.map((pais, indice) => (
          <li key={indice}>{pais}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistorialBusquedad;
