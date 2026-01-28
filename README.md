# Aura AI - Landing Page

Página de aterrizaje profesional para **Aura AI**, agencia de automatización inteligente. Construida con React 19, TypeScript y Vite 7, ofrece una experiencia moderna, rápida y optimizada para SEO.

## Descripción General

Landing page responsive que presenta los servicios de automatización de Aura AI. Diseñada para convertir visitantes en leads, comunica la propuesta de valor mediante secciones estratégicas, animaciones fluidas y un diseño visual centrado en tonos púrpura oscuro.

**Valor clave:** Experiencia de usuario premium con carga ultrarrápida, navegación fluida y optimización SEO completa.

## Características y Secciones

- **Hero:** Presentación impactante con llamada a la acción principal
- **Services:** Catálogo de servicios de automatización ofrecidos
- **Process:** Metodología de trabajo paso a paso
- **Case Studies:** Casos de éxito y resultados medibles
- **Benefits:** Beneficios diferenciadores de trabajar con Aura AI
- **Pricing:** Planes y estructura de precios
- **Testimonials:** Testimonios de clientes satisfechos
- **FAQ:** Preguntas frecuentes
- **Final CTA:** Llamada a la acción de cierre
- **Contact:** Formulario de contacto y datos de comunicación

## Stack Tecnológico

- **React 19** - Biblioteca UI de última generación
- **TypeScript** - Tipado estático robusto
- **Vite 7** - Build tool ultrarrápido con HMR
- **TanStack Router** - Enrutamiento type-safe
- **TanStack Query (React Query)** - Gestión de estado asíncrono
- **Tailwind CSS v4** - Framework CSS utilitario
- **Framer Motion** - Animaciones declarativas fluidas
- **Lucide React** - Iconografía moderna
- **React Helmet Async** - Gestión de meta tags para SEO

## Estructura del Proyecto

```
aura-web/
├── src/
│   ├── main.tsx              # Punto de entrada de la aplicación
│   ├── index.css             # Estilos globales y configuración Tailwind
│   ├── routes/
│   │   ├── __root.tsx        # Layout raíz con navegación
│   │   ├── index.tsx         # Ruta principal (home)
│   │   └── contact.tsx       # Página de contacto
│   └── lib/
│       └── animations.ts     # Configuraciones de Framer Motion
├── vite.config.ts            # Configuración de Vite
├── tsconfig.json             # Configuración TypeScript
└── tailwind.config.js        # Tema Tailwind (purple dark)
```

## Inicio Rápido

### Requisitos

- Node.js >= 18
- npm o pnpm

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Servidor de desarrollo en `http://localhost:5173` con hot reload.

### Build de Producción

```bash
npm run build
```

Genera bundle optimizado en `/dist`.

### Vista Previa del Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Scripts Disponibles

- `dev` - Inicia servidor de desarrollo Vite
- `build` - Compila TypeScript y construye bundle de producción
- `preview` - Previsualiza build de producción localmente
- `lint` - Ejecuta ESLint en archivos del proyecto

## Deployment

La aplicación genera assets estáticos tras `npm run build`. Compatible con cualquier hosting estático:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront

Configurar el directorio de salida como `/dist`.

## SEO y Meta Tags

SEO gestionado mediante **react-helmet-async**. Cada ruta define sus propios meta tags (título, descripción, Open Graph, Twitter Cards) de forma dinámica.

## Animaciones

Transiciones y efectos visuales implementados con **Framer Motion**. Configuraciones reutilizables centralizadas en `src/lib/animations.ts` para consistencia en toda la aplicación.

## Estilización

Sistema de diseño basado en **Tailwind CSS v4** con tema personalizado en tonos púrpura oscuro. Variables CSS custom para colores de marca y espaciados consistentes definidas en `src/index.css`.

---

**Aura AI** - Automatización inteligente para el futuro de tu negocio.