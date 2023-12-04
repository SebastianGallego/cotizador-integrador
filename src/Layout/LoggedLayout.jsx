import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LoggedLayout = () => {
  const { user } = useUserContext();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default LoggedLayout;
