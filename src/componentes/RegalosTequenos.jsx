// =========================================================
// RegalosTequenos.jsx - REGALOS DE PIRULA TEQUEÑOS
// CON NUEVO COLOR #8b4242 Y LOGO DE PIRULA
// =========================================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGift, 
  FaHeart, 
  FaBirthdayCake,
  FaStar,
  FaCheck,
  FaWhatsapp,
  FaShoppingCart,
  FaTruck,
  FaCalendarAlt
} from 'react-icons/fa';
import { GiCorn, GiHotDog, GiCheeseWedge } from 'react-icons/gi';
import { BsLightning } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "../assets/scss/_03-Componentes/_RegalosTequenos.scss";

// =========================================================
function RegalosTequenos() {
  // =========================================================
  const [regaloSeleccionado, setRegaloSeleccionado] = useState(null);

  // =========================================================
  // IMÁGENES DE 04-img-galeria1 (para usar en todos los regalos)
  // =========================================================
  const imagenesRegalos = [
    '/img/04-img-galeria1/1.png',
    '/img/04-img-galeria1/1 copy.png',
    '/img/04-img-galeria1/1 copy 2.png',
    '/img/04-img-galeria1/2.png',
    '/img/04-img-galeria1/2 copy.png',
    '/img/04-img-galeria1/3.png',
    '/img/04-img-galeria1/3 copy.png'
  ];

  // =========================================================
  // TIPOS DE REGALOS CON TEQUEÑOS (con imágenes de 04-img-galeria1)
  // =========================================================
  const regalos = [
    {
      id: 1,
      nombre: "BOX CUMPLEAÑOS",
      descripcion: "3 docenas de tequeños clásicos + vela + tarjeta personalizada",
      precio: 12500,
      imagen: imagenesRegalos[0], // 1.png
      icono: <FaBirthdayCake />,
      color: "rojo",
      incluye: ["3 docenas clásicas", "Vela decorativa", "Tarjeta con mensaje", "Caja regalo"]
    },
    {
      id: 2,
      nombre: "BOX ROMÁNTICA",
      descripcion: "Tequeños gourmet + salsa especial + mensaje de amor",
      precio: 9800,
      imagen: imagenesRegalos[1], // 1 copy.png
      icono: <FaHeart />,
      color: "amarillo",
      incluye: ["2 docenas gourmet", "Salsa de la casa", "Mensaje personalizado", "Lazo rojo"]
    },
    {
      id: 3,
      nombre: "BOX EMPRESARIAL",
      descripcion: "Ideal para agasajar a tus clientes o empleados",
      precio: 18500,
      imagen: imagenesRegalos[2], // 1 copy 2.png
      icono: <FaStar />,
      color: "rojo",
      incluye: ["5 docenas variadas", "3 salsas diferentes", "Tarjetas corporativas", "Caja ejecutiva"]
    },
    {
      id: 4,
      nombre: "BOX FIESTA",
      descripcion: "Para celebraciones y eventos especiales",
      precio: 22000,
      imagen: imagenesRegalos[3], // 2.png
      icono: <FaGift />,
      color: "amarillo",
      incluye: ["8 docenas mixtas", "Salsas surtidas", "Servilletas personalizadas", "Gorritos de fiesta"]
    },
    {
      id: 5,
      nombre: "BOX FAMILIA",
      descripcion: "Para compartir en casa con los seres queridos",
      precio: 15000,
      imagen: imagenesRegalos[4], // 2 copy.png
      icono: <GiCorn />,
      color: "rojo",
      incluye: ["4 docenas clásicas", "2 salsas", "Juego de servilletas", "Stickers divertidos"]
    },
    {
      id: 6,
      nombre: "BOX SORPRESA",
      descripcion: "Tequeños surtidos + regalo sorpresa",
      precio: 13500,
      imagen: imagenesRegalos[5], // 3.png
      icono: <GiHotDog />,
      color: "amarillo",
      incluye: ["3 docenas surtidas", "Regalo sorpresa", "Tarjeta misteriosa", "Empaque especial"]
    },
    {
      id: 7,
      nombre: "BOX ANIVERSARIO",
      descripcion: "Celebrá el amor con los mejores tequeños",
      precio: 16500,
      imagen: imagenesRegalos[6], // 3 copy.png
      icono: <FaHeart />,
      color: "rojo",
      incluye: ["4 docenas gourmet", "Vela aromática", "Tarjeta romántica", "Caja especial"]
    },
    {
      id: 8,
      nombre: "BOX PREMIUM",
      descripcion: "La experiencia más completa de Pirula",
      precio: 28500,
      imagen: imagenesRegalos[0], // 1.png (repetida)
      icono: <FaStar />,
      color: "amarillo",
      incluye: ["8 docenas variadas", "5 salsas", "Vaso conmemorativo", "Bolso exclusivo"]
    },
    {
      id: 9,
      nombre: "BOX MINI",
      descripcion: "Ideal para un detalle pequeño pero sabroso",
      precio: 6500,
      imagen: imagenesRegalos[1], // 1 copy.png (repetida)
      icono: <GiCheeseWedge />,
      color: "rojo",
      incluye: ["1 docena gourmet", "1 salsa", "Tarjeta pequeña", "Bolsa de regalo"]
    }
  ];

  // =========================================================
  // FRASES PARA CADA OCASIÓN
  // =========================================================
  const frases = [
    "¡Regala sabor tequeñero!",
    "El mejor regalo es un tequeño",
    "Para endulzar cualquier ocasión",
    "Sabor que llega al corazón"
  ];

  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

  // =========================================================
  return (
    <motion.div 
      className="regalos-pirula"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      
      {/* =========================================================
          HERO SECTION - ROJO CON TEXTO BLANCO/AMARILLO (NUEVO COLOR)
          ========================================================= */}
      <section className="regalos-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          
          {/* Logo de Pirula en el header */}
          <div className="header-logo">
            <img 
              src="/img/02-logos/logotequenospirula1a-sinfondo.png" 
              alt="Pirula Tequeños"
              className="header-logo-image"
            />
          </div>
          
          <h1 className="hero-title">
            <span className="title-white">REGALÁ</span>{' '}
            <span className="title-yellow">TEQUEÑOS</span>
          </h1>
          <p className="hero-subtitle">
            {fraseAleatoria}
          </p>
          <div className="hero-badge">
            <GiCheeseWedge />
            <span>ENVÍOS A DOMICILIO</span>
            <GiCheeseWedge />
          </div>
        </div>
      </section>

      {/* =========================================================
          FRASE DE IMPACTO - NEGRO CON TEXTO AMARILLO
          ========================================================= */}
      <section className="frase-impacto">
        <div className="frase-container">
          <span className="frase-icon"><FaGift /></span>
          <p className="frase-texto">
            "El mejor regalo es el que se comparte"
          </p>
          <span className="frase-icon"><FaGift /></span>
        </div>
      </section>

      {/* =========================================================
          TIPOS DE REGALOS - GRID DE CARDS
          ========================================================= */}
      <section className="regalos-grid-section">
        <h2>ELEGÍ TU <span className="highlight">BOX REGALO</span></h2>
        
        <div className="regalos-grid">
          {regalos.map((regalo) => (
            <motion.div 
              key={regalo.id}
              className={`regalo-card ${regalo.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: regalo.id * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setRegaloSeleccionado(regaloSeleccionado === regalo.id ? null : regalo.id)}
            >
              <div className="card-imagen">
                <img src={regalo.imagen} alt={regalo.nombre} />
                <div className="card-icono">
                  {regalo.icono}
                </div>
              </div>
              
              <div className="card-contenido">
                <h3>{regalo.nombre}</h3>
                <p className="card-descripcion">{regalo.descripcion}</p>
                
                <div className="card-precio">
                  <span className="precio">${regalo.precio.toLocaleString()}</span>
                </div>
                
                {regaloSeleccionado === regalo.id && (
                  <motion.div 
                    className="card-incluye"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <h4>INCLUYE:</h4>
                    <ul>
                      {regalo.incluye.map((item, index) => (
                        <li key={index}>
                          <FaCheck className="check-icon" /> {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                <div className="card-acciones">
                  <button className="btn-comprar">
                    <FaShoppingCart /> AGREGAR
                  </button>
                  <button className="btn-ver">
                    {regaloSeleccionado === regalo.id ? 'VER MENOS' : 'VER DETALLE'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PROMO ESPECIAL - AMARILLO CON TEXTO NEGRO
          ========================================================= */}
      <section className="promo-especial">
        <div className="promo-contenido">
          <span className="promo-tag">🎁 PROMO ESPECIAL</span>
          <h2>ENVÍO GRATIS</h2>
          <p className="promo-texto">
            EN TODOS LOS <span className="promo-highlight">BOX REGALO</span>
          </p>
          <p className="promo-detalle">Válido hasta fin de mes</p>
          <Link to="/tequenos/tienda" className="btn-promo">
            VER TODOS
          </Link>
        </div>
      </section>

      {/* =========================================================
          CÓMO REGALAR - PASOS
          ========================================================= */}
      <section className="como-regalar">
        <h2>¿CÓMO <span className="highlight">REGALAR?</span></h2>
        
        <div className="pasos-grid">
          <div className="paso-card">
            <div className="paso-numero">1</div>
            <GiCorn className="paso-icon" />
            <h4>ELEGÍ EL BOX</h4>
            <p>Seleccioná el regalo que más te guste</p>
          </div>
          
          <div className="paso-card">
            <div className="paso-numero">2</div>
            <FaCalendarAlt className="paso-icon" />
            <h4>ELEGÍ LA FECHA</h4>
            <p>Cuándo querés que llegue</p>
          </div>
          
          <div className="paso-card">
            <div className="paso-numero">3</div>
            <FaHeart className="paso-icon" />
            <h4>PERSONALIZÁ</h4>
            <p>Agregá un mensaje especial</p>
          </div>
          
          <div className="paso-card">
            <div className="paso-numero">4</div>
            <FaTruck className="paso-icon" />
            <h4>RECIBE EL REGALO</h4>
            <p>Llega a la puerta de tu ser querido</p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA WHATSAPP - PERSONALIZACIÓN
          ========================================================= */}
      <section className="whatsapp-personalizacion">
        <div className="personalizacion-contenido">
          <h3>¿QUERÉS UN REGALO <span className="highlight">TOTALMENTE PERSONALIZADO?</span></h3>
          <p>Contactanos por WhatsApp y armamos el box ideal para esa persona especial</p>
          <a 
            href="https://wa.me/584141234567?text=Hola!%20Quiero%20armar%20un%20regalo%20personalizado%20con%20tequeños"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp /> HABLAR CON ASESOR
          </a>
        </div>
      </section>
    </motion.div>
  );
}

export default RegalosTequenos;