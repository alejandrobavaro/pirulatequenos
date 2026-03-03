// =========================================================
// HomeTequenos.jsx - LANDING PAGE DE PIRULA TEQUEÑOS
// CON NUEVO COLOR #8b4242 Y MÁS IMÁGENES EN HERO
// =========================================================
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsWhatsapp, BsTruck, BsStar, BsStarFill, BsLightning, BsFire } from 'react-icons/bs';
import { GiCorn, GiHotDog, GiCheeseWedge, GiCookingPot } from 'react-icons/gi';
import ContadorDiasPirula from './ContadorDiasPirula';
import '../assets/scss/_03-Componentes/_HomeTequenos.scss';

// =========================================================
const HomeTequenos = () => {
  // =========================================================
  // ESTADO PARA LAS IMÁGENES DE FONDO DEL HERO
  // =========================================================
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  
  // =========================================================
  // IMÁGENES PARA EL HERO (ROTATIVAS) - MÁS DE 50 IMÁGENES
  // =========================================================
  const heroImages = [
    // Imágenes de 05-img-galeria2
    '/img/05-img-galeria2/1.jpeg',
    '/img/05-img-galeria2/2.jpeg',
    '/img/05-img-galeria2/3.jpeg',
    '/img/05-img-galeria2/4.jpeg',
    '/img/05-img-galeria2/5.jpeg',
    '/img/05-img-galeria2/6.jpeg',
    '/img/05-img-galeria2/7.jpeg',
    '/img/05-img-galeria2/8.jpeg',
    '/img/05-img-galeria2/9.jpeg',
    '/img/05-img-galeria2/10.jpeg',
    // Imágenes de 04-img-galeria1
    '/img/04-img-galeria1/1.png',
    '/img/04-img-galeria1/2.png',
    '/img/04-img-galeria1/3.png',
    // Imágenes OSF
    '/img/05-img-galeria2/OSF_2349.jpg',
    '/img/05-img-galeria2/OSF_2362.jpg',
    '/img/05-img-galeria2/OSF_2432.jpg',
    '/img/05-img-galeria2/OSF_2434.jpg',
    '/img/05-img-galeria2/OSF_2471.jpg',
    '/img/05-img-galeria2/OSF_2481.jpg',
    '/img/05-img-galeria2/OSF_2501.jpg',
    '/img/05-img-galeria2/OSF_2503.jpg',
    '/img/05-img-galeria2/OSF_2519.jpg',
    '/img/05-img-galeria2/OSF_2524.jpg',
    // Imágenes DSC
    '/img/05-img-galeria2/DSC07371.jpg',
    '/img/05-img-galeria2/DSC07384.jpg',
    '/img/05-img-galeria2/DSC07387.jpg',
    '/img/05-img-galeria2/DSC07399.jpg',
    '/img/05-img-galeria2/DSC07417.jpg',
    '/img/05-img-galeria2/DSC07431.jpg',
    '/img/05-img-galeria2/DSC07443.jpg',
    '/img/05-img-galeria2/DSC07456.jpg',
    '/img/05-img-galeria2/DSC07473.jpg',
    // Imágenes 2025
    '/img/05-img-galeria2/2025-10-06-007.jpg',
    '/img/05-img-galeria2/2025-10-09-012.jpg',
    '/img/05-img-galeria2/20251022_234904.jpg',
    '/img/05-img-galeria2/20251022_234957.jpg',
    '/img/05-img-galeria2/20251022_235117.jpg',
    '/img/05-img-galeria2/20251023_103229.jpg',
    '/img/05-img-galeria2/20251023_103450.jpg',
    '/img/05-img-galeria2/20251023_103612.jpg',
    '/img/05-img-galeria2/20251023_103756.jpg',
    '/img/05-img-galeria2/20251023_103905.jpg',
    '/img/05-img-galeria2/20251023_124314.jpg',
    '/img/05-img-galeria2/20251023_125936.jpg',
    '/img/05-img-galeria2/20251023_130253.jpg',
    '/img/05-img-galeria2/20251023_130357.jpg',
    '/img/05-img-galeria2/20251023_130509.jpg',
    '/img/05-img-galeria2/20251023_130623.jpg',
    '/img/05-img-galeria2/20251023_130758.jpg',
    '/img/05-img-galeria2/20251023_133015.jpg',
    '/img/05-img-galeria2/20251023_133148.jpg',
    '/img/05-img-galeria2/20251023_133252.jpg',
    '/img/05-img-galeria2/20251023_134530.jpg',
    '/img/05-img-galeria2/20251023_134731.jpg',
    '/img/05-img-galeria2/20251023_134904.jpg',
    '/img/05-img-galeria2/20251023_135014.jpg',
    '/img/05-img-galeria2/20251023_135155.jpg',
    '/img/05-img-galeria2/20251023_135314.jpg'
  ];

  // =========================================================
  // EFECTO PARA CAMBIAR LA IMAGEN DEL HERO CADA 5 SEGUNDOS
  // =========================================================
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // =========================================================
  // PRODUCTOS DESTACADOS CON IMÁGENES REALES
  // =========================================================
  const productosDestacados = [
    {
      id: 1,
      nombre: 'TEQUEÑOS CLÁSICOS',
      descripcion: 'Queso blanco 100% tequeñero, masa crujiente',
      precio: 3500,
      imagen: '/img/05-img-galeria2/1.jpeg',
      rating: 5,
      tag: '🔥 MÁS PEDIDO'
    },
    {
      id: 2,
      nombre: 'TEQUEÑOS GOURMET',
      descripcion: 'Queso azul, nueces y toque de miel',
      precio: 4500,
      imagen: '/img/05-img-galeria2/2.jpeg',
      rating: 5,
      tag: '⭐ PREMIUM'
    },
    {
      id: 3,
      nombre: 'TEQUEÑOS MIXTOS',
      descripcion: 'Queso y jamón, la combinación perfecta',
      precio: 4000,
      imagen: '/img/05-img-galeria2/3.jpeg',
      rating: 5,
      tag: '🥇 FAVORITO'
    },
    {
      id: 4,
      nombre: 'MINI TEQUEÑOS',
      descripcion: 'Ideales para fiestas y buffets',
      precio: 2800,
      imagen: '/img/05-img-galeria2/4.jpeg',
      rating: 5,
      tag: '🎉 ECONÓMICO'
    }
  ];

  // =========================================================
  // NUEVAS IMÁGENES AGREGADAS (04-img-galeria1)
  // =========================================================
  const nuevasImagenes = [
    '/img/04-img-galeria1/1.png',
    '/img/04-img-galeria1/2.png',
    '/img/04-img-galeria1/3.png'
  ];

  // =========================================================
  // CATEGORÍAS CON IMÁGENES DE FONDO
  // =========================================================
  const categorias = [
    { 
      icon: <GiCheeseWedge />, 
      nombre: 'Clásicos', 
      imagen: '/img/05-img-galeria2/5.jpeg' 
    },
    { 
      icon: <GiHotDog />, 
      nombre: 'Gourmet', 
      imagen: '/img/05-img-galeria2/6.jpeg' 
    },
    { 
      icon: <GiCorn />, 
      nombre: 'Mini', 
      imagen: '/img/05-img-galeria2/7.jpeg' 
    },
    { 
      icon: <GiCookingPot />, 
      nombre: 'Combos', 
      imagen: '/img/05-img-galeria2/8.jpeg' 
    }
  ];

  // =========================================================
  // TESTIMONIOS CON AVATARES
  // =========================================================
  const testimonios = [
    {
      nombre: 'María G.',
      comentario: '"Los mejores tequeños que he probado fuera de Argentina. ¡Sabor casero!"',
      avatar: '/img/05-img-galeria2/1a.jpg',
      rating: 5
    },
    {
      nombre: 'Carlos R.',
      comentario: '"Mis clientes del restaurante los aman. Pido todas las semanas."',
      avatar: '/img/05-img-galeria2/2a.jpg',
      rating: 5
    },
    {
      nombre: 'Ana P.',
      comentario: '"Llegaron en perfecto estado, súper frescos. Repetiré seguro."',
      avatar: '/img/05-img-galeria2/3a.jpg',
      rating: 5
    }
  ];

  // =========================================================
  // VENTAJAS CON ICONOS
  // =========================================================
  const ventajas = [
    { icon: '🥟', titulo: 'Masa Artesanal', desc: 'Preparamos la masa a diario, como en casa' },
    { icon: '🧀', titulo: 'Queso 100% tequeñero', desc: 'El auténtico sabor de nuestra tierra' },
    { icon: '❄️', titulo: 'Congelados Frescos', desc: 'Mantenemos toda la calidad del producto' },
    { icon: '🚚', titulo: 'Envíos a Todo el País', desc: 'Llegamos a donde estés' }
  ];

  // =========================================================
  return (
    <div className="home-pirula">
      
      {/* =========================================================
          HERO SECTION - CON IMÁGENES DE FONDO ROTATIVAS
          ========================================================= */}
      <section className="hero-pirula">
        {/* Imagen de fondo rotativa */}
        <div 
          className="hero-background"
          style={{backgroundImage: `url(${heroImages[heroImageIndex]})`}}
        >
          <div className="hero-background-overlay"></div>
        </div>
        
        {/* Fondo de color con transparencia (nuevo color #8b4242) */}
        <div className="hero-color-overlay"></div>
        
        {/* Patrón decorativo */}
        <div className="hero-pattern"></div>
        
        <div className="hero-content">
          
          {/* Badge de calidad */}
          <div className="hero-badge">
            <GiCorn className="badge-icon" />
            <span>100% tequeñero</span>
            <GiCorn className="badge-icon" />
          </div>
          
          <h1 className="hero-title">
            <span className="line1">¡LLEGARON LOS</span>
            <span className="line2">MEJORES TEQUEÑOS!</span>
          </h1>
          
          <p className="hero-subtitle">
            Artesanales · Congelados · Listos para freír
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">+10mil</span>
              <span className="stat-label">DOCENAS VENDIDAS</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">+500</span>
              <span className="stat-label">CLIENTES FELICES</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <Link to="/tequenos/tienda" className="btn-hero-primary">
              ORDENAR AHORA
              <BsLightning className="btn-icon" />
            </Link>
            <Link to="/tequenos/promos" className="btn-hero-secondary">
              VER PROMOS
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FRASE DE IMPACTO - FONDO NEGRO, TEXTO AMARILLO
          ========================================================= */}
      <section className="frase-impacto">
        <div className="frase-container">
          <span className="frase-icon"><BsFire /></span>
          <p className="frase-texto">
            "El verdadero sabor tequeñero en cada bocado crujiente"
          </p>
          <span className="frase-icon"><BsFire /></span>
        </div>
      </section>

      {/* =========================================================
          CONTADOR DE APERTURA
          ========================================================= */}
      <ContadorDiasPirula />

      {/* =========================================================
          CATEGORÍAS RÁPIDAS CON IMÁGENES DE FONDO
          ========================================================= */}
      <section className="categorias-pirula">
        <h2>EXPLORA <span className="highlight">NUESTROS TEQUEÑOS</span></h2>
        
        <div className="categorias-grid">
          {categorias.map((cat, index) => (
            <div 
              key={index} 
              className="categoria-card"
              style={{backgroundImage: `url(${cat.imagen})`}}
            >
              <div className="categoria-overlay"></div>
              <div className="categoria-contenido">
                <div className="categoria-icon">{cat.icon}</div>
                <h3>{cat.nombre}</h3>
                <Link to="/tequenos/tienda" className="categoria-link">
                  VER →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          NUEVA GALERÍA DE IMÁGENES (04-img-galeria1)
          ========================================================= */}
      <section className="galeria-mini">
        <h2>TEQUEÑOS <span className="highlight">EN ACCIÓN</span></h2>
        <div className="galeria-grid">
          {nuevasImagenes.map((img, index) => (
            <div key={index} className="galeria-item">
              <img src={img} alt={`Tequeños ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PRODUCTOS DESTACADOS
          ========================================================= */}
      <section className="destacados-pirula">
        <div className="section-header">
          <h2>LOS MÁS <span className="highlight">PEDIDOS</span></h2>
          <p>Nuestros clientes no pueden vivir sin ellos</p>
        </div>

        <div className="productos-grid">
          {productosDestacados.map(producto => (
            <div key={producto.id} className="producto-card">
              <div className="card-badge">{producto.tag}</div>
              <div className="card-imagen">
                <img src={producto.imagen} alt={producto.nombre} />
              </div>
              <div className="card-contenido">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                
                <div className="card-rating">
                  {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} className="star-filled" />
                  ))}
                </div>
                
                <div className="card-precio">
                  <span className="precio">${producto.precio.toLocaleString()}</span>
                  <span className="unidad">/docena</span>
                </div>
                
                <div className="card-acciones">
                  <button className="btn-add">
                    <BsLightning /> AGREGAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ver-todos">
          <Link to="/tequenos/tienda" className="btn-ver-todos">
            VER TODOS LOS TEQUEÑOS →
          </Link>
        </div>
      </section>

      {/* =========================================================
          PROMO ESPECIAL - FONDO AMARILLO, TEXTO NEGRO
          ========================================================= */}
      <section className="promo-especial">
        <div className="promo-contenido">
          <span className="promo-tag">🔥 OFERTÓN 🔥</span>
          <h2>LLEVÁ 3 DOCENAS</h2>
          <p className="promo-texto">Y LA CUARTA VA <span className="promo-highlight">GRATIS</span></p>
          <div className="promo-condiciones">
            <span>Válido solo por hoy</span>
            <span>·</span>
            <span>Sin mínimo de compra</span>
          </div>
          <Link to="/tequenos/promos" className="btn-promo">
            APROVECHAR OFERTA
          </Link>
        </div>
      </section>

      {/* =========================================================
          POR QUÉ ELEGIRNOS
          ========================================================= */}
      <section className="porque-elegirnos">
        <h2>¿POR QUÉ <span className="highlight">PIRULA?</span></h2>
        
        <div className="ventajas-grid">
          {ventajas.map((ventaja, index) => (
            <div key={index} className="ventaja-card">
              <div className="ventaja-icon">{ventaja.icon}</div>
              <h3>{ventaja.titulo}</h3>
              <p>{ventaja.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          TESTIMONIOS CON AVATARES
          ========================================================= */}
      <section className="testimonios-pirula">
        <h2>LO QUE DICEN <span className="highlight">NUESTROS CLIENTES</span></h2>
        
        <div className="testimonios-grid">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="testimonio-card">
              <div className="testimonio-header">
                <img src={testimonio.avatar} alt={testimonio.nombre} className="testimonio-avatar" />
                <div className="testimonio-info">
                  <div className="testimonio-estrellas">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <BsStarFill key={i} />
                    ))}
                  </div>
                  <p className="testimonio-nombre">{testimonio.nombre}</p>
                </div>
              </div>
              <p className="testimonio-texto">{testimonio.comentario}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CTA WHATSAPP
          ========================================================= */}
      <section className="cta-whatsapp">
        <div className="cta-contenido">
          <BsWhatsapp className="cta-icon" />
          <h3>¿PEDIDOS POR MAYOR?</h3>
          <p>Restaurantes, cafeterías y eventos. ¡Precios especiales!</p>
          <a 
            href="https://wa.me/584141234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-cta-whatsapp"
          >
            <BsWhatsapp /> CONTACTAR AHORA
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeTequenos;