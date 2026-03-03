// =========================================================
// SomosPirulaTequenos.jsx - PÁGINA SOBRE NOSOTROS
// CON NUEVO COLOR #8b4242, LOGO Y GIF ANIMADO
// =========================================================
import React from 'react';
import { BsStar, BsStarFill, BsTruck, BsClock, BsHeart, BsPeople, BsLightning } from 'react-icons/bs';
import { GiCorn, GiCheeseWedge, GiCookingPot, GiMeal, GiHotDog } from 'react-icons/gi';
import '../assets/scss/_03-Componentes/_SomosPirulaTequenos.scss';

// =========================================================
const SomosPirulaTequenos = () => {
  
  // =========================================================
  // EQUIPO CON IMÁGENES REALES
  // =========================================================
  const equipo = [
    {
      nombre: 'Fabiola Lutrario',
      cargo: 'Fundadora',
      imagen: '/img/02-logos/logotequenospirula3-negro.png',
    },
    {
      nombre: 'Alejandro Bavaro',
      cargo: 'Producción',
      imagen: '/img/02-logos/logotequenospirula3-negro.png',
    },
    {
      nombre: 'Falicitas',
      cargo: 'Logística',
      imagen: '/img/02-logos/logotequenospirula3-negro.png',
    }
  ];

  // =========================================================
  // VALORES
  // =========================================================
  const valores = [
    { icon: <GiCheeseWedge />, titulo: 'Calidad', desc: 'Seleccionamos los mejores ingredientes' },
    { icon: <BsHeart />, titulo: 'Pasión', desc: 'Cada tequeño con amor' },
    { icon: <BsPeople />, titulo: 'Familia', desc: 'Tratamos a cada cliente como familia' },
    { icon: <BsTruck />, titulo: 'Compromiso', desc: 'Entregas puntuales siempre' }
  ];

  // =========================================================
  // PROCESO
  // =========================================================
  const proceso = [
    { num: 1, titulo: 'Selección', desc: 'Queso blanco tequeñero' },
    { num: 2, titulo: 'Masa', desc: 'Preparamos a diario' },
    { num: 3, titulo: 'Enrollado', desc: 'Hecho a mano' },
    { num: 4, titulo: 'Congelado', desc: 'Frescura garantizada' }
  ];

  // =========================================================
  return (
    <div className="nosotros-pirula">
      
      {/* =========================================================
          HERO SECTION - ROJO CON TEXTO BLANCO (NUEVO COLOR)
          ========================================================= */}
      <section className="nosotros-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          
          {/* Logo de Pirula en el header */}
          {/* <div className="header-logo">
            <img 
              src="/img/02-logos/logotequenospirula3-negro.png" 
              alt="Pirula Tequeños"
              className="header-logo-image"
            />
          </div> */}

         
          
          <div className="pirula-badge">
            <span className="badge-icon">🥟</span>
            <span>HECHO CON AMOR</span>
          </div>
          <h1 className="hero-title">
            <span className="title-white">SOMOS</span>{' '}
            <span className="title-yellow">PIRULA</span>
          </h1>
          <p className="hero-subtitle">
            Llevando el sabor auténtico de Argentina a cada mesa desde 2015
          </p>
        </div>
      </section>

      {/* =========================================================
          GIF ANIMADO - LLAMATIVO
          ========================================================= */}
      <section className="gif-section">
        <div className="gif-container">
          <img 
            src="/img/13-gif/gif3.gif" 
            alt="Tequeños animados" 
            className="gif-animado"
          />
        </div>
      </section>

      {/* =========================================================
          GALERÍA DE IMÁGENES PEQUEÑAS
          ========================================================= */}
      <section className="galeria-mini">
        <div className="galeria-grid">
          <img src="/img/06-img-galeria3/id15-c15.png" alt="Tequeños" />
          <img src="/img/06-img-galeria3/id16-c16.png" alt="Tequeños" />
          <img src="/img/06-img-galeria3/id17-c17.png" alt="Tequeños" />
          <img src="/img/06-img-galeria3/id18-c18.png" alt="Tequeños" />
        </div>
      </section>

      {/* =========================================================
          NUESTRA HISTORIA
          ========================================================= */}
      <section className="historia-section">
        <div className="historia-container">
          <div className="historia-imagen">
            <img src="/img/06-img-galeria3/id13-c13.png" alt="Nuestra historia" />
          </div>
          
          <div className="historia-contenido">
            <h2>NUESTRA <span className="highlight">HISTORIA</span></h2>
            <p>
              Todo comenzó en una pequeña cocina en Mar del Plata, donde Doña María preparaba 
              sus famosos tequeños para las fiestas familiares.
            </p>
            <p>
              <strong>Pirula Tequeños</strong> nace del sueño de llevar ese sabor casero 
              a todos los rincones del país.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FRASE DE IMPACTO - NEGRO CON TEXTO AMARILLO
          ========================================================= */}
      <section className="frase-impacto">
        <div className="frase-container">
          <span className="frase-icon"><GiCorn /></span>
          <p className="frase-texto">
            "Más que un tequeño, llevamos un pedacito de Argentina"
          </p>
          <span className="frase-icon"><GiCorn /></span>
        </div>
      </section>

      {/* =========================================================
          VALORES
          ========================================================= */}
      <section className="valores-section">
        <h2>NUESTROS <span className="highlight">VALORES</span></h2>
        
        <div className="valores-grid">
          {valores.map((valor, index) => (
            <div key={index} className="valor-card">
              <div className="valor-icon">{valor.icon}</div>
              <h3>{valor.titulo}</h3>
              <p>{valor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PROCESO ARTESANAL
          ========================================================= */}
      <section className="proceso-section">
        <h2>NUESTRO PROCESO <span className="highlight">ARTESANAL</span></h2>
        
        <div className="proceso-grid">
          {proceso.map((item, index) => (
            <div key={index} className="proceso-card">
              <div className="proceso-numero">{item.num}</div>
              <div className="proceso-contenido">
                <h3>{item.titulo}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          EQUIPO
          ========================================================= */}
      <section className="equipo-section">
        <h2>NUESTRO <span className="highlight">EQUIPO</span></h2>
        
        <div className="equipo-grid">
          {equipo.map((miembro, index) => (
            <div key={index} className="equipo-card">
              <div className="equipo-imagen">
                <img src={miembro.imagen} alt={miembro.nombre} />
              </div>
              <h3>{miembro.nombre}</h3>
              <p className="equipo-cargo">{miembro.cargo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          FRASE FINAL - AMARILLO CON TEXTO NEGRO
          ========================================================= */}
      <section className="frase-final">
        <div className="frase-final-container">
          <GiMeal className="frase-icon" />
          <p>
            "Así como la arepa nos une, nuestros tequeños endulzan los momentos 
            especiales"
          </p>
          <span className="frase-autor">- Familia Pirula</span>
        </div>
      </section>
    </div>
  );
};

export default SomosPirulaTequenos;