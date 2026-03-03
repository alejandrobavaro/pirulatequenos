// =========================================================
// TiendaTequenos.jsx - TIENDA DE PIRULA TEQUEÑOS
// CON NUEVO COLOR #8b4242 E IMÁGENES DE 04-img-galeria1
// =========================================================
import React, { useState } from 'react';
import { BsCart3, BsSearch, BsFilter, BsGrid, BsList, BsLightning, BsStar, BsStarFill } from 'react-icons/bs';
import { GiCorn, GiHotDog, GiCheeseWedge, GiCookingPot } from 'react-icons/gi';
import '../assets/scss/_03-Componentes/_TiendaTequenos.scss';

// =========================================================
const TiendaTequenos = () => {
  // =========================================================
  const [vista, setVista] = useState('grid');
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  
  // =========================================================
  // IMÁGENES DE 04-img-galeria1 (para usar en todos los productos)
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
  // CATEGORÍAS CON ICONOS
  // =========================================================
  const categorias = [
    { id: 'todos', nombre: 'Todos', icono: <GiCorn /> },
    { id: 'clasicos', nombre: 'Clásicos', icono: <GiCheeseWedge /> },
    { id: 'gourmet', nombre: 'Gourmet', icono: <GiHotDog /> },
    { id: 'mini', nombre: 'Mini', icono: <GiCorn /> },
    { id: 'salsas', nombre: 'Salsas', icono: <GiCookingPot /> },
    { id: 'combos', nombre: 'Combos', icono: <BsLightning /> }
  ];

  // =========================================================
  // PRODUCTOS CON IMÁGENES DE 04-img-galeria1 (repetidas)
  // =========================================================
  const productos = [
    {
      id: 1,
      nombre: 'TEQUEÑOS CLÁSICOS',
      descripcion: 'Queso blanco tequeñero, masa casera',
      precio: 3500,
      precioPorMayor: 3200,
      imagen: imagenesProductos[0], // 1.png
      categoria: 'clasicos',
      stock: true,
      rating: 5,
      destacado: true
    },
    {
      id: 2,
      nombre: 'TEQUEÑOS GOURMET',
      descripcion: 'Queso azul, nueces y toque de miel',
      precio: 4500,
      precioPorMayor: 4000,
      imagen: imagenesProductos[1], // 1 copy.png
      categoria: 'gourmet',
      stock: true,
      rating: 5,
      destacado: false
    },
    {
      id: 3,
      nombre: 'MINI TEQUEÑOS',
      descripcion: 'Ideales para buffets y eventos',
      precio: 2800,
      precioPorMayor: 2500,
      imagen: imagenesProductos[2], // 1 copy 2.png
      categoria: 'mini',
      stock: true,
      rating: 5,
      destacado: false
    },
    {
      id: 4,
      nombre: 'SALSA DE LA CASA',
      descripcion: 'Salsa picante estilo tequeñero',
      precio: 800,
      precioPorMayor: 700,
      imagen: imagenesProductos[3], // 2.png
      categoria: 'salsas',
      stock: true,
      rating: 4,
      destacado: false
    },
    {
      id: 5,
      nombre: 'COMBO FAMILIAR',
      descripcion: '3 docenas + 2 salsas',
      precio: 9800,
      precioPorMayor: 9200,
      imagen: imagenesProductos[4], // 2 copy.png
      categoria: 'combos',
      stock: true,
      rating: 5,
      destacado: true
    },
    {
      id: 6,
      nombre: 'TEQUEÑOS DE QUESO',
      descripcion: 'Queso telita, sabor auténtico',
      precio: 3700,
      precioPorMayor: 3400,
      imagen: imagenesProductos[5], // 3.png
      categoria: 'clasicos',
      stock: true,
      rating: 5,
      destacado: false
    },
    {
      id: 7,
      nombre: 'TEQUEÑOS PREMIUM',
      descripcion: 'Queso parmesano y hierbas',
      precio: 4800,
      precioPorMayor: 4300,
      imagen: imagenesProductos[6], // 3 copy.png
      categoria: 'gourmet',
      stock: true,
      rating: 5,
      destacado: false
    },
    {
      id: 8,
      nombre: 'COMBO EMPRESARIAL',
      descripcion: '10 docenas variadas',
      precio: 32000,
      precioPorMayor: 29900,
      imagen: imagenesProductos[0], // 1.png (repetida)
      categoria: 'combos',
      stock: true,
      rating: 5,
      destacado: true
    },
    {
      id: 9,
      nombre: 'TEQUEÑOS MIXTOS',
      descripcion: 'Queso y jamón, la combinación perfecta',
      precio: 4000,
      precioPorMayor: 3600,
      imagen: imagenesProductos[1], // 1 copy.png (repetida)
      categoria: 'clasicos',
      stock: true,
      rating: 5,
      destacado: false
    },
    {
      id: 10,
      nombre: 'SALSA PICANTE EXTRA',
      descripcion: 'Con ají dulce tequeñero',
      precio: 900,
      precioPorMayor: 800,
      imagen: imagenesProductos[2], // 1 copy 2.png (repetida)
      categoria: 'salsas',
      stock: true,
      rating: 4,
      destacado: false
    },
    {
      id: 11,
      nombre: 'COMBO FIESTERO',
      descripcion: '5 docenas + 3 salsas + servilletas',
      precio: 15800,
      precioPorMayor: 14200,
      imagen: imagenesProductos[3], // 2.png (repetida)
      categoria: 'combos',
      stock: true,
      rating: 5,
      destacado: true
    },
    {
      id: 12,
      nombre: 'TEQUEÑOS DE QUESO TELITA',
      descripcion: 'El auténtico sabor tequeñero',
      precio: 3800,
      precioPorMayor: 3400,
      imagen: imagenesProductos[4], // 2 copy.png (repetida)
      categoria: 'clasicos',
      stock: true,
      rating: 5,
      destacado: false
    }
  ];

  // =========================================================
  // FILTRAR PRODUCTOS
  // =========================================================
  const productosFiltrados = productos.filter(producto => {
    const coincideCategoria = categoriaActiva === 'todos' || producto.categoria === categoriaActiva;
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                            producto.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  // =========================================================
  return (
    <div className="tienda-pirula">
      
      {/* =========================================================
          HEADER DE LA TIENDA - CON NUEVO COLOR
          ========================================================= */}
      <section className="tienda-header">
        <h1>NUESTRA <span className="highlight">TIENDA</span></h1>
        <p>Selecciona tus tequeños favoritos</p>
      </section>

      {/* =========================================================
          BARRA DE BÚSQUEDA Y FILTROS
          ========================================================= */}
      <section className="tienda-barra">
        <div className="busqueda-container">
          <BsSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Buscar tequeños, salsas, combos..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        
        <div className="tienda-acciones">
          <button className="filtro-btn">
            <BsFilter /> FILTRAR
          </button>
          <div className="vista-toggles">
            <button 
              className={`vista-btn ${vista === 'grid' ? 'active' : ''}`}
              onClick={() => setVista('grid')}
            >
              <BsGrid />
            </button>
            <button 
              className={`vista-btn ${vista === 'list' ? 'active' : ''}`}
              onClick={() => setVista('list')}
            >
              <BsList />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORÍAS CON ICONOS
          ========================================================= */}
      <section className="categorias-pirula">
        {categorias.map(cat => (
          <button
            key={cat.id}
            className={`categoria-btn ${categoriaActiva === cat.id ? 'active' : ''}`}
            onClick={() => setCategoriaActiva(cat.id)}
          >
            <span className="categoria-icon">{cat.icono}</span>
            <span className="categoria-nombre">{cat.nombre}</span>
          </button>
        ))}
      </section>

      {/* =========================================================
          RESULTADOS
          ========================================================= */}
      <div className="resultados-info">
        <span>{productosFiltrados.length} productos encontrados</span>
      </div>

      {/* =========================================================
          GRID DE PRODUCTOS
          ========================================================= */}
      <section className={`productos-section ${vista}`}>
        {productosFiltrados.map(producto => (
          <div key={producto.id} className="producto-card">
            {producto.destacado && (
              <div className="card-badge">
                <BsLightning /> DESTACADO
              </div>
            )}
            
            <div className="card-imagen">
              <img src={producto.imagen} alt={producto.nombre} />
              {!producto.stock && <div className="sin-stock">SIN STOCK</div>}
            </div>
            
            <div className="card-contenido">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              
              <div className="card-rating">
                {[...Array(5)].map((_, i) => (
                  i < producto.rating ? 
                    <BsStarFill key={i} className="star-filled" /> : 
                    <BsStar key={i} className="star-empty" />
                ))}
              </div>
              
              <div className="card-precio">
                <span className="precio">${producto.precio.toLocaleString()}</span>
                <span className="unidad">/docena</span>
              </div>
              
              <div className="precios-mayorista">
                <span className="mayorista-label">Mayorista (10+):</span>
                <span className="mayorista-valor">${producto.precioPorMayor.toLocaleString()}/docena</span>
              </div>
              
              <div className="cantidad-selector">
                <button className="cantidad-btn">−</button>
                <span className="cantidad-valor">1</span>
                <button className="cantidad-btn">+</button>
              </div>
              
              <button className="btn-add">
                <BsCart3 /> AGREGAR
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* =========================================================
          SIN RESULTADOS
          ========================================================= */}
      {productosFiltrados.length === 0 && (
        <div className="sin-resultados">
          <p>No encontramos productos que coincidan con tu búsqueda</p>
          <button onClick={() => {setBusqueda(''); setCategoriaActiva('todos');}}>
            VER TODOS LOS PRODUCTOS
          </button>
        </div>
      )}

      {/* =========================================================
          CTA DE ENVÍOS - CON NUEVO COLOR
          ========================================================= */}
      <section className="cta-whatsapp" style={{background: 'linear-gradient(135deg, #ffb300 0%, #ff8f00 100%)', marginTop: '40px'}}>
        <div className="cta-contenido" style={{color: '#1e1e1e'}}>
          <span style={{fontSize: '3rem', display: 'block'}}>🚚</span>
          <h3 style={{color: '#1e1e1e'}}>ENVÍOS A TODO EL PAÍS</h3>
          <p style={{color: '#1e1e1e'}}>Comprando 5 docenas o más, el envío es <strong style={{color: '#8b4242'}}>GRATIS</strong></p>
        </div>
      </section>
    </div>
  );
};

export default TiendaTequenos;