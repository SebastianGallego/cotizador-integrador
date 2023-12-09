import { Outlet } from "react-router-dom";
import UserContextProvider from "../context/UserContext.jsx";
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const Root = () => {
  return (
    <UserContextProvider>
      <Header />
      <NavBar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </UserContextProvider>
  );
};

export default Root;
