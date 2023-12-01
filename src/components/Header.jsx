import { NavLink } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Header() {
  let usuarioAutenticado = false;

  return (
    <header className="h-40 container  flex gap-4 justify-between items-center">
      <Player
        src="https://lottie.host/358c9f74-7b1b-48ed-8913-bb4e89ca73ea/kqNdnSR6BA.json"
        className="player"
        loop
        autoplay
        speed={0.2}
        style={{ height: "100px", width: "100px" }}
      />
      <h1 className="text-gray-400 text-5xl">Seguros React</h1>

      <nav>
        {usuarioAutenticado && (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/historial"> Historial</NavLink>
          </>
        )}
      </nav>
      <button
        type="button"
        className="h-10 w-25   text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-xl rounded-lg text-xl px-5  text-center "
      >
        Login
      </button>
    </header>
  );
}
