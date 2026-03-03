// =========================================================
// MainSliderFotos.jsx - SLIDER DE PROMOCIONES PIRULA TEQUEÑOS
// CON NUEVO COLOR #8b4242, LOGO Y TODAS LAS IMÁGENES
// =========================================================
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_MainSliderFotos.scss";
import { BsLightning, BsFire, BsStar, BsStarFill } from "react-icons/bs";
import { GiCorn, GiHotDog, GiCheeseWedge } from "react-icons/gi";

const MainSliderFotos = () => {
  // Configuración mejorada del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    dotsClass: "slick-dots pirula-dots"
  };

  // =========================================================
  // IMÁGENES DEL SLIDER (TODAS LAS DE 04-img-galeria1)
  // =========================================================
  const imagenesSlider = [
    '/img/04-img-galeria1/1.png',
    '/img/04-img-galeria1/1 copy.png',
    '/img/04-img-galeria1/1 copy 2.png',
    '/img/04-img-galeria1/2.png',
    '/img/04-img-galeria1/2 copy.png',
    '/img/04-img-galeria1/3.png',
    '/img/04-img-galeria1/3 copy.png'
  ];

  // Banners promocionales de Pirula Tequeños (con todas las imágenes)
  const banners = [
    {
      id: 1,
      imagen: imagenesSlider[0], // 1.png
      titulo: "TEQUEÑOS CLÁSICOS",
      promo: "3x2 EN CLÁSICOS",
      descripcion: "Llevá 3 docenas y pagá solo 2",
      color: "rojo",
      icono: <GiCorn />
    },
    {
      id: 2,
      imagen: imagenesSlider[1], // 1 copy.png
      titulo: "TEQUEÑOS GOURMET",
      promo: "2x1 EN GOURMET",
      descripcion: "Queso azul, nueces y miel",
      color: "amarillo",
      icono: <GiHotDog />
    },
    {
      id: 3,
      imagen: imagenesSlider[2], // 1 copy 2.png
      titulo: "COMBOS FAMILIARES",
      promo: "5 DOCENAS + SALSA GRATIS",
      descripcion: "Ideal para compartir en casa",
      color: "rojo",
      icono: <GiCheeseWedge />
    },
    {
      id: 4,
      imagen: imagenesSlider[3], // 2.png
      titulo: "ENVÍOS GRATIS",
      promo: "+10 DOCENAS",
      descripcion: "A todo el país sin cargo",
      color: "amarillo",
      icono: <BsLightning />
    },
    {
      id: 5,
      imagen: imagenesSlider[4], // 2 copy.png
      titulo: "SALSAS DE LA CASA",
      promo: "COMPRA 3 LLEVAS 4",
      descripcion: "Las mejores salsas venezolanas",
      color: "rojo",
      icono: <BsFire />
    },
    {
      id: 6,
      imagen: imagenesSlider[5], // 3.png
      titulo: "TEQUEÑOS MIXTOS",
      promo: "20% DE DESCUENTO",
      descripcion: "Queso y jamón, la combinación perfecta",
      color: "amarillo",
      icono: <GiCorn />
    },
    {
      id: 7,
      imagen: imagenesSlider[6], // 3 copy.png
      titulo: "PROMO ESPECIAL",
      promo: "2 DOCENAS + SALSA",
      descripcion: "El combo perfecto para compartir",
      color: "rojo",
      icono: <GiHotDog />
    }
  ];

  return (
    <div className="pirula-slider-container">
      
      {/* =========================================================
          DECORACIÓN SUPERIOR MEJORADA
          ========================================================= */}
      <div className="slider-decoration">
        <span className="deco-line"></span>
        <div className="deco-logo">
          <img 
            src="/img/02-logos/logotequenospirula1a-sinfondo.png" 
            alt="Pirula Tequeños"
            className="deco-logo-image"
          />
        </div>
        <span className="deco-line"></span>
      </div>

      {/* =========================================================
          SLIDER PRINCIPAL MEJORADO
          ========================================================= */}
      <div className="pirula-slider-content">
        <Slider {...sliderSettings}>
          {banners.map((banner) => (
            <div key={banner.id} className="pirula-slide">
              <div className={`slide-overlay ${banner.color}`}></div>
              <img
                src={banner.imagen}
                alt={banner.titulo}
                className="slide-image"
              />
              
              {/* =========================================================
                  CONTENIDO MEJORADO SOBRE LA IMAGEN
                  ========================================================= */}
              <div className="slide-content">
                <div className="slide-badge">
                  <span className="badge-icon">{banner.icono}</span>
                  <span className="badge-text">PROMO</span>
                </div>
                
                <h3 className="slide-title">{banner.titulo}</h3>
                <p className="slide-promo">{banner.promo}</p>
                <p className="slide-descripcion">{banner.descripcion}</p>
                
                <div className="slide-rating">
                  <BsStarFill className="star" />
                  <BsStarFill className="star" />
                  <BsStarFill className="star" />
                  <BsStarFill className="star" />
                  <BsStarFill className="star" />
                </div>
                
                <button className="slide-btn">
                  <BsLightning className="btn-icon" />
                  <span>COMPRAR AHORA</span>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* =========================================================
          LOGO INFERIOR (versión negro)
          ========================================================= */}
      <div className="slider-footer-logo">
        <img 
          src="/img/02-logos/logotequenospirula3-negro.png" 
          alt="Pirula Tequeños"
          className="footer-logo"
        />
      </div>
    </div>
  );
};

export default MainSliderFotos;