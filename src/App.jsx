//
import { Routes, Route } from "react-router-dom";

//Componentes y Rutas
import Header from "./components/Header";
import Historial from "./routes/Historial";
import NotFound404 from "./routes/NotFound404";
import Home from "./routes/Home";
import FormBudget from "./components/FormBudget";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

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
