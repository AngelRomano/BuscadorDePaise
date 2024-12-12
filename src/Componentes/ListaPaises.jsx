import React from 'react';

const ListaPaises = ({ paises, sinResultados }) => {
  if (sinResultados) {
    return <p>No se encontraron países. Verifica si has puesto el nombre correcto</p>;
  }

  return (
    <div className="lista-paises">
      {paises.map((pais) => (
        <div key={pais.cca3} className="pais">
          <img src={pais.flags.svg} alt={`Bandera de ${pais.name.common}`} />
          <h2>{pais.name.common}</h2>
          <p>Capital: {pais.capital ? pais.capital[0] : 'N/A'}</p>
          <p>Población: {pais.population.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaPaises;
