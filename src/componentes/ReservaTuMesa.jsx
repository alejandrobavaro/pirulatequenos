// =========================================================
// ReservaTuMesa.jsx - RESERVA DE MESAS PARA PIRULA TEQUEÑOS
// CON NUEVO COLOR #8b4242, LOGO Y ANIMACIONES
// =========================================================
import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/scss/_03-Componentes/_ReservaTuMesa.scss";
import { FaWhatsapp, FaChair, FaUserFriends, FaStar } from "react-icons/fa";
import { GiCorn, GiHotDog, GiCheeseWedge } from "react-icons/gi";
import { BsLightning, BsCalendarCheck, BsClock, BsPeople } from "react-icons/bs";

// =========================================================
const ReservaTuMesa = () => {
  // =========================================================
  const navigate = useNavigate();

  // =========================================================
  // FUNCIÓN PARA REDIRECCIÓN EXTERNA
  // =========================================================
  const handleExternalRedirect = () => {
    window.open("https://reservas-pirula.netlify.app/", "_blank");
  };

  // =========================================================
  return (
    <div className="reserva-pirula">
      
      {/* =========================================================
          HERO SECTION - CON NUEVO COLOR Y LOGO
          ========================================================= */}
      <section className="reserva-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          
      
          
          <h1 className="hero-title">
            <span className="title-white">RESERVÁ</span>{' '}
            <span className="title-yellow">TU MESA</span>
          </h1>
          <p className="hero-subtitle">
            Disfrutá de los mejores tequeños en nuestro local
          </p>
          <div className="hero-badge">
            <FaChair className="badge-icon pulse" />
            <span>MESAS LIMITADAS</span>
            <FaChair className="badge-icon pulse" />
          </div>
        </div>
      </section>

      {/* =========================================================
          DECORACIÓN (como en Home)
          ========================================================= */}
      <div className="reserva-decoration">
        <span className="deco-line"></span>
        <GiCheeseWedge className="deco-icon" />
        <span className="deco-line"></span>
      </div>

      {/* =========================================================
          FRASE DE IMPACTO - NEGRO CON TEXTO AMARILLO
          ========================================================= */}
      <section className="frase-impacto">
        <div className="frase-container">
          <GiCorn className="frase-icon" />
          <p className="frase-texto">
            "El sabor tequeñero te espera, reservá tu lugar"
          </p>
          <GiCorn className="frase-icon" />
        </div>
      </section>

      {/* =========================================================
          CONTENIDO PRINCIPAL
          ========================================================= */}
      <section className="reserva-content">
        
        {/* =========================================================
            TARJETA DE INFORMACIÓN PRINCIPAL (MEJORADA)
            ========================================================= */}
        <div className="reserva-card">
          
          <div className="card-header">
            <div className="header-icon-wrapper">
              <FaUserFriends className="header-icon pulse" />
            </div>
            <h2>RESERVÁ <span className="highlight">AHORA</span></h2>
          </div>

          {/* =========================================================
              ALERTA - MESAS DISPONIBLES (MEJORADA)
              ========================================================= */}
          <div className="reserva-alert">
            <div className="alert-icon-wrapper">
              <BsLightning className="alert-icon" />
            </div>
            <div className="alert-content">
              <span className="alert-tag">¡IMPORTANTE!</span>
              <p className="alert-text">
                <strong>¡MESAS DISPONIBLES!</strong> Reservá con anticipación para asegurar tu lugar.
              </p>
            </div>
          </div>

          {/* =========================================================
              DESCRIPCIÓN (MEJORADA)
              ========================================================= */}
          <div className="reserva-description">
            <p>
              En <strong>Pirula Tequeños</strong> queremos que vivas la mejor experiencia. 
              Reservá tu mesa y disfrutá de nuestros tequeños artesanales en un ambiente 
              acogedor y familiar.
            </p>
          </div>

          {/* =========================================================
              INFO ADICIONAL - HORARIOS Y CAPACIDAD (MEJORADA)
              ========================================================= */}
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon-wrapper">
                <BsCalendarCheck className="info-icon" />
              </div>
              <div>
                <span className="info-label">Horarios</span>
                <span className="info-value">12:00 - 22:00 hs</span>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon-wrapper">
                <BsPeople className="info-icon" />
              </div>
              <div>
                <span className="info-label">Capacidad</span>
                <span className="info-value">Hasta 6 personas</span>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon-wrapper">
                <BsClock className="info-icon" />
              </div>
              <div>
                <span className="info-label">Duración</span>
                <span className="info-value">2 horas</span>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon-wrapper">
                <FaStar className="info-icon" />
              </div>
              <div>
                <span className="info-label">Anticipación</span>
                <span className="info-value">48 horas</span>
              </div>
            </div>
          </div>

          {/* =========================================================
              BOTÓN PRINCIPAL (MEJORADO)
              ========================================================= */}
          <div className="reserva-actions">
            <button 
              className="btn-reservar"
              onClick={handleExternalRedirect}
            >
              <BsLightning className="btn-icon" />
              <span>RESERVAR MESA</span>
            </button>
          </div>

          {/* =========================================================
              INFO DE CONTACTO (MEJORADA)
              ========================================================= */}
          <div className="reserva-contacto">
            <p className="contacto-text">
              ¿Problemas con la reserva? Contactanos por WhatsApp
            </p>
            <a 
              href="https://wa.me/584141234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contacto-whatsapp"
            >
              <FaWhatsapp /> +58 414-1234567
            </a>
          </div>
        </div>

        {/* =========================================================
            TARJETA SECUNDARIA - BENEFICIOS (MEJORADA)
            ========================================================= */}
        <div className="beneficios-card">
          <h3>BENEFICIOS DE <span className="highlight">RESERVAR</span></h3>
          
          <ul className="beneficios-list">
            <li>
              <div className="beneficio-icon-wrapper">
                <GiHotDog className="beneficio-icon" />
              </div>
              <div className="beneficio-content">
                <span className="beneficio-titulo">Tequeños recién hechos</span>
                <span className="beneficio-desc">Al llegar, te esperan calentitos</span>
              </div>
            </li>
            <li>
              <div className="beneficio-icon-wrapper">
                <GiCorn className="beneficio-icon" />
              </div>
              <div className="beneficio-content">
                <span className="beneficio-titulo">Mesa preferencial</span>
                <span className="beneficio-desc">Cerca de la barra y con mejor vista</span>
              </div>
            </li>
            <li>
              <div className="beneficio-icon-wrapper">
                <BsLightning className="beneficio-icon" />
              </div>
              <div className="beneficio-content">
                <span className="beneficio-titulo">Descuento especial</span>
                <span className="beneficio-desc">10% de descuento en tu consumo</span>
              </div>
            </li>
          </ul>
        </div>

        {/* =========================================================
            BANNER PROMOCIONAL - AMARILLO CON TEXTO NEGRO
            ========================================================= */}
        <div className="promo-banner">
          <GiCorn className="banner-icon" />
          <p className="promo-text">
            RESERVANDO HOY <span className="promo-highlight">¡POSTRE GRATIS!</span>
          </p>
          <GiCorn className="banner-icon" />
        </div>
      </section>
      
      {/* =========================================================
          ESTRELLAS DECORATIVAS
          ========================================================= */}
      <div className="reserva-stars">
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
      </div>
    </div>
  );
};

export default ReservaTuMesa;