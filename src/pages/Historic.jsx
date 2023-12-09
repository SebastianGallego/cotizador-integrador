import { useEffect } from "react";
import { useFirestore } from "../hooks/useFirestore";
import Swal from "sweetalert2";

export default function Historic() {
  const { data, error, loading, getData, deleteData } = useFirestore();

  useEffect(() => {
    getData();
  }, []);

  //Borro cotizacion
  const deleteBudget = async (id) => {
    Swal.fire({
      title: "Está seguro de Eliminar esta Cotización?",
      text: "Estas a tiempo de arrepentirte!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cotizacion Eliminada!", "success");
        deleteData(id);
      }
    });
  };

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
            <th className="border border-black px-4 sm:px-4 py-2 text-xl text-bold">
              Cotización
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((poliza) => (
            <tr key={poliza.id} className="border-b border-black">
              <td className="border border-black sm:px-4 px-4 py-2 text-xl text-bold">
                {formatDate(poliza.fecha)}
              </td>

              <td className="border border-black sm:px-4 px-4 py-1 text-xl text-bold">
                {poliza.propiedad}
              </td>
              <td className="border border-black sm:px-4 px-4 py-1 text-xl text-bold">
                {poliza.ubicacion}
              </td>
              <td className="border border-black sm:px-4 px-4 py-1 text-xl text-bold">
                {poliza.superficie}
              </td>
              <td className="border border-black sm:px-4 px-4 py-1 text-xl text-bold">
                {poliza.cuota}
              </td>
              <td className="border border-black sm:px-4 px-4 py-1 text-xl text-bold">
                <button
                  onClick={() => deleteBudget(poliza.id)}
                  type="button"
                  className=" text-xl px-5 py-2 text-center "
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
