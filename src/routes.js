import { Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import Main from "./pages/Main";

const Rotas = () => (
  <Routes>
    <Route index path="/" element={<Main />} />
    <Route path="/article/:id" element={<Articles />} />
  </Routes>
);

export default Rotas;
