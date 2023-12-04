import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <section className=" p-4 container mx-auto bg-gray-500 flex flex-grow gap-4 justify-start  items-center  flex-col">
      Pagina No encontrada ❌<Link to="/">Volver</Link>
    </section>
  );
}
