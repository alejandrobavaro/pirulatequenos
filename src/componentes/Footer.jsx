// =========================================================
// Footer.jsx - PIE DE PÁGINA DE PIRULA TEQUEÑOS
// VERSIÓN SIMPLE Y COHERENTE CON LA ESTÉTICA DE LA PÁGINA
// =========================================================
import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_03-Componentes/_Footer.scss";
import { 
  BsInstagram, 
  BsWhatsapp, 
  BsTelephone, 
  BsEnvelope, 
  BsGeoAlt,
  BsTruck,
  BsLightning
} from "react-icons/bs";
import { GiCorn } from "react-icons/gi";

// =========================================================
function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const añoActual = new Date().getFullYear();

  // =========================================================
  return (
    <footer className="footer-pirula">
      
      {/* =========================================================
          FRASE DE IMPACTO - NEGRO CON TEXTO AMARILLO (como en Home)
          ========================================================= */}
      <div className="frase-impacto">
        <div className="frase-container">
          <GiCorn className="frase-icon" />
          <p className="frase-texto">
            "El verdadero sabor tequeñero en cada bocado"
          </p>
          <GiCorn className="frase-icon" />
        </div>
      </div>

      {/* =========================================================
          CONTENIDO PRINCIPAL - 3 COLUMNAS
          ========================================================= */}
      <div className="footer-grid">
        
        {/* COLUMNA 1 - LOGO Y DESCRIPCIÓN */}
        <div className="footer-col">
          <div className="footer-logo">
            <GiCorn className="logo-icon" />
            <span className="logo-title">PIRULA</span>
            <span className="logo-sub">TEQUEÑOS</span>
          </div>
          <p className="footer-desc">
            Los auténticos tequeños tequeñeros, hechos con amor y tradición desde 2015.
          </p>
          <div className="footer-badge">
            <BsLightning /> 100% ARTESANALES
          </div>
        </div>

        {/* COLUMNA 2 - ENLACES RÁPIDOS */}
        <div className="footer-col">
          <h3>ENLACES</h3>
          <ul className="footer-links">
            <li><Link to="/tequenos" onClick={scrollToTop}>Inicio</Link></li>
            <li><Link to="/tequenos/tienda" onClick={scrollToTop}>Tienda</Link></li>
            <li><Link to="/tequenos/promos" onClick={scrollToTop}>Promociones</Link></li>
            <li><Link to="/tequenos/nosotros" onClick={scrollToTop}>Nosotros</Link></li>
            <li><Link to="/tequenos/contacto" onClick={scrollToTop}>Contacto</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3 - CONTACTO */}
        <div className="footer-col">
          <h3>CONTACTO</h3>
          
          <div className="contact-item">
            <BsWhatsapp className="contact-icon" />
            <a href="https://wa.me/584141234567">+58 414-1234567</a>
          </div>

          <div className="contact-item">
            <BsTelephone className="contact-icon" />
            <a href="tel:+582121234567">(0212) 123-4567</a>
          </div>

          <div className="contact-item">
            <BsEnvelope className="contact-icon" />
            <a href="mailto:info@tequenospirula.com">info@tequenospirula.com</a>
          </div>

          <div className="contact-item">
            <BsGeoAlt className="contact-icon" />
            <span>Mar del Plata, Argentina</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          BANNER DE ENVÍOS - AMARILLO CON TEXTO NEGRO
          ========================================================= */}
      <div className="envio-banner">
        <BsTruck className="envio-icon" />
        <span>ENVÍOS A TODO EL PAÍS - 5+ DOCENAS GRATIS</span>
        <BsTruck className="envio-icon" />
      </div>

      {/* =========================================================
          BOTTOM - REDES Y COPYRIGHT
          ========================================================= */}
      <div className="footer-bottom">
        
        <div className="redes-sociales">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="red-social">
            <BsInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="red-social">
            <BsInstagram /> {/* Reemplazar con BsFacebook si lo tienes */}
          </a>
          <a href="https://wa.me/584141234567" target="_blank" rel="noopener noreferrer" className="red-social">
            <BsWhatsapp />
          </a>
        </div>

        <div className="copyright">
          <span>© {añoActual} Pirula Tequeños</span>
          <span className="separator">|</span>
          <span>HECHO CON AMOR</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;