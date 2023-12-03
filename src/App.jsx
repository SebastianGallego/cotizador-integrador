//
import { Routes, Route } from "react-router-dom";

//Componentes y Rutas
import Header from "./components/Header";
import FormBudget from "./pages/FormBudget";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <FormBudget />

      <Footer />
    </>
  );
}

export default App;

/*
ver como ordenar la funcionalidad
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historial" element={<Historial />} />
        
      </Routes>
*/
