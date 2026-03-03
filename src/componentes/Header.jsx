// =========================================================
// Header.jsx - HEADER DE PIRULA TEQUEÑOS
// CON CARRITO SEPARADO DEL LOGO (COMO ESTABA BIEN)
// =========================================================
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BsList,
  BsHouseDoor,
  BsTag,
  BsShop,
  BsTelephone,
  BsInfoCircle,
  BsCart3,
  BsStar,
  BsGift,
} from "react-icons/bs";
import { GiCorn, GiHotDog } from "react-icons/gi";
import { FaChair } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_Header.scss";

// =========================================================
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // =========================================================
  // ENLACES DE NAVEGACIÓN
  // =========================================================
  const navLinks = [
    { path: "/tequenos", icon: <BsHouseDoor />, label: "Inicio" },
    { path: "/tequenos/promos", icon: <BsTag />, label: "Promos" },
    { path: "/tequenos/tienda", icon: <BsShop />, label: "Tienda" },
    { path: "/tequenos/regalos", icon: <BsGift />, label: "Regalos" },
    { path: "/tequenos/nosotros", icon: <BsInfoCircle />, label: "Pirula" }
  ];

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <header className={`pirula-header ${scrolled ? 'scrolled' : ''}`}>
      
      {/* =========================================================
          TOPBAR - ROJO CON TEXTO BLANCO
          ========================================================= */}
      <div className="pirula-topbar">
        <div className="pirula-topbar-container">
          
          <span className="topbar-item">
            <i className="bi bi-truck"></i> Envíos gratis +10 docenas
          </span>
          
          <div className="topbar-actions">
            <Link to="/tequenos/reservas" className="topbar-btn reserva-btn">
              <FaChair className="btn-icon" />
              <span>RESERVAR MESA</span>
            </Link>
            
            <Link to="/tequenos/contacto" className="topbar-btn contacto-btn">
              <BsTelephone className="btn-icon" />
              <span>CONTACTO</span>
            </Link>
          </div>
          
          <div className="topbar-right">
            <span className="topbar-item">
              <i className="bi bi-whatsapp"></i> +58 414-1234567
            </span>
            <span className="topbar-item">
              <i className="bi bi-star"></i> 100% Artesanales
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          NAVBAR PRINCIPAL
          ========================================================= */}
      <Navbar expand="lg" className="pirula-navbar" expanded={isMobileMenuOpen}>
        <Container className="pirula-navbar-container">
          
          {/* LOGO - IZQUIERDA */}
          <Navbar.Brand as={Link} to="/tequenos" className="pirula-logo">
            <div className="logo-wrapper">
              <GiCorn className="logo-icon" />
              <div className="logo-text">
                <span className="logo-title">PIRULA</span>
                <span className="logo-subtitle">TEQUEÑOS</span>
              </div>
              <GiHotDog className="logo-icon" />
            </div>
          </Navbar.Brand>

          {/* MENÚ DE NAVEGACIÓN - CENTRO */}
          <Navbar.Collapse id="pirula-nav-menu">
            <Nav className="pirula-nav-menu">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`pirula-nav-link ${
                    location.pathname === link.path ? 'active' : ''
                  }`}
                >
                  <span className="nav-icon">{link.icon}</span>
                  <span className="nav-label">{link.label}</span>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>

          {/* ACCIONES - DERECHA (CARRITO + MI PEDIDO + HAMBURGUESA) */}
          <div className="pirula-header-actions">
            {/* Link a pedidos (carrito + texto) */}
            <Link to="/tequenos/pedidos" className="cart-link">
              <BsCart3 className="cart-icon" />
              <span className="cart-text">MI PEDIDO</span>
              <span className="cart-badge">3</span>
            </Link>
            
            {/* Menú hamburguesa */}
            <Navbar.Toggle
              aria-controls="pirula-nav-menu"
              className="pirula-menu-toggle"
              onClick={handleToggleMobileMenu}
            >
              <BsList className="menu-icon" />
            </Navbar.Toggle>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;