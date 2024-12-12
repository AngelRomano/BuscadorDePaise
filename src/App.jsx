import React, { useState, useEffect } from "react";
import BarraBusqueda from "./Componentes/BarraBusquedad";
import ListaPaises from "./Componentes/ListaPaises";
import HistorialBusqueda from "./Componentes/HistorialBusquedad";
import "./App.css";

const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const [paises, setPaises] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [sinResultados, setSinResultados] = useState(false);

  useEffect(() => {
    if (busqueda.trim() === "") {
      setPaises([]);
      setSinResultados(false);
      return;
    }

    const obtenerPaises = async () => {
      try {
        const respuesta = await fetch(
          `https://restcountries.com/v3.1/name/${busqueda}`
        );
        if (!respuesta.ok) throw new Error("No encontrado");
        const datos = await respuesta.json();
        setPaises(datos);
        setSinResultados(false);

        const nombrePais = datos[0]?.name.common; 
        if (nombrePais) {
          setHistorial((prevHistorial) => {
            
            const nuevoHistorial = [nombrePais, ...prevHistorial.filter(pais => pais !== nombrePais)];
            return nuevoHistorial.slice(0, 5); 
          });
        }
      } catch {
        setPaises([]);
        setSinResultados(true);
      }
    };

    obtenerPaises();
  }, [busqueda]);

  return (
    <div className="app">
      <h1>Buscador de Países</h1>
      <BarraBusqueda onBuscar={setBusqueda} />
      <ListaPaises paises={paises} sinResultados={sinResultados} />
      <HistorialBusqueda historial={historial} />
    </div>
  );
};

export default App;
