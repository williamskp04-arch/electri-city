/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ElectricalInspection from './pages/ElectricalInspection';
import SurgeProtection from './pages/SurgeProtection';
import SpecialtyServices from './pages/SpecialtyServices';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 selection:bg-[#F97316]/20 selection:text-slate-900 overflow-x-hidden flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/electrical-inspection" element={<ElectricalInspection />} />
            <Route path="/surge-protection" element={<SurgeProtection />} />
            <Route path="/specialty-services" element={<SpecialtyServices />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

