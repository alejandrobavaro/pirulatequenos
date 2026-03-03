// =========================================================
// PedidosTequenos.jsx - CARRITO DE COMPRAS DE PIRULA TEQUEÑOS
// CON LOGO EN MEJOR UBICACIÓN (FOOTER DEL RESUMEN)
// =========================================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTrash, BsPlus, BsDash, BsTruck, BsCreditCard, BsCash, BsWhatsapp, BsLightning } from 'react-icons/bs';
import { GiCorn } from 'react-icons/gi';
import '../assets/scss/_03-Componentes/_PedidosTequenos.scss';

// =========================================================
const PedidosTequenos = () => {
  // =========================================================
  // IMÁGENES DE 04-img-galeria1 PARA LOS PRODUCTOS
  // =========================================================
  const imagenesProductos = [
    '/img/04-img-galeria1/1.png',
    '/img/04-img-galeria1/1 copy.png',
    '/img/04-img-galeria1/1 copy 2.png',
    '/img/04-img-galeria1/2.png',
    '/img/04-img-galeria1/2 copy.png',
    '/img/04-img-galeria1/3.png',
    '/img/04-img-galeria1/3 copy.png'
  ];

  // =========================================================
  const [items, setItems] = useState([
    {
      id: 1,
      nombre: 'TEQUEÑOS CLÁSICOS',
      precio: 3500,
      cantidad: 2,
      imagen: imagenesProductos[0] // 1.png
    },
    {
      id: 2,
      nombre: 'TEQUEÑOS GOURMET',
      precio: 4500,
      cantidad: 1,
      imagen: imagenesProductos[1] // 1 copy.png
    },
    {
      id: 3,
      nombre: 'SALSA DE LA CASA',
      precio: 800,
      cantidad: 2,
      imagen: imagenesProductos[3] // 2.png
    },
    {
      id: 4,
      nombre: 'MINI TEQUEÑOS',
      precio: 2800,
      cantidad: 1,
      imagen: imagenesProductos[4] // 2 copy.png
    }
  ]);

  const [metodoPago, setMetodoPago] = useState('transferencia');
  const [direccion, setDireccion] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [codigoPromo, setCodigoPromo] = useState('');

  // =========================================================
  const subtotal = items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const envio = subtotal >= 10000 ? 0 : 500;
  const descuento = codigoPromo.toLowerCase() === 'pirula10' ? subtotal * 0.1 : 0;
  const total = subtotal + envio - descuento;

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setItems(items.map(item => 
      item.id === id ? {...item, cantidad: nuevaCantidad} : item
    ));
  };

  const eliminarItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const enviarPedidoWhatsApp = () => {
    const mensaje = `🍟 *NUEVO PEDIDO PIRULA TEQUEÑOS* %0A%0A${items.map(item => 
      `• ${item.cantidad} x ${item.nombre}: $${(item.precio * item.cantidad).toLocaleString()}`
    ).join('%0A')}%0A%0A➖➖➖➖➖➖➖%0A📦 *Subtotal:* $${subtotal.toLocaleString()}%0A🚚 *Envío:* $${envio.toLocaleString()}%0A💰 *Descuento:* $${descuento.toLocaleString()}%0A🔥 *TOTAL:* $${total.toLocaleString()}%0A➖➖➖➖➖➖➖%0A📍 *Dirección:* ${direccion || 'Por confirmar'}%0A💳 *Pago:* ${metodoPago}%0A📝 *Observaciones:* ${observaciones || 'Ninguna'}`;
    
    window.open(`https://wa.me/584141234567?text=${mensaje}`, '_blank');
  };

  const aplicarPromo = () => {
    if (codigoPromo.toLowerCase() === 'pirula10') {
      alert('🎉 Código aplicado: 10% de descuento');
    } else {
      alert('❌ Código inválido');
    }
  };

  // =========================================================
  return (
    <div className="pedidos-pirula">
      
      {/* =========================================================
          HERO SECTION - SIN LOGO
          ========================================================= */}
      <section className="pedidos-header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1 className="header-title">
            <span className="title-white">TU</span>{' '}
            <span className="title-yellow">PEDIDO</span>
          </h1>
          <p className="header-subtitle">
            Revisa tus productos antes de confirmar
          </p>
        </div>
      </section>

      <div className="pedidos-container">
        
        {/* =========================================================
            LISTA DE PRODUCTOS - CON LOGO PEQUEÑO
            ========================================================= */}
        <div className="productos-lista">
          <div className="lista-header">
            <img 
              src="/img/02-logos/logotequenospirula1a-sinfondo.png" 
              alt="Pirula Tequeños"
              className="lista-logo"
            />
            <h2>PRODUCTOS <span className="highlight">SELECCIONADOS</span></h2>
          </div>
          
          {items.length === 0 ? (
            <div className="carrito-vacio">
              <GiCorn className="vacio-icon" />
              <p>Tu carrito está vacío</p>
              <Link to="/tequenos/tienda" className="btn-seguir">
                <BsLightning /> VER TIENDA
              </Link>
            </div>
          ) : (
            <>
              {items.map(item => (
                <div key={item.id} className="item-carrito">
                  <div className="item-imagen">
                    <img src={item.imagen} alt={item.nombre} />
                  </div>
                  
                  <div className="item-detalles">
                    <h3>{item.nombre}</h3>
                    <div className="item-precio">${item.precio.toLocaleString()}/docena</div>
                    
                    <div className="item-acciones">
                      <div className="cantidad-control">
                        <button 
                          className="cantidad-btn"
                          onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                        >
                          <BsDash />
                        </button>
                        <span className="cantidad-valor">{item.cantidad}</span>
                        <button 
                          className="cantidad-btn"
                          onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                        >
                          <BsPlus />
                        </button>
                      </div>
                      
                      <div className="item-subtotal">
                        ${(item.precio * item.cantidad).toLocaleString()}
                      </div>
                      
                      <button 
                        className="btn-eliminar"
                        onClick={() => eliminarItem(item.id)}
                      >
                        <BsTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="acciones-lista">
                <Link to="/tequenos/tienda" className="btn-seguir">
                  + SEGUIR COMPRANDO
                </Link>
              </div>
            </>
          )}
        </div>

        {/* =========================================================
            RESUMEN Y CHECKOUT
            ========================================================= */}
        <div className="resumen-pedido">
          
          {/* LOGO EN LA PARTE SUPERIOR DEL RESUMEN */}
          <div className="resumen-logo">
            <img 
              src="/img/02-logos/logotequenospirula1a-sinfondo.png" 
              alt="Pirula Tequeños"
              className="resumen-logo-image"
            />
          </div>
          
          <h2>RESUMEN <span className="highlight">DEL PEDIDO</span></h2>
          
          <div className="resumen-detalles">
            <div className="resumen-item">
              <span>Subtotal:</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="resumen-item">
              <span>Envío:</span>
              <span className={envio === 0 ? 'envio-gratis' : ''}>
                {envio === 0 ? 'GRATIS' : `$${envio.toLocaleString()}`}
              </span>
            </div>
            {descuento > 0 && (
              <div className="resumen-item descuento">
                <span>Descuento (10%):</span>
                <span>-${descuento.toLocaleString()}</span>
              </div>
            )}
            <div className="resumen-item total">
              <span>TOTAL:</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>

          <div className="codigo-promo">
            <input 
              type="text" 
              placeholder="CÓDIGO DE DESCUENTO" 
              value={codigoPromo}
              onChange={(e) => setCodigoPromo(e.target.value)}
            />
            <button onClick={aplicarPromo}>APLICAR</button>
          </div>

          <div className="metodo-pago">
            <h3>MÉTODO DE PAGO</h3>
            
            <label className="pago-option">
              <input 
                type="radio" 
                name="pago" 
                value="transferencia"
                checked={metodoPago === 'transferencia'}
                onChange={(e) => setMetodoPago(e.target.value)}
              />
              <span className="option-content">
                <BsCreditCard className="option-icon" />
                Transferencia bancaria
              </span>
            </label>
            
            <label className="pago-option">
              <input 
                type="radio" 
                name="pago" 
                value="efectivo"
                checked={metodoPago === 'efectivo'}
                onChange={(e) => setMetodoPago(e.target.value)}
              />
              <span className="option-content">
                <BsCash className="option-icon" />
                Efectivo (pago al recibir)
              </span>
            </label>
            
            <label className="pago-option">
              <input 
                type="radio" 
                name="pago" 
                value="pago-movil"
                checked={metodoPago === 'pago-movil'}
                onChange={(e) => setMetodoPago(e.target.value)}
              />
              <span className="option-content">
                <GiCorn className="option-icon" />
                Pago Móvil
              </span>
            </label>
          </div>

          <div className="direccion-entrega">
            <h3>DIRECCIÓN DE ENTREGA</h3>
            <textarea 
              placeholder="Ej: Av. Principal, Edif. 123, Apto 4, Mar del Plata"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              rows="3"
            ></textarea>
          </div>

          <div className="observaciones">
            <h3>OBSERVACIONES</h3>
            <textarea 
              placeholder="¿Alguna indicación especial?"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
              rows="2"
            ></textarea>
          </div>

          <button 
            className="btn-confirmar"
            onClick={enviarPedidoWhatsApp}
            disabled={items.length === 0}
          >
            <BsWhatsapp /> CONFIRMAR PEDIDO
          </button>

          <p className="nota-entrega">
            <BsTruck /> Tiempo de entrega: 24-48 horas hábiles
          </p>

          <div className="envio-banner">
            <BsLightning />
            <span>Envío gratis en compras +$10.000</span>
            <BsLightning />
          </div>
        </div>
      </div>
      
      {/* =========================================================
          LOGO EN EL FOOTER DEL COMPONENTE (NUEVA UBICACIÓN)
          ========================================================= */}
      <div className="pedidos-footer-logo">
        <img 
          src="/img/02-logos/logotequenospirula1a-sinfondo.png" 
          alt="Pirula Tequeños"
          className="footer-logo-image"
        />
        <p>Pirula Tequeños - El verdadero sabor tequeñero</p>
      </div>
    </div>
  );
};

export default PedidosTequenos;