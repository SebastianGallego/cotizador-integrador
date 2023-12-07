import { useEffect } from "react";

import { useFirestore } from "../hooks/useFirestore";

export default function Historic() {
  const { data, error, loading, getData } = useFirestore();

  useEffect(() => {
    getData();
  }, []);

  const formatDate = (timestampObject) => {
    const timestamp = timestampObject.seconds * 1000; // Convertir segundos a milisegundos
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses comienzan desde 0, por eso se suma 1
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al cargar datos</p>;

  return (
    <section className=" p-4 container mx-auto text-center   overflow-x-auto bg-gray-500 ">
      <h1 className="text-3xl text-gray-200 pb-4">
        Historial de Cotizaciones en Base de Datos
      </h1>
      <table className="mx-auto w-[80%] border-collapse border">
        <thead>
          <tr>
            <th className="border border-black px-4 sm:px-4 py-2 text-xl text-bold">
              Fecha de cotización
            </th>
            <th className="border border-black px-4 sm:px-4 py-2 text-xl text-bold">
              Propiedad
            </th>
            <th className="border border-black px-4  sm:px-4 py-2 text-xl text-bold">
              Ubicación
            </th>
            <th className="border border-black px-4 sm:px-4 py-2 text-xl text-bold">
              Metros cuadrados
            </th>
            <th className="border border-black px-4 sm:px-4 py-2 text-xl text-bold">
              Cuota
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((poliza) => (
            <tr key={poliza.id} className="border-b border-black">
              <td className="border border-black sm:px-4 px-4 py-2 text-xl text-bold">
                {formatDate(poliza.fecha)}
              </td>

              <td className="border border-black sm:px-4 px-4 py-2 text-xl text-bold">
                {poliza.propiedad}
              </td>
              <td className="border border-black sm:px-4 px-4 py-2 text-xl text-bold">
                {poliza.ubicacion}
              </td>
              <td className="border border-black sm:px-4 px-4 py-2 text-xl text-bold">
                {poliza.superficie}
              </td>
              <td className="border border-black sm:px-4 px-4 py-2 text-xl text-bold">
                {poliza.cuota}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
