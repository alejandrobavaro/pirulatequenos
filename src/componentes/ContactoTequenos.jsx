// =========================================================
// ContactoTequenos.jsx - PÁGINA DE CONTACTO DE PIRULA TEQUEÑOS
// CON NUEVO COLOR #8b4242, LOGO Y ANIMACIONES
// =========================================================
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  BsWhatsapp, 
  BsTelephone, 
  BsEnvelope, 
  BsGeoAlt, 
  BsClock, 
  BsInstagram, 
  BsFacebook, 
  BsTruck, 
  BsLightning,
  BsSend,
  BsStar,
  BsStarFill
} from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
import { GiCorn, GiHotDog, GiCheeseWedge } from 'react-icons/gi';
import '../assets/scss/_03-Componentes/_ContactoTequenos.scss';

// =========================================================
const ContactoTequenos = () => {
  // =========================================================
  const location = useLocation();
  const formRef = useRef(null);
  
  // =========================================================
  // ESTADO DEL FORMULARIO
  // =========================================================
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipo: 'particular',
    mensaje: ''
  });

  const [formStatus, setFormStatus] = useState({
    enviando: false,
    enviado: false,
    error: null
  });

  // =========================================================
  // EFECTO PARA SCROLL AL FORMULARIO (desde botones "CONTACTO")
  // =========================================================
  useEffect(() => {
    if (location.pathname === '/tequenos/contacto' && location.state?.scrollToForm) {
      const timer = setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.state]);

  // =========================================================
  // MANEJADORES DEL FORMULARIO
  // =========================================================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ enviando: true, enviado: false, error: null });

    try {
      const response = await fetch('https://formspree.io/f/tu-endpoint-aqui', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus({ enviando: false, enviado: true, error: null });
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          tipo: 'particular',
          mensaje: ''
        });
        
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, enviado: false }));
        }, 5000);
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      setFormStatus({ 
        enviando: false, 
        enviado: false, 
        error: 'Hubo un problema. Intenta nuevamente.' 
      });
    }
  };

  // =========================================================
  // FUNCIONES PARA COMPARTIR
  // =========================================================
  const generateWhatsAppMessage = () => {
    return `🍟 *PIRULA TEQUEÑOS* 🍟

Hola! Quiero contactarme con ustedes:

📍 *Ubicación:* Av. Principal de Las Mercedes, Local 5
📞 *Teléfono:* (0212) 123-4567
📱 *WhatsApp:* +58 414-1234567

⏰ *Horarios:*
Lunes a Viernes: 8:00 AM - 6:00 PM
Sábados: 9:00 AM - 2:00 PM

🌐 *Web:* https://tequenospirula.com

¡Los esperamos!`;
  };

  const shareOnWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const shareWithNativeAPI = async () => {
    const message = generateWhatsAppMessage();
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Pirula Tequeños - Contacto',
          text: message,
          url: 'https://tequenospirula.com/tequenos/contacto'
        });
      } catch (error) {
        console.log('Error al compartir:', error);
        navigator.clipboard.writeText(message);
        alert('¡Información copiada al portapapeles!');
      }
    } else {
      navigator.clipboard.writeText(message);
      alert('¡Información copiada al portapapeles!');
    }
  };

  // =========================================================
  return (
    <div className="contacto-pirula">
      
      {/* =========================================================
          BOTONES DE COMPARTIR (mejorados)
          ========================================================= */}
      <div className="floating-share-buttons">
        <button 
          className="float-btn whatsapp-float" 
          onClick={shareOnWhatsApp}
          aria-label="Compartir por WhatsApp"
        >
          <BsWhatsapp />
        </button>
        
        <button 
          className="float-btn share-float" 
          onClick={shareWithNativeAPI}
          aria-label="Compartir"
        >
          <FaShare />
        </button>
      </div>

      {/* =========================================================
          HERO SECTION - CON NUEVO COLOR Y LOGO
          ========================================================= */}
      <section className="contacto-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
    
          
          <h1 className="hero-title">
            <span className="title-white">¡ESTAMOS</span>{' '}
            <span className="title-yellow">AQUÍ PARA TI!</span>
          </h1>
          <p className="hero-subtitle">
            ¿Preguntas? ¿Pedidos especiales? ¿Quieres ser distribuidor?
          </p>
          
          {/* Badge decorativo */}
          <div className="hero-badge">
            <GiCorn className="badge-icon pulse" />
            <span>ATENCIÓN PERSONALIZADA</span>
            <GiCorn className="badge-icon pulse" />
          </div>
        </div>
      </section>

      {/* =========================================================
          DECORACIÓN (como en Home)
          ========================================================= */}
      <div className="contacto-decoration">
        <span className="deco-line"></span>
        <GiHotDog className="deco-icon" />
        <span className="deco-line"></span>
      </div>

      {/* =========================================================
          INFO CARDS - CON NUEVO COLOR
          ========================================================= */}
      <section className="info-cards">
        <div className="cards-grid">
          
          <div className="info-card" data-aos="fade-up">
            <div className="card-icon whatsapp">
              <BsWhatsapp />
            </div>
            <h3>WHATSAPP</h3>
            <p>Respuesta inmediata</p>
            <a href="https://wa.me/584141234567" target="_blank" rel="noopener noreferrer" className="card-link">
              +58 414-1234567
            </a>
          </div>

          <div className="info-card" data-aos="fade-up" data-aos-delay="100">
            <div className="card-icon telefono">
              <BsTelephone />
            </div>
            <h3>TELÉFONO</h3>
            <p>Atención al cliente</p>
            <a href="tel:+582121234567" className="card-link">
              (0212) 123-4567
            </a>
          </div>

          <div className="info-card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-icon email">
              <BsEnvelope />
            </div>
            <h3>EMAIL</h3>
            <p>Envíanos un mensaje</p>
            <a href="mailto:info@tequenospirula.com" className="card-link">
              info@tequenospirula.com
            </a>
          </div>

          <div className="info-card" data-aos="fade-up" data-aos-delay="300">
            <div className="card-icon ubicacion">
              <BsGeoAlt />
            </div>
            <h3>UBICACIÓN</h3>
            <p>Mar del Plata - Argentina</p>
            <span className="card-text">Av. Principal, Local 5</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECCIÓN PRINCIPAL: FORMULARIO + HORARIOS + MAPA
          ========================================================= */}
      <section className="contacto-grid">
        
        {/* COLUMNA IZQUIERDA - FORMULARIO */}
        <div className="formulario-col" ref={formRef}>
          <div className="form-header">
            <GiCheeseWedge className="form-icon" />
            <h2>ENVÍANOS UN <span className="highlight">MENSAJE</span></h2>
          </div>
          <p className="form-subtitle">Te responderemos en menos de 24 horas</p>

          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Nombre completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej: María González"
                />
              </div>

              <div className="form-group">
                <label>Correo electrónico *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div className="form-group">
                <label>Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="0414-1234567"
                />
              </div>

              <div className="form-group">
                <label>Tipo de cliente</label>
                <select name="tipo" value={formData.tipo} onChange={handleChange}>
                  <option value="particular">Particular</option>
                  <option value="restaurante">Restaurante</option>
                  <option value="empresa">Empresa / Evento</option>
                  <option value="distribuidor">Distribuidor</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Mensaje *</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="4"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>

            <div className="form-checkbox">
              <input type="checkbox" id="terminos" required />
              <label htmlFor="terminos">
                Acepto los términos y condiciones
              </label>
            </div>

            <button 
              type="submit" 
              className="btn-enviar"
              disabled={formStatus.enviando}
            >
              {formStatus.enviando ? (
                'ENVIANDO...'
              ) : formStatus.enviado ? (
                <>✓ MENSAJE ENVIADO</>
              ) : (
                <>ENVIAR MENSAJE <BsSend className="btn-icon" /></>
              )}
            </button>

            {formStatus.error && (
              <p className="error-mensaje">{formStatus.error}</p>
            )}
          </form>
        </div>

        {/* COLUMNA DERECHA - HORARIOS Y REDES */}
        <div className="info-col">
          
          <div className="horarios-card">
            <div className="horarios-icon">
              <BsClock />
            </div>
            <h3>HORARIOS DE ATENCIÓN</h3>
            
            <div className="horarios-list">
              <div className="horario-item">
                <span className="dia">Lunes a Viernes:</span>
                <span className="hora">8:00 AM - 6:00 PM</span>
              </div>
              <div className="horario-item">
                <span className="dia">Sábados:</span>
                <span className="hora">9:00 AM - 2:00 PM</span>
              </div>
              <div className="horario-item">
                <span className="dia">Domingos:</span>
                <span className="hora">Cerrado (solo online)</span>
              </div>
            </div>

            <div className="redes-sociales">
              <h4>SÍGUENOS</h4>
              <div className="redes-icons">
                <a href="#" className="red-social">
                  <BsInstagram />
                </a>
                <a href="#" className="red-social">
                  <BsFacebook />
                </a>
                <a href="#" className="red-social">
                  <BsWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* TARJETA DE UBICACIÓN MEJORADA */}
          <div className="ubicacion-card">
            <div className="ubicacion-header">
              <GiCorn className="ubicacion-icon pulse" />
              <h3>VISÍTANOS</h3>
            </div>
            <p className="direccion">Av. Principal de Las Mercedes, Local 5</p>
            <p className="ciudad">Mar del Plata - Argentina</p>
            
            <div className="mapa-preview">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.4!2d-66.8!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA2NsKwNDgnMDAuMCJX!5e0!3m2!1ses!2sve!4v1234567890"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                title="Ubicación Pirula Tequeños"
              ></iframe>
            </div>

            <div className="acciones-mapa">
              <button className="btn-mapa">
                <BsGeoAlt /> CÓMO LLEGAR
              </button>
              <button className="btn-mapa compartir" onClick={shareOnWhatsApp}>
                <BsWhatsapp /> COMPARTIR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA MAYORISTAS MEJORADO
          ========================================================= */}
      <section className="mayoristas-cta">
        <BsTruck className="cta-icon pulse" />
        <h3>¿ERES RESTAURANTE O DISTRIBUIDOR?</h3>
        <p>Tenemos precios especiales y entregas programadas para negocios</p>
        <a href="https://wa.me/584141234567" className="btn-mayoristas">
          <BsWhatsapp /> CONTACTAR A VENTAS
        </a>
        
        {/* Estrellas decorativas */}
        <div className="cta-stars">
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
        </div>
      </section>
    </div>
  );
};

export default ContactoTequenos;