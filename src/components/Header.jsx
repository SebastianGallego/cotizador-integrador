import { Player } from "@lottiefiles/react-lottie-player";

export default function Header() {
  return (
    <header className="h-22 py-2 container mx-auto bg-gray-800 flex justify-start gap-6  items-center">
      <Player
        src="https://lottie.host/358c9f74-7b1b-48ed-8913-bb4e89ca73ea/kqNdnSR6BA.json"
        className="player ps-10"
        loop
        autoplay
        speed={0.2}
        style={{ height: "100px", width: "100px" }}
      />
      <h1 className="ps-10 text-gray-400 text-5xl">Seguros React</h1>
    </header>
  );
}
