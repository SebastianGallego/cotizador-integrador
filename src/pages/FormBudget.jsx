import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useFirestore } from "../hooks/useFirestore";

export default function FormBudget() {
  const [datos, setDatos] = useState([]);
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [opcionesTipo, setOpcionesTipo] = useState([]);
  const [opcionesUbicacion, setOpcionesUbicacion] = useState([]);
  const [metros2, setMetros2] = useState(0);
  const [cotizacion, setCotizacion] = useState(0);
  const [checkout, setCheckout] = useState(false);

  const { addData } = useFirestore();

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

  useEffect(() => {
    if (cotizacion !== 0) {
      addCotizacion();
    }
  }, [cotizacion]);

  const calcularCotizacion = () => {
    const factorPropiedad = datos.find(
      (d) => d.categoria === "propiedad" && d.tipo === tipo
    )?.factor;

    const factorUbicacion = datos.find(
      (d) => d.categoria === "ubicacion" && d.tipo === ubicacion
    )?.factor;

    if (metros2 < 20 || metros2 > 500 || tipo === "" || ubicacion === "") {
      Swal.fire({
        icon: "error",
        title: "Error de datos Ingresados",
        text: "Seleccione Tipo, Ubicación y m2 entre 20 y 500!",
      });
      setCotizacion(0);
      return;
    }
    setCheckout(true);
    setCotizacion(
      (100 * metros2 * factorPropiedad * factorUbicacion).toFixed(2)
    );
  };

  const addCotizacion = async () => {
    // Guardar Cotizacion en Firestore
    await addData({
      fecha: new Date(),
      propiedad: tipo,
      ubicacion: ubicacion,
      metros2: metros2,
      cotizacion: cotizacion,
    });
  };

  const limpiarFormulario = () => {
    // Limpiar el formulario
    setTipo("");
    setUbicacion("");
    setMetros2(0);
    setCotizacion(0);
    setCheckout(false);
  };

  return (
    <section className=" p-4 container mx-auto bg-gray-500 flex flex-grow gap-4 justify-start  items-center  flex-col">
      <h2 className="text-3xl underline">Completa los datos solicitados</h2>
      <label className="text-2xl">Selecciona el Tipo de Propiedad</label>

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="w-1/3 block px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Selecciona Propiedad</option>
        {opcionesTipo.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>

      <label className="text-2xl">Selecciona la ubicación</label>
      <select
        value={ubicacion}
        onChange={(e) => setUbicacion(e.target.value)}
        className="w-1/3 block px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Selecciona ubicación</option>
        {opcionesUbicacion.map((ciudad) => (
          <option key={ciudad} value={ciudad}>
            {ciudad}
          </option>
        ))}
      </select>

      <label className="text-2xl">Ingresa los Metros cuadrados:</label>
      <input
        type="number"
        value={metros2}
        min="20"
        max="500"
        required
        onChange={(e) => setMetros2(parseInt(e.target.value))}
        className="text-center w-1/4 block px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></input>

      <div className="pt-4">
        <button
          onClick={checkout ? limpiarFormulario : calcularCotizacion}
          type="button"
          className="text-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2 "
        >
          {checkout ? "Limpiar" : "Cotizar"}
        </button>
      </div>
      <div className="center separador">
        <p className="text-2xl">
          Poliza: Valor de la Cuota={" "}
          <span id="valorPoliza">{cotizacion} $</span>
        </p>
      </div>
    </section>
  );
}
