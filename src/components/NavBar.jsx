import { NavLink } from "react-router-dom";
import { logOut } from "../firebase";
import { useUserContext } from "../context/UserContext";

export default function NavBar() {
  const handleLogout = async () => {
    await logOut();
    console.log("Cierre de Sesion");
  };

  const { user } = useUserContext();

  return (
    <nav className="h-22 py-2 container mx-auto text-gray-500 bg-gray-800 flex justify-center gap-10  items-center text-gray-200 text-2xl">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-gray-100" : " hover:text-violet-800 hover:scale-110"
        }
      >
        Inicio
      </NavLink>

      {user && (
        <NavLink
          to="/historic"
          className={({ isActive }) =>
            isActive
              ? "text-gray-100 "
              : " hover:text-violet-800 hover:scale-110"
          }
        >
          Historial
        </NavLink>
      )}

      {!user && (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-gray-100 "
              : " hover:text-violet-800 hover:scale-110"
          }
        >
          Login
        </NavLink>
      )}

      {user && (
        <NavLink
          onClick={handleLogout}
          to="/"
          className={({ isActive }) =>
            isActive ? " " : " hover:text-violet-800 hover:scale-110"
          }
        >
          Logout
        </NavLink>
      )}
    </nav>
  );
}
