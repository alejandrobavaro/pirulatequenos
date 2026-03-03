// =========================================================
// ContadorDiasPirula.jsx - CONTADOR PARA APERTURA DE PIRULA TEQUEÑOS
// ANCHO COMPLETO - CON SLIDER DE IMÁGENES DE FONDO
// =========================================================
import React, { useState, useEffect, useRef } from "react";
import "../assets/scss/_03-Componentes/_ContadorDiasPirula.scss";
import { FaWhatsapp, FaShare } from "react-icons/fa";
import { GiCorn, GiHotDog, GiCheeseWedge } from "react-icons/gi";
import { BsLightning, BsClock, BsCalendarCheck, BsStar, BsStarFill } from "react-icons/bs";

function ContadorDiasPirula() {
  // =========================================================
  // ESTADOS DEL COMPONENTE
  // =========================================================
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    months: 0,
    weeks: 0
  });

  const [hasOpeningPassed, setHasOpeningPassed] = useState(false);
  const [fondoIndex, setFondoIndex] = useState(0);
  
  // =========================================================
  // IMÁGENES DE FONDO ROTATIVAS (TODAS LAS QUE ME DISTE)
  // =========================================================
  const imagenesFondo = [
    '/img/04-img-galeria1/1.png',
    '/img/04-img-galeria1/1 copy.png',
    '/img/04-img-galeria1/1 copy 2.png',
    '/img/04-img-galeria1/2.png',
    '/img/04-img-galeria1/2 copy.png',
    '/img/04-img-galeria1/3.png',
    '/img/04-img-galeria1/3 copy.png'
  ];

  // =========================================================
  // EFECTO PARA CAMBIAR LA IMAGEN DE FONDO CADA 6 SEGUNDOS
  // =========================================================
  useEffect(() => {
    const interval = setInterval(() => {
      setFondoIndex((prevIndex) => (prevIndex + 1) % imagenesFondo.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  // =========================================================
  // FUNCIÓN PARA GENERAR MENSAJE DE WHATSAPP
  // =========================================================
  const generateWhatsAppMessage = () => {
    if (hasOpeningPassed) {
      return `🎉 *¡YA ABRIMOS!* 🎉

*PIRULA TEQUEÑOS YA ESTÁ ABIERTO*

¡Los mejores tequeños de Argentina ya están disponibles!
Visitanos en Av. Principal de Las Mercedes, Local 5
Mar del Plata

🍟 Tequeños artesanales
🧀 Queso 100% tequeñero
🚚 Envíos a domicilio

¡Te esperamos!

www.tequenospirula.com`;
    }

    return `⏳ *CUENTA REGRESIVA* ⏳

¡Faltan solo ${timeLeft.days} días para la APERTURA de PIRULA TEQUEÑOS!

*Tiempo restante:*
   📅 ${timeLeft.months} meses
   📆 ${timeLeft.weeks} semanas
   ⌛ ${timeLeft.days} días
   ⏰ ${timeLeft.hours} horas
   ⏱️ ${timeLeft.minutes} minutos
   ⏲️ ${timeLeft.seconds} segundos

Muy pronto los mejores tequeños tequeñeros en:
📍 Av. Principal de Las Mercedes, Local 5
📱 Pedidos: +58 414-1234567

¡No te lo pierdas! 🔥

www.tequenospirula.com`;
  };

  // =========================================================
  // FUNCIÓN PARA COMPARTIR POR WHATSAPP
  // =========================================================
  const shareOnWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // =========================================================
  // FUNCIÓN PARA COMPARTIR CON API NATIVA
  // =========================================================
  const shareWithNativeAPI = async () => {
    const message = generateWhatsAppMessage();
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Apertura Pirula Tequeños',
          text: message,
          url: 'https://tequenospirula.com'
        });
      } catch (error) {
        console.log('Error al compartir:', error);
        copyToClipboard(message);
      }
    } else {
      copyToClipboard(message);
    }
  };

  // =========================================================
  // FUNCIÓN PARA COPIAR AL PORTAPAPELES
  // =========================================================
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('¡Información copiada al portapapeles!');
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  };

  // =========================================================
  // EFECTO PRINCIPAL DEL CONTADOR - JUNIO 2026
  // =========================================================
  useEffect(() => {
    const calculateTimeLeft = () => {
      // FECHA DE APERTURA: 15 de Junio 2026 a las 10:00 AM
      const openingDate = new Date('2026-06-15T10:00:00-04:00');
      const now = new Date();
      const difference = openingDate - now;

      // Verificar si la apertura ya pasó
      if (difference <= 0) {
        setHasOpeningPassed(true);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          months: 0,
          weeks: 0
        });
        return;
      }

      // Calcular tiempo restante
      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const months = Math.floor(totalDays / 30.44);
      const weeks = Math.floor(totalDays / 7);
      
      setTimeLeft({
        days: totalDays,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        months,
        weeks
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  // =========================================================
  // RENDERIZADO DEL COMPONENTE
  // =========================================================
  return (
    <section className="contador-pirula-fullwidth">
      
      {/* Imagen de fondo rotativa con overlay */}
      <div 
        className="contador-background-slider"
        style={{backgroundImage: `url(${imagenesFondo[fondoIndex]})`}}
      >
        <div className="background-overlay"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="contador-content-full">
        
        {/* DECORACIÓN SUPERIOR (como en Home) */}
        <div className="contador-decoration">
          <span className="deco-line"></span>
          <GiCorn className="deco-icon" />
          <span className="deco-line"></span>
        </div>
        
        {/* Logo de Pirula */}
        <div className="contador-logo-container">
          <img 
            src="/img/02-logos/logotequenospirula1a-sinfondo.png" 
            alt="Pirula Tequeños"
            className="contador-logo"
          />
        </div>
        
        {/* Badge de apertura (mejorado) */}
        <div className="apertura-badge">
          <BsCalendarCheck className="badge-icon pulse" />
          <span>APERTURA 2026</span>
          <BsCalendarCheck className="badge-icon pulse" />
        </div>
        
        {/* Título principal */}
        <h1 className="contador-main-title">
          {hasOpeningPassed ? (
            <>¡YA ABRIMOS <span className="title-highlight">NUESTRAS PUERTAS!</span></>
          ) : (
            <>
              <span className="title-white">FALTAN</span>{' '}
              <span className="title-highlight">PARA LA APERTURA</span>
            </>
          )}
        </h1>
        
        {/* CONTADOR PRINCIPAL - EFECTO 3D */}
        <div className="contador-grid">
          <div className="contador-item">
            <div className="contador-circulo">
              <span className="contador-numero">{timeLeft.days}</span>
            </div>
            <span className="contador-label">DÍAS</span>
          </div>
          
          <div className="contador-item">
            <div className="contador-circulo">
              <span className="contador-numero">{timeLeft.hours.toString().padStart(2, '0')}</span>
            </div>
            <span className="contador-label">HORAS</span>
          </div>
          
          <div className="contador-item">
            <div className="contador-circulo">
              <span className="contador-numero">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            </div>
            <span className="contador-label">MINUTOS</span>
          </div>
          
          <div className="contador-item">
            <div className="contador-circulo">
              <span className="contador-numero">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            </div>
            <span className="contador-label">SEGUNDOS</span>
          </div>
        </div>
        
        {/* Información adicional (meses y semanas) */}
        <div className="info-adicional">
          <div className="info-chip">
            <BsClock className="chip-icon" />
            <span>{timeLeft.months} MESES</span>
          </div>
          <div className="info-chip">
            <BsCalendarCheck className="chip-icon" />
            <span>{timeLeft.weeks} SEMANAS</span>
          </div>
        </div>
        
        {/* Fecha destacada */}
        <div className="fecha-destacada">
          <BsStarFill className="fecha-star" />
          <span>15 DE JUNIO 2026</span>
          <BsStarFill className="fecha-star" />
        </div>
        
        {/* Botones de acción */}
        <div className="contador-acciones">
          <button 
            className="btn-accion btn-whatsapp"
            onClick={shareOnWhatsApp}
          >
            <FaWhatsapp /> COMPARTIR
          </button>
          <button 
            className="btn-accion btn-compartir"
            onClick={shareWithNativeAPI}
          >
            <FaShare /> COMPARTIR
          </button>
        </div>
        
        {/* Estado cuando ya abrió */}
        {hasOpeningPassed && (
          <div className="abierto-banner">
            <GiCorn className="banner-icon" />
            <p>YA PUEDES VISITARNOS</p>
            <GiCorn className="banner-icon" />
          </div>
        )}
      </div>
    </section>
  );
}

export default ContadorDiasPirula;