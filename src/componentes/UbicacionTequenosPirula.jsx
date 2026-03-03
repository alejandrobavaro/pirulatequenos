// =========================================================
// UbicacionTequenosPirula.jsx - UBICACIÓN DE PIRULA TEQUEÑOS
// CON LA MISMA ESTÉTICA DE LA PÁGINA
// =========================================================
import React from "react";
import "../assets/scss/_03-Componentes/_UbicacionTequenosPirula.scss";
import { FaWhatsapp, FaShare, FaMapMarkerAlt, FaTruck, FaStore } from "react-icons/fa";
import { GiCorn } from "react-icons/gi";
import { BsLightning } from "react-icons/bs";

// =========================================================
function UbicacionTequenosPirula() {

  // =========================================================
  // FUNCIÓN PARA COMPARTIR UBICACIÓN
  // =========================================================
  const shareLocation = () => {
    const mapsUrl = 'https://maps.app.goo.gl/ejemplo';
    
    if (navigator.share) {
      navigator.share({
        title: 'Pirula Tequeños - Local',
        text: 'Av. Principal de Las Mercedes, Local 5, Mar del Plata',
        url: mapsUrl
      });
    } else {
      window.open(mapsUrl, '_blank');
    }
  };

  // =========================================================
  return (
    <div className="ubicacion-pirula">
      
      {/* =========================================================
          HERO SECTION - ROJO CON TEXTO BLANCO/AMARILLO
          ========================================================= */}
      <section className="ubicacion-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-white">VISITANOS</span>{' '}
            <span className="title-yellow">EN NUESTRO LOCAL</span>
          </h1>
          <p className="hero-subtitle">
            Vení a conocer nuestra tequeñeria y probá los mejores tequeños
          </p>
        </div>
      </section>

      {/* =========================================================
          FRASE DE IMPACTO - NEGRO CON TEXTO AMARILLO
          ========================================================= */}
      <section className="frase-impacto">
        <div className="frase-container">
          <GiCorn className="frase-icon" />
          <p className="frase-texto">
            "El verdadero sabor tequeñero te espera"
          </p>
          <GiCorn className="frase-icon" />
        </div>
      </section>

      {/* =========================================================
          TARJETA DE UBICACIÓN PRINCIPAL
          ========================================================= */}
      <section className="ubicacion-card">
        
        <div className="direccion-principal">
          <FaMapMarkerAlt className="location-icon" />
          <h2>NUESTRA <span className="highlight">TEQUEÑERIA</span></h2>
          <p className="direccion">Av. Principal de Las Mercedes, Local 5</p>
          <p className="ciudad">Mar del Plata</p>
        </div>

        {/* =========================================================
            BOTONES DE ACCIÓN
            ========================================================= */}
        <div className="acciones-container">
          <button 
            className="btn-accion whatsapp"
            onClick={() => window.open('https://wa.me/584141234567', '_blank')}
          >
            <FaWhatsapp /> CONTACTO
          </button>
          
          <button 
            className="btn-accion maps"
            onClick={shareLocation}
          >
            <FaMapMarkerAlt /> CÓMO LLEGAR
          </button>
          
          <button 
            className="btn-accion compartir"
            onClick={shareLocation}
          >
            <FaShare /> COMPARTIR
          </button>
        </div>
      </section>

      {/* =========================================================
          MAPA
          ========================================================= */}
      <section className="mapa-section">
        <div className="mapa-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.4!2d-66.8!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA2NsKwNDgnMDAuMCJX!5e0!3m2!1ses!2sve!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación Pirula Tequeños"
          ></iframe>
        </div>
      </section>

      {/* =========================================================
          HORARIOS DE ATENCIÓN
          ========================================================= */}
      <section className="horarios-section">
        <h3>HORARIOS DE <span className="highlight">ATENCIÓN</span></h3>
        
        <div className="horarios-grid">
          <div className="horario-item">
            <span className="dia">Lunes a Viernes:</span>
            <span className="hora">9:00 AM - 7:00 PM</span>
          </div>
          <div className="horario-item">
            <span className="dia">Sábados:</span>
            <span className="hora">9:00 AM - 3:00 PM</span>
          </div>
          <div className="horario-item">
            <span className="dia">Domingos:</span>
            <span className="hora">Cerrado (solo delivery)</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INFORMACIÓN DE DELIVERY
          ========================================================= */}
      <section className="delivery-info">
        <FaTruck className="delivery-icon" />
        <h3>¿PREFERÍS PEDIR A DOMICILIO?</h3>
        <p>Hacé tu pedido online y te lo llevamos</p>
        <a href="/tequenos/tienda" className="btn-delivery">
          <BsLightning /> PEDIR AHORA
        </a>
      </section>

      {/* =========================================================
          BANNER DE PROMO - AMARILLO CON TEXTO NEGRO
          ========================================================= */}
      <section className="promo-banner">
        <FaStore className="banner-icon" />
        <p>PRESENTANDO ESTE MAPA TENÉS <span className="promo-highlight">15% DE DESCUENTO</span> EN TU PRIMERA COMPRA</p>
        <FaStore className="banner-icon" />
      </section>
    </div>
  );
}

export default UbicacionTequenosPirula;