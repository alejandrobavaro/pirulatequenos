// =========================================================
// IMPORTS PRINCIPALES
// =========================================================
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// =========================================================
// IMPORTS DE ESTILOS
// =========================================================
import './assets/scss/_01-General/_App.scss';

// =========================================================
// COMPONENTES ESTRUCTURALES
// =========================================================
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import WhatsappIcon from './componentes/WhatsappIcon';
import MainSliderFotos from './componentes/MainSliderFotos';

// =========================================================
// COMPONENTES DE TEQUEÑOS PIRULA
// =========================================================
import HomeTequenos from './componentes/HomeTequenos';
import PromosTequenos from './componentes/PromosTequenos';
import TiendaTequenos from './componentes/TiendaTequenos';
import ContactoTequenos from './componentes/ContactoTequenos';
import SomosPirulaTequenos from './componentes/SomosPirulaTequenos';
import PedidosTequenos from './componentes/PedidosTequenos';
import RegalosTequenos from './componentes/RegalosTequenos';
import ReservaTuMesa from './componentes/ReservaTuMesa';
import ContadorDiasPirula from './componentes/ContadorDiasPirula';
import UbicacionTequenosPirula from './componentes/UbicacionTequenosPirula';

// =========================================================
// COMPONENTE PRINCIPAL
// =========================================================
function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="app-container">
        
        {/* HEADER */}
        <Header />

        {/* CONTENIDO PRINCIPAL */}
        <main className="main-content">
          <div className="content-wrapper">
            <Routes>
              
              {/* RUTAS DE TEQUEÑOS PIRULA */}
              <Route path="/" element={<HomeTequenos />} />
              <Route path="/tequenos" element={<HomeTequenos />} />
              <Route path="/tequenos/promos" element={<PromosTequenos />} />
              <Route path="/tequenos/tienda" element={<TiendaTequenos />} />
              <Route path="/tequenos/contacto" element={<ContactoTequenos />} />
              <Route path="/tequenos/nosotros" element={<SomosPirulaTequenos />} />
              <Route path="/tequenos/pedidos" element={<PedidosTequenos />} />
              <Route path="/tequenos/regalos" element={<RegalosTequenos />} />
              <Route path="/tequenos/reservas" element={<ReservaTuMesa />} />
 
              <Route path="/tequenos/ubicacion" element={<UbicacionTequenosPirula />} />

              {/* RUTA POR DEFECTO */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        {/* SEPARADOR */}
        <hr className="border border-0 opacity-20" />
        
        {/* SLIDER */}
        <MainSliderFotos />
        
        {/* FOOTER */}
        <Footer />
        
        {/* WHATSAPP ICON */}
        <WhatsappIcon />
      </div>
    </Router>
  );
}

export default App;