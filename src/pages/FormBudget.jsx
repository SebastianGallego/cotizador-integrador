//Aca tengo que leer el json
//Cargar los select
//Calcular la cotizacion
//Guardar en firestore

import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function FormBudget() {
  const [datos, setDatos] = useState([]);
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [opcionesTipo, setOpcionesTipo] = useState([]);
  const [opcionesUbicacion, setOpcionesUbicacion] = useState([]);
  const [metros2, setMetros2] = useState(0);
  const [cotizacion, setCotizacion] = useState(0);

  useEffect(() => {
    fetch("/datos.json")
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  useEffect(() => {
    // Filtrar tipos de propiedad y ciudades desde los datos
    // para cargar por separado en los select
    const tiposPropiedadFiltrados = datos
      .filter((dato) => dato.categoria === "propiedad")
      .map((dato) => dato.tipo);
    const ciudadesFiltradas = datos
      .filter((dato) => dato.categoria === "ubicacion")
      .map((dato) => dato.tipo);

    setOpcionesTipo([...new Set(tiposPropiedadFiltrados)]); //Elimina Duplicados
    setOpcionesUbicacion([...new Set(ciudadesFiltradas)]); //Elimina Duplicados
  }, [datos]);

  const calcularCotizacion = () => {
    //Aca tengo que hacer el calculo usando tipo, ubicacion y metros2
    //
    // Ademas llamar a una funcion que guarde en firestore

    console.log(tipo);
    console.log(ubicacion);
    console.log(metros2);

    const factorPropiedad = datos.find(
      (d) => d.categoria === "propiedad" && d.tipo === tipo
    )?.factor;

    const factorUbicacion = datos.find(
      (d) => d.categoria === "ubicacion" && d.tipo === ubicacion
    )?.factor;

    // Verifico que ambos factores sean numéricos antes de realizar operaciones
    if (
      typeof factorPropiedad === "number" &&
      typeof factorUbicacion === "number"
    ) {
      console.log(factorPropiedad);
      console.log(factorUbicacion);
    }

    if (metros2 < 20 || metros2 > 500 || tipo === "" || ubicacion === "") {
      Swal.fire({
        icon: "error",
        title: "Error de datos",
        text: "Ingresar m2 entre 20 y 500!",
      });
      setCotizacion(0);
      return;
    }
    setCotizacion(100 * metros2 * factorPropiedad * factorUbicacion);
    console.log(cotizacion);
  };

  return (
    <section className="p-4 container mx-auto bg-gray-500 flex flex-grow gap-4 justify-start  items-center  flex-col">
      <h2 className="text-3xl underline">Completa los datos solicitados</h2>
      <label className="text-2xl">Selecciona el Tipo de Propiedad</label>

      <select onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecciona Propiedad</option>
        {opcionesTipo.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>

      <label className="text-2xl">Selecciona su ubicación</label>
      <select onChange={(e) => setUbicacion(e.target.value)}>
        <option value="">Selecciona Ubicación</option>
        {opcionesUbicacion.map((ciudad) => (
          <option key={ciudad} value={ciudad}>
            {ciudad}
          </option>
        ))}
      </select>

      <label className="text-2xl">Ingresa los Metros cuadrados:</label>
      <input
        type="number"
        id="metros2"
        min="20"
        max="500"
        required
        onChange={(e) => setMetros2(parseInt(e.target.value))}
        className=" text-gray-900 p-1 text-center text-lg w-20 font-medium bg-gray-300 border-2 border-gray-900"
      ></input>

      <div className="pt-4">
        <button
          onClick={calcularCotizacion}
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2 text-center "
        >
          Cotizar
        </button>
      </div>
      <div className="center separador">
        <p className="text-2xl">
          Poliza: Valor de la Cuota= ${" "}
          <span id="valorPoliza">{cotizacion}</span>
        </p>
      </div>
    </section>
  );
}
