// =========================================================
// PromosTequenos.jsx - PÁGINA DE PROMOCIONES
// CON NUEVO COLOR #8b4242 Y LOGO DE PIRULA
// =========================================================
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsClock, BsFire, BsGift, BsCart3, BsLightning, BsStar, BsWhatsapp } from 'react-icons/bs';
import { GiCorn, GiHotDog, GiMeal, GiCheeseWedge } from 'react-icons/gi';
import '../assets/scss/_03-Componentes/_PromosTequenos.scss';

// =========================================================
const PromosTequenos = () => {
  // =========================================================
  // CONTADOR REGRESIVO
  // =========================================================
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // =========================================================
  // IMÁGENES DE 04-img-galeria1 (para usar en todas las promos)
  // =========================================================
  const imagenesPromos = [
    '/img/04-img-galeria1/1.png',
    '/img/04-img-galeria1/1 copy.png',
    '/img/04-img-galeria1/1 copy 2.png',
    '/img/04-img-galeria1/2.png',
    '/img/04-img-galeria1/2 copy.png',
    '/img/04-img-galeria1/3.png',
    '/img/04-img-galeria1/3 copy.png'
  ];

  // =========================================================
  // PROMOCIONES ACTIVAS CON IMÁGENES DE 04-img-galeria1
  // =========================================================
  const promociones = [
    {
      id: 1,
      titulo: "COMBO FAMILIAR",
      descripcion: "3 docenas de tequeños clásicos + 1 salsa de la casa GRATIS",
      precioRegular: 10500,
      precioOferta: 8900,
      imagen: imagenesPromos[0], // 1.png
      ahorro: 1600,
      destacado: true,
      tag: "🔥 MÁS VENDIDO",
      icono: <GiHotDog />
    },
    {
      id: 2,
      titulo: "PROMO EMPRESARIAL",
      descripcion: "10 docenas de tequeños variados. Ideal para oficinas",
      precioRegular: 35000,
      precioOferta: 29900,
      imagen: imagenesPromos[1], // 1 copy.png
      ahorro: 5100,
      destacado: false,
      tag: "💼 AHORRO GARANTIZADO",
      icono: <GiMeal />
    },
    {
      id: 3,
      titulo: "2x1 GOURMET",
      descripcion: "Lleva 2 docenas de tequeños gourmet al precio de 1",
      precioRegular: 9000,
      precioOferta: 4500,
      imagen: imagenesPromos[2], // 1 copy 2.png
      ahorro: 4500,
      destacado: true,
      tag: "⚡ OFERTA RELÁMPAGO",
      icono: <GiCheeseWedge />
    },
    {
      id: 4,
      titulo: "KIT FIESTERO",
      descripcion: "5 docenas + 3 salsas + 100 servilletas personalizadas",
      precioRegular: 18500,
      precioOferta: 14900,
      imagen: imagenesPromos[3], // 2.png
      ahorro: 3600,
      destacado: false,
      tag: "🎉 RECOMENDADO",
      icono: <GiCorn />
    },
    {
      id: 5,
      titulo: "DOCENA SORPRESA",
      descripcion: "Tequeños surtidos. ¡No sabes qué variedad te toca!",
      precioRegular: 4000,
      precioOferta: 3200,
      imagen: imagenesPromos[4], // 2 copy.png
      ahorro: 800,
      destacado: false,
      tag: "🎲 SORPRESA",
      icono: <BsGift />
    },
    {
      id: 6,
      titulo: "COMBO MAÑANERO",
      descripcion: "2 docenas + café + jugo. Ideal para desayunos",
      precioRegular: 8500,
      precioOferta: 7200,
      imagen: imagenesPromos[5], // 3.png
      ahorro: 1300,
      destacado: false,
      tag: "☕ DESAYUNO",
      icono: <BsClock />
    },
    {
      id: 7,
      titulo: "SUPER COMBO",
      descripcion: "8 docenas variadas + 4 salsas + regalo sorpresa",
      precioRegular: 28500,
      precioOferta: 23900,
      imagen: imagenesPromos[6], // 3 copy.png
      ahorro: 4600,
      destacado: true,
      tag: "🔥 OFERTÓN",
      icono: <GiHotDog />
    },
    {
      id: 8,
      titulo: "PROMO CUMPLEAÑOS",
      descripcion: "6 docenas + vela + tarjeta personalizada",
      precioRegular: 18900,
      precioOferta: 15900,
      imagen: imagenesPromos[0], // 1.png (repetida)
      ahorro: 3000,
      destacado: false,
      tag: "🎂 ESPECIAL",
      icono: <BsGift />
    },
    {
      id: 9,
      titulo: "2x1 EN CLÁSICOS",
      descripcion: "Lleva 2 docenas de tequeños clásicos al precio de 1",
      precioRegular: 7000,
      precioOferta: 3500,
      imagen: imagenesPromos[1], // 1 copy.png (repetida)
      ahorro: 3500,
      destacado: true,
      tag: "⚡ RELÁMPAGO",
      icono: <GiCheeseWedge />
    }
  ];

  const [filtro, setFiltro] = useState('todos');

  const filtrarPromos = () => {
    if (filtro === 'todos') return promociones;
    if (filtro === 'destacados') return promociones.filter(p => p.destacado);
    return promociones;
  };

  // =========================================================
  return (
    <div className="promos-pirula">
      
      {/* =========================================================
          HEADER CON LOGO Y CONTADOR - ROJO CON TEXTO BLANCO
          ========================================================= */}
      <section className="promos-header">
        <div className="header-overlay"></div>
        <div className="header-content">
          
          {/* Logo de Pirula en el header */}
          <div className="header-logo">
            <img 
              src="/img/02-logos/logotequenospirula1a-sinfondo.png" 
              alt="Pirula Tequeños"
              className="header-logo-image"
            />
          </div>
          
          <h1>
            <BsFire className="header-icon" />
            <span className="header-title-white">PROMOCIONES</span>
            <BsFire className="header-icon" />
          </h1>
          <p className="header-subtitle">
            ¡Ofertas que queman! Aprovecha antes de que se acaben
          </p>
          
          <div className="countdown-container">
            <div className="countdown-label">
              <BsClock /> OFERTAS POR TIEMPO LIMITADO
            </div>
            <div className="countdown">
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.days}</span>
                <span className="countdown-label">DÍAS</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.hours}</span>
                <span className="countdown-label">HORAS</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.minutes}</span>
                <span className="countdown-label">MIN</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.seconds}</span>
                <span className="countdown-label">SEG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FILTROS - CON NUEVO COLOR
          ========================================================= */}
      <section className="filtros-pirula">
        <div className="filtros-container">
          <button 
            className={`filtro-btn ${filtro === 'todos' ? 'active' : ''}`}
            onClick={() => setFiltro('todos')}
          >
            TODAS LAS PROMOS
          </button>
          <button 
            className={`filtro-btn ${filtro === 'destacados' ? 'active' : ''}`}
            onClick={() => setFiltro('destacados')}
          >
            <BsLightning /> DESTACADAS
          </button>
          <button className="filtro-btn">COMBOS</button>
          <button className="filtro-btn">2X1</button>
          <button className="filtro-btn">EMPRESAS</button>
        </div>
      </section>

      {/* =========================================================
          GRID DE PROMOCIONES
          ========================================================= */}
      <section className="promos-grid-section">
        <div className="promos-grid">
          {filtrarPromos().map(promo => (
            <div key={promo.id} className={`promo-card ${promo.destacado ? 'destacada' : ''}`}>
              {promo.destacado && (
                <div className="promo-flash">
                  <BsLightning />
                </div>
              )}
              
              <div className="promo-imagen">
                <img src={promo.imagen} alt={promo.titulo} />
                <div className="promo-tag">{promo.tag}</div>
              </div>
              
              <div className="promo-contenido">
                <div className="promo-icono">{promo.icono}</div>
                <h3>{promo.titulo}</h3>
                <p>{promo.descripcion}</p>
                
                <div className="promo-ahorro">
                  <span className="ahorro-texto">AHORRAS</span>
                  <span className="ahorro-valor">${promo.ahorro.toLocaleString()}</span>
                </div>
                
                <div className="promo-precios">
                  <span className="precio-regular">${promo.precioRegular.toLocaleString()}</span>
                  <span className="precio-oferta">${promo.precioOferta.toLocaleString()}</span>
                </div>
                
                <div className="promo-acciones">
                  <button className="btn-comprar">
                    <BsCart3 /> COMPRAR
                  </button>
                  <button className="btn-detalles">VER</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PROMO ESPECIAL DESTACADA - AMARILLO CON TEXTO NEGRO
          ========================================================= */}
      <section className="promo-especial-destacada">
        <div className="especial-contenido">
          <span className="especial-tag">🔥 MEGA OFERTÓN 🔥</span>
          <h2>COMPRANDO 5 DOCENAS</h2>
          <p className="especial-texto">
            LLEVATE <span className="especial-highlight">1 DOCENA EXTRA GRATIS</span>
          </p>
          <p className="especial-detalle">+ Envío gratis a todo el país</p>
          <div className="especial-actions">
            <Link to="/tequenos/pedidos" className="btn-especial">
              APROVECHAR AHORA
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CÓMO APROVECHAR LAS PROMOS
          ========================================================= */}
      <section className="como-aprovechar">
        <h2>¿CÓMO <span className="highlight">APROVECHAR</span> LAS PROMOS?</h2>
        
        <div className="pasos-grid">
          <div className="paso-card">
            <div className="paso-numero">1</div>
            <h4>ELIGE TU PROMO</h4>
            <p>Selecciona la oferta que más te guste</p>
          </div>
          
          <div className="paso-card">
            <div className="paso-numero">2</div>
            <h4>HAZ TU PEDIDO</h4>
            <p>Completa tus datos en 2 minutos</p>
          </div>
          
          <div className="paso-card">
            <div className="paso-numero">3</div>
            <h4>RECIBE EN CASA</h4>
            <p>Enviamos tu pedido bien refrigerado</p>
          </div>
          
          <div className="paso-card">
            <div className="paso-numero">4</div>
            <h4>¡DISFRUTA!</h4>
            <p>Fríe y disfruta los mejores tequeños</p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA WHATSAPP MAYORISTAS
          ========================================================= */}
      <section className="whatsapp-mayoristas">
        <div className="mayoristas-contenido">
          <div className="mayoristas-icono">
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
          <h3>¿ERES RESTAURANTE O DISTRIBUIDOR?</h3>
          <p>Tenemos precios especiales y entregas programadas para negocios</p>
          <a 
            href="https://wa.me/584141234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-mayoristas"
          >
            <BsWhatsapp /> CONTACTAR A VENTAS MAYORISTAS
          </a>
        </div>
      </section>
    </div>
  );
};

export default PromosTequenos;