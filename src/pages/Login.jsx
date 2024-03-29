import { useEffect, useState } from "react";
import { userLogin } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserContext } from "../context/UserContext.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) navigate("/historic");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userLogin({ email, password }); //Equivale a email:email, password:password
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error de Autenticación",
        text: "Usuario o Contraseña Incorrectos",
      });
      navigate("/");
    }
  };

  return (
    <section className="h-[528px] p-4 container mx-auto bg-gray-500 flex flex-grow gap-4 justify-start  items-center  flex-col">
      <h1 className="text-3xl text-gray-200 underline">Formulario de Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="block text-lg font-medium text-gray-900 dark:text-white">
          Usuario:
        </label>
        <input
          type="text"
          name="email"
          id="inputEmail"
          placeholder="Ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label className="block text-lg font-medium text-gray-900 dark:text-white">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="inputPassword"
          placeholder="Ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="submit"
          className="h-10 w-25   text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-xl rounded-lg text-xl px-5  text-center "
        >
          Ingresar
        </button>
      </form>
    </section>
  );
}
