import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Asegúrate de que las rutas coincidan con la ubicación real de tus archivos
import { SolutionsV2 } from './pages/SolutionsV2'; 
import { AboutUsV2 } from './pages/AboutUsV2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal que carga tu vista de soluciones actual */}
        <Route path="/" element={<SolutionsV2 />} />
        <Route path="/soluciones" element={<SolutionsV2 />} />
        
        {/* La nueva ruta para la página en la que empezarás a trabajar */}
        <Route path="/sobre-nosotros" element={<AboutUsV2 />} />
        
        {/* Rutas futuras */}
        {/* <Route path="/planes" element={<Plans />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;