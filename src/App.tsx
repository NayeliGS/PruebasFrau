import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SolutionsV2 } from './pages/SolutionsV2';
import { AboutUsV2 } from './pages/AboutUsV2';
import { PruebaFonts } from './pages/PruebaFonts'; 
// 👇 1. Importa tu nueva página de Home
import { HomeV2 } from './pages/HomeV2'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 👇 2. Cambia element={<SolutionsV2 />} por <HomeV2 /> */}
        <Route path="/" element={<HomeV2 />} />
        
        <Route path="/soluciones" element={<SolutionsV2 />} />
        <Route path="/sobre-nosotros" element={<AboutUsV2 />} />
        <Route path="/fonts" element={<PruebaFonts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;