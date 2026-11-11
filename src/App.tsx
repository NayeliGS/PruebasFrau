import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeV2 } from './pages/HomeV2';
import { SolutionsV2 } from './pages/SolutionsV2';
import { AboutUsV2 } from './pages/AboutUsV2';
import { PlansV2 } from './pages/PlansV2';

import { AccessibilityMenu } from './components/Designers-v2/Shared/AccessibilityMenu'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        <Route path="/soluciones" element={<SolutionsV2 />} />
        <Route path="/sobre-nosotros" element={<AboutUsV2 />} />
        <Route path="/planes" element={<PlansV2 />} />
      </Routes>
      
      <AccessibilityMenu />
      
    </BrowserRouter>
  );
}

export default App;