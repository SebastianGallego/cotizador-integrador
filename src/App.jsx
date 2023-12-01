import Header from "./components/Header";
import Historial from "./routes/Historial";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-800 container-md flex justify-center">
      <Header />
    </div>
  );
}

export default App;

/*
<Routes>
<Route path="/" element={<Home />} />
<Route path="/historial" element={<Historial />} />
</Routes>
*/
