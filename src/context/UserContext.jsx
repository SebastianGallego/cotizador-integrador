//Crea el contecto del estado de usuario
import { useState, useEffect, useContext, createContext } from "react";

//Conexion con Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsuscribe;
  }, []);

  if (user === false) return <p>Loading app...</p>;

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

//Crea un hook para acceder al contexto
export const useUserContext = () => useContext(UserContext);
