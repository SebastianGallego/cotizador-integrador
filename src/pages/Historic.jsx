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
        deleteData(id);
      }
    });
  };

  const deleteAllBudgets = async () => {
    Swal.fire({
      title: "Está seguro de Eliminar todas las Cotizaciones?",
      text: "Estas a tiempo de arrepentirte!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        //recorro con un map y elimino pasando el id
        //No se recomienda eliminar datos, ademas estoy generando
        //muchas consultas a la BD
        data.map((poliza) => deleteData(poliza.id));
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

  if (loading)
    return (
      <section className=" p-4 container mx-auto text-center   overflow-x-auto bg-gray-500 ">
        <p className="text-3xl text-gray-200 pb-4">Cargando datos...</p>
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </section>
    );
  if (error)
    return (
      <section className=" p-4 container mx-auto text-center   overflow-x-auto bg-gray-500 ">
        <p className="text-3xl text-gray-200 pb-4">⛔ Error al cargar datos</p>
      </section>
    );

  return (
    <section className="h-[528px] p-4 container mx-auto text-center   overflow-x-auto bg-gray-500 ">
      <h1 className="text-3xl text-gray-200 pb-4">
        Historial de Cotizaciones en Base de Datos
      </h1>
      <table className="mx-auto w-[70%]  text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Fecha de cotización
            </th>
            <th>Propiedad</th>
            <th scope="col" className="px-6 py-3">
              Ubicación
            </th>
            <th scope="col" className="px-6 py-3">
              Metros cuadrados
            </th>
            <th scope="col" className="px-6 py-3">
              Cuota
            </th>
            <th scope="col" className="px-6 py-3">
              Cotización
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((poliza) => (
            <tr
              key={poliza.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{formatDate(poliza.fecha)}</td>

              <td className="px-6 py-2">{poliza.propiedad}</td>
              <td className="px-6 py-2">{poliza.ubicacion}</td>
              <td className="px-6 py-2">{poliza.superficie}</td>
              <td className="px-6 py-2">{poliza.cuota}</td>
              <td className="px-6 py-2">
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

      {data.length > 0 && (
        <button
          onClick={deleteAllBudgets}
          type="button"
          className="my-5 text-center text-white bg-gradient-to-br from-red-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2 "
        >
          Eliminar Todas las Cotizaciones
        </button>
      )}
    </section>
  );
}
