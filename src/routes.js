import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
<<<<<<< HEAD
=======
import ScrollToTop from "componentes/ScrollToTop";
>>>>>>> origin/master
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
<<<<<<< HEAD
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import ScrollToTop from "componentes/ScrollToTop";
=======
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
>>>>>>> origin/master

function AppRoutes() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <ScrollToTop/>
=======
      <ScrollToTop />
>>>>>>> origin/master
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
<<<<<<< HEAD

=======
        
>>>>>>> origin/master
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
