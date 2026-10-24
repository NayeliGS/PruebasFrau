import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SolutionsV2 } from './pages/SolutionsV2';
import { AboutUsV2 } from './pages/AboutUsV2';
// 1. Importa tu página de prueba de fuentes (Ajusta la ruta si no está en 'pages')
import { PruebaFonts } from './pages/PruebaFonts'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SolutionsV2 />} />
        <Route path="/soluciones" element={<SolutionsV2 />} />
        <Route path="/sobre-nosotros" element={<AboutUsV2 />} />
        
        {/* 2. Agrega la ruta exacta que pusiste en el Navbar */}
        <Route path="/fonts" element={<PruebaFonts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;