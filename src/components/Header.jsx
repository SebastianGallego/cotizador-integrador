import { Player } from "@lottiefiles/react-lottie-player";
import { useUserContext } from "../context/UserContext";

export default function Header() {
  const { user } = useUserContext();

  return (
    <header className="h-22 py-2 container mx-auto bg-gray-800 flex  justify-evenly gap-6  items-center">
      <div className="flex gap-6 items-center">
        <Player
          src="https://lottie.host/358c9f74-7b1b-48ed-8913-bb4e89ca73ea/kqNdnSR6BA.json"
          className="player w-16 h-16"
          loop
          autoplay
          speed={0.2}
        />
        <h1 className="ps-10 text-gray-400 text-5xl">Seguros React</h1>
      </div>
      <div className="flex gap-3  items-center">
        <p className=" text-gray-400 text-xl">Bienvenido: </p>
        <p className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
          {user?.email || "Invitado"}
        </p>
      </div>
    </header>
  );
}
