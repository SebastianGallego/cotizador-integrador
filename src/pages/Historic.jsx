import { useUserContext } from "../context/UserContext";
export default function Historic() {
  const { user } = useUserContext();

  return (
    <section className=" p-4 container mx-auto bg-gray-500 flex flex-grow gap-4 justify-start  items-center  flex-col">
      <h1>Historial</h1>
      <p>{user?.email}</p>
    </section>
  );
}
