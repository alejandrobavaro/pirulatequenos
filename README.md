# 🧀 PIRULA TEQUEÑOS - La Tequeñeria Venezolana

![Pirula Tequeños Logo](public/img/02-logos/logofooter1a.png)

<div align="center">
  
  ### 🌽 *"El verdadero sabor tequeñero en cada bocado"* 🌽
  
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![SASS](https://img.shields.io/badge/SASS-1.69.5-CC6699?style=for-the-badge&logo=sass)](https://sass-lang.com/)
  [![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
  
</div>

## 📋 Descripción del Proyecto

**Pirula Tequeños** es una plataforma web e-commerce desarrollada para una tequeñeria venezolana que ofrece los mejores tequeños artesanales. El sitio permite a los usuarios explorar productos, realizar pedidos, conocer la historia de la marca, contactar con la empresa y reservar mesas en el local físico.

> 🎯 **Objetivo:** Digitalizar y potenciar las ventas de una tequeñeria tradicional venezolana, llevando el sabor casero a todos los hogares.

---

## 🚀 Características Principales

### 🛒 **Tienda Online**
- ✅ Catálogo completo de productos (tequeños clásicos, gourmet, mini, salsas, combos)
- ✅ Vista en grid y lista
- ✅ Filtrado por categorías
- ✅ Búsqueda de productos en tiempo real
- ✅ Carrito de compras interactivo con cálculo automático
- ✅ Precios unitarios y por mayor

### 🎁 **Sistema de Regalos**
- ✅ 6 boxes temáticos para diferentes ocasiones:
  - 🎂 **Box Cumpleaños** - Con vela y tarjeta personalizada
  - ❤️ **Box Romántica** - Para San Valentín o aniversarios
  - ⭐ **Box Empresarial** - Para clientes o empleados
  - 🎉 **Box Fiesta** - Para celebraciones
  - 👨‍👩‍👧‍👦 **Box Familia** - Para compartir en casa
  - 🎲 **Box Sorpresa** - Con regalo misterioso
- ✅ Detalles expandibles de cada box
- ✅ Precios claros y competitivos

### 📱 **Contador de Apertura**
- ✅ Cuenta regresiva para la apertura del local (15 de Junio 2026)
- ✅ Diseño rojo con texto blanco/amarillo
- ✅ Compartir en WhatsApp con mensaje personalizado
- ✅ Información de contacto y ubicación

### 🪑 **Reserva de Mesas**
- ✅ Sistema de reservas para el local físico
- ✅ Beneficios exclusivos para clientes que reservan
- ✅ Información de horarios y capacidad
- ✅ Integración con WhatsApp para consultas

### 📍 **Ubicación y Contacto**
- ✅ Mapa interactivo embebido
- ✅ Formulario de contacto funcional con Formspree
- ✅ Tarjetas de información con iconos
- ✅ Horarios de atención detallados
- ✅ Redes sociales integradas

### 📱 **Componentes Adicionales**
- ✅ Slider promocional con overlay de colores
- ✅ Footer con frase de impacto y navegación
- ✅ Botón flotante de WhatsApp
- ✅ Diseño completamente responsive

---

## 🎨 Identidad Visual

### Colores Principales
```css
🔴 Rojo Pirula:    #c62828  // Botones, acentos principales
🟡 Amarillo:       #ffb300  // Promociones, badges, hovers
⚫ Negro:          #1e1e1e  // Textos sobre amarillo, fondos de impacto
⚪ Blanco:         #ffffff  // Textos sobre rojo
🔘 Gris Claro:     #f8f8f8  // Fondos de secciones
🔘 Gris Texto:     #666     // Descripciones
```

### Tipografías
```css
📌 Títulos:  'Anton' - Impactante, estilo hamburguesería
📌 Textos:   'Barlow' - Moderna, legible, comercial
```

### Componentes Visuales
- **Cards:** Bordes redondeados (16px), sombras suaves, hover con efecto rojo
- **Botones:** Bordes redondeados (50px), efectos hover con escala
- **Badges:** Amarillo con texto negro para destacar
- **Overlays:** Gradientes rojos o amarillos según el tipo de promoción

---

## 🛠️ Tecnologías Utilizadas

### Frontend
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **React** | 18.2.0 | Biblioteca principal para UI |
| **React Router DOM** | 6.20.0 | Navegación y rutas |
| **React Bootstrap** | 2.9.1 | Componentes responsive |
| **React Icons** | 4.11.0 | Iconografía completa |
| **React Slick** | 0.29.0 | Slider de imágenes |
| **Framer Motion** | 10.16.0 | Animaciones suaves |

### Estilos
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **SASS/SCSS** | 1.69.5 | Preprocesador CSS |
| **Bootstrap Icons** | 1.11.2 | Iconos adicionales |
| **Mobile First** | - | Estrategia de diseño |

### Formularios
| Tecnología | Uso |
|------------|-----|
| **Formspree** | Procesamiento de formularios sin backend |

### Herramientas de Desarrollo
| Herramienta | Uso |
|-------------|-----|
| **Vite** | Build tool y servidor de desarrollo |
| **ESLint** | Linting y calidad de código |
| **Git** | Control de versiones |

---

## 📁 Estructura del Proyecto

```
tequenios-pirula/
├── 📂 public/
│   ├── 📂 img/
│   │   ├── 📂 02-logos/          # Logos de la empresa
│   │   ├── 📂 05-img-galeria2/    # Imágenes de productos
│   │   └── 📂 06-img-galeria3/    # Imágenes de equipo
│   └── 📄 index.html
│
├── 📂 src/
│   ├── 📂 assets/
│   │   └── 📂 scss/
│   │       ├── 📂 _01-General/
│   │       │   └── 📄 _App.scss  # Estilos globales
│   │       └── 📂 _03-Componentes/
│   │           ├── 📄 _Header.scss
│   │           ├── 📄 _Footer.scss
│   │           ├── 📄 _HomeTequenos.scss
│   │           ├── 📄 _PromosTequenos.scss
│   │           ├── 📄 _TiendaTequenos.scss
│   │           ├── 📄 _ContactoTequenos.scss
│   │           ├── 📄 _NosotrosTequenos.scss
│   │           ├── 📄 _PedidosTequenos.scss
│   │           ├── 📄 _RegalosTequenos.scss
│   │           ├── 📄 _ReservaTuMesa.scss
│   │           ├── 📄 _ContadorDiasPirula.scss
│   │           ├── 📄 _UbicacionTequenosPirula.scss
│   │           ├── 📄 _MainSliderFotos.scss
│   │           └── 📄 _WhatsappIcon.scss
│   │
│   ├── 📂 componentes/
│   │   ├── 📄 Header.jsx
│   │   ├── 📄 Footer.jsx
│   │   ├── 📄 HomeTequenos.jsx
│   │   ├── 📄 PromosTequenos.jsx
│   │   ├── 📄 TiendaTequenos.jsx
│   │   ├── 📄 ContactoTequenos.jsx
│   │   ├── 📄 NosotrosTequenos.jsx
│   │   ├── 📄 PedidosTequenos.jsx
│   │   ├── 📄 RegalosTequenos.jsx
│   │   ├── 📄 ReservaTuMesa.jsx
│   │   ├── 📄 ContadorDiasPirula.jsx
│   │   ├── 📄 UbicacionTequenosPirula.jsx
│   │   ├── 📄 MainSliderFotos.jsx
│   │   └── 📄 WhatsappIcon.jsx
│   │
│   ├── 📄 App.jsx                 # Componente principal
│   └── 📄 main.jsx                # Punto de entrada
│
├── 📄 .gitignore
├── 📄 package.json
├── 📄 README.md
└── 📄 vite.config.js
```

---

## 🚦 Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|------------|-------------|
| **`/`** | `HomeTequenos` | Página de inicio |
| **`/tequenos`** | `HomeTequenos` | Inicio (alias) |
| **`/tequenos/promos`** | `PromosTequenos` | Promociones y ofertas |
| **`/tequenos/tienda`** | `TiendaTequenos` | Catálogo de productos |
| **`/tequenos/contacto`** | `ContactoTequenos` | Contacto y formulario |
| **`/tequenos/nosotros`** | `NosotrosTequenos` | Sobre la empresa |
| **`/tequenos/pedidos`** | `PedidosTequenos` | Carrito de compras |
| **`/tequenos/regalos`** | `RegalosTequenos` | Boxes de regalo |
| **`/tequenos/reservas`** | `ReservaTuMesa` | Reserva de mesas |
| **`/tequenos/contador`** | `ContadorDiasPirula` | Contador apertura |
| **`/tequenos/ubicacion`** | `UbicacionTequenosPirula` | Ubicación del local |

---

## 💻 Instalación y Uso

### Requisitos Previos
- ✅ Node.js (v16 o superior)
- ✅ npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/tequenios-pirula.git
cd tequenios-pirula
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar Formspree** (para el formulario de contacto)
   - Crear una cuenta en [Formspree](https://formspree.io/)
   - Crear un nuevo formulario
   - Reemplazar el endpoint en `ContactoTequenos.jsx`:
   ```javascript
   // Línea 86 en ContactoTequenos.jsx
   const response = await fetch('https://formspree.io/f/TU-ENDPOINT-AQUI', {
   ```

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

5. **Abrir el navegador**
```
http://localhost:3000
```

### Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run preview` | Previsualiza build de producción |
| `npm run lint` | Ejecuta linter |

---

## 🎯 Funcionalidades Detalladas

### 🛍️ **Tienda Online**
- **Categorías:** Clásicos, Gourmet, Mini, Salsas, Combos
- **Filtros:** Por categoría, búsqueda por nombre/descripción
- **Vistas:** Grid (cards) o lista
- **Cards:** Imagen, nombre, descripción, precio, rating, botón agregar
- **Precios:** Unitario y por mayor (10+ docenas)

### 🎁 **Boxes de Regalo**
- **Box Cumpleaños:** 3 docenas clásicas + vela + tarjeta personalizada
- **Box Romántica:** 2 docenas gourmet + salsa especial + mensaje
- **Box Empresarial:** 5 docenas variadas + 3 salsas + tarjetas
- **Box Fiesta:** 8 docenas mixtas + salsas + servilletas
- **Box Familia:** 4 docenas clásicas + 2 salsas + stickers
- **Box Sorpresa:** 3 docenas surtidas + regalo misterioso

### 📞 **Contacto**
- **Formulario:** Nombre, email, teléfono, tipo cliente, mensaje
- **Validación:** Campos requeridos, checkbox términos
- **Feedback:** Estados de carga, éxito y error
- **Botones compartir:** WhatsApp y API nativa

### 📱 **Contador de Apertura**
- **Fecha:** 15 de Junio 2026 - 10:00 AM
- **Cálculos:** Días, horas, minutos, segundos, meses, semanas
- **Estados:** Antes/Después de la apertura
- **Compartir:** Mensaje personalizado por WhatsApp

---

## 📱 Capturas de Pantalla

### 🏠 Página de Inicio
```
[Insertar captura del Home]
```

### 🛒 Tienda
```
[Insertar captura de Tienda]
```

### 🎁 Boxes de Regalo
```
[Insertar captura de Regalos]
```

### 📍 Ubicación y Contacto
```
[Insertar captura de Contacto]
```

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. 🍴 **Fork** el proyecto
2. 🌿 Crear una rama (`git checkout -b feature/NuevaCaracteristica`)
3. 💾 Commit cambios (`git commit -m 'Agrega nueva característica'`)
4. 📤 Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. 🔁 Abrir un **Pull Request**

### Guía de Estilo
- Usar nombres descriptivos para commits
- Mantener el código limpio y comentado
- Seguir la estructura Mobile First
- Respetar la paleta de colores establecida

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo `LICENSE` para más detalles.

```
MIT License

Copyright (c) 2025 Pirula Tequeños

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 📞 Contacto

<div align="center">

| Medio | Información |
|-------|-------------|
| 📱 **WhatsApp** | [+58 414-1234567](https://wa.me/584141234567) |
| 📧 **Email** | [info@tequenospirula.com](mailto:info@tequenospirula.com) |
| 📷 **Instagram** | [@tequenospirula](https://instagram.com) |
| 📘 **Facebook** | [/tequenospirula](https://facebook.com) |
| 🌐 **Web** | [www.tequenospirula.com](https://tequenospirula.com) |

</div>

---

## 👨‍💻 Desarrollador

<div align="center">
  
### Gondra World Dev

[![GitHub](https://img.shields.io/badge/GitHub-@alejandrobavaro-181717?style=for-the-badge&logo=github)](https://github.com/alejandrobavaro)
[![Web](https://img.shields.io/badge/Web-gondraworld.dev-4285F4?style=for-the-badge&logo=google-chrome)](https://alejandrobavaro.github.io/gondraworld-dev/)

</div>

---

## 🌟 Agradecimientos

- A todos los clientes que confían en nuestro sabor
- A la familia venezolana que mantiene viva la tradición
- Al equipo de desarrollo por hacer realidad este proyecto

---

<div align="center">
  
## 🧀 **Pirula Tequeños**
### *El verdadero sabor tequeñero en cada bocado*

📍 Av. Principal de Las Mercedes, Local 5 - Mar del Plata  
🕒 Lunes a Sábado: 9:00 AM - 7:00 PM | Domingos: Delivery

**🇻🇪 HECHO CON AMOR con amor 🇻🇪**

---
  
📅 **Última actualización:** Marzo 2026  
✨ **Versión:** 1.0.0

</div>
```
# pirulatequenos
