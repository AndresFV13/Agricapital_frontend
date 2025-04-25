# Agricapital Frontend

Agricapital Frontend es el front de la aplicación AgriMarket, diseñada para gestionar y visualizar Productos ficticios . 
Ofrece una interfaz moderna, interactiva y responsiva, que permite a los usuarios acceder a información de los productos, 
filtrar dichos productos y conocer los descuentos.

## 🧩 Stack tecnológico
- **Lenguajes**: TypeScript, JavaScript
- **Frameworks**: React
- **Herramientas de construcción**: Vite
- **Gestor de paquetes**: npm
- **Servidor web**: Nginx
- **Contenedores**: Docker

## Patrón de desarrollo
La aplicación sigue el patrón **Component-Based Architecture**, dividiendo la interfaz en componentes reutilizables y modulares. Además, 
se utiliza **TypeScript** con un enfoque de tipado estricto para garantizar un código robusto y mantenible.

## Arquitectura
La arquitectura es una **SPA (Single Page Application)**. React maneja el enrutamiento y la lógica del cliente. El proyecto tiene dos etapas principales:
1. **Etapa de construcción**: Node.js se utiliza para compilar y construir los archivos estáticos.
2. **Etapa de producción**: Los archivos estáticos se sirven mediante un servidor Nginx en un contenedor Docker.

## 📁 Estructura del Proyecto

```bash
src/
├── assets/             # Recursos estáticos (imágenes, estilos, etc.)
├── components/         # Componentes reutilizables de UI
│   ├── common/         # Componentes comunes
│   │   └── modal/      # Componente Modal
│   ├── features/       # Componentes relacionados con funcionalidades
│   │   ├── banner/     # Componente para banners informativos
│   │   └── products/   # Componente de productos
│   ├── footer/         # Pie de página
│   ├── header/         # Encabezado de la aplicación
│   └── layout/         # Estructura general de diseño
├── contanst/           # Constantes compartidas
└── interface/          # Interfaces y tipos TypeScript
```

## Funcionalidades principales
- Visualización de los datos de los productos agricolas registrados.
- Interfaz de usuario interactiva y responsiva.
- Filtrado de información.

## 🔧 Pasos para instalación y ejecución

### Requisitos previos
- Tener instalado Docker.
- Tener instalado Node.js (versión 22.11.0 o superior) y npm.


### 1. Clona el repositorio

```bash
git clone https://github.com/AndresFV13/Agricapital_backend.git
cd Agricapital_backend
```

### 2. Instalar dependencias

```bash
npm install

```

### 3. Configura las variables de entorno

Copia el archivo `.env.example` a `.env` y ajusta las variables de entorno según tu configuración local.
```bash
base_url=
```

### 4. Ejecuta la aplicación

```bash
npm run dev

```
