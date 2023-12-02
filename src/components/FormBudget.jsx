export default function FormBudget() {
  return (
    <section className="p-4 container mx-auto bg-gray-500 flex flex-grow gap-4 justify-start  items-center  flex-col">
      <h2 className="text-3xl underline">Completa los datos solicitados</h2>
      <label className="text-2xl">Selecciona el tipo de propiedad</label>
      <select
        id="propiedad"
        className="block p-1 text-lg w-80 font-medium bg-gray-300 border-2 border-gray-900  text-gray-900 "
      >
        <option selected disabled>
          ...
        </option>
      </select>
      <label className="text-2xl">Selecciona su ubicación</label>
      <select
        id="ubicacion"
        className="block p-1 text-lg w-80 font-medium bg-gray-300 border-2 border-gray-900  text-gray-900"
      >
        <option selected disabled>
          ...
        </option>
      </select>
      <label className="text-2xl">Ingresa los Metros cuadrados:</label>
      <input
        type="number"
        id="metros2"
        min="20"
        max="500"
        required
        className=" text-gray-900 p-1 text-center text-lg w-20 font-medium bg-gray-300 border-2 border-gray-900"
      ></input>
      <div className="center separador">
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2 text-center ">
          Cotizar
        </button>
      </div>
      <div className="center separador">
        <p className="text-2xl">
          Poliza: Valor de la Cuota= $ <span id="valorPoliza">0.00</span>
        </p>
      </div>
    </section>
  );
}
