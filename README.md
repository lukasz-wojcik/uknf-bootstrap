# UKNF Bootstrap Application

A modern React application built with Vite, Tailwind CSS, and containerized with Docker.

## Features

- ⚛️ React 18
- ⚡ Vite for fast development
- 🎨 Tailwind CSS for styling
- 🐳 Docker & Docker Compose ready
- 📱 Responsive design
- 🚀 Production-ready builds

## Prerequisites

- Node.js 20+ (for local development)
- Docker & Docker Compose (for containerized deployment)

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Docker Development

Run the application in a Docker container with hot-reload:

```bash
docker-compose -f docker-compose.dev.yml up
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Docker Production

Build and run the production container:

```bash
docker-compose up --build
```

The application will be available at `http://localhost:3000`

## Project Structure

```
uknf-bootstrap/
├── src/
│   ├── components/          # Reusable components
│   │   └── Layout.jsx       # Main layout with sidebar and navigation
│   ├── pages/               # Page components
│   │   └── Pulpit.jsx       # Dashboard page
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── templates/               # UI design templates
├── public/                  # Static assets
├── Dockerfile               # Production Docker configuration
├── Dockerfile.dev           # Development Docker configuration
├── docker-compose.yml       # Production compose file
├── docker-compose.dev.yml   # Development compose file
├── nginx.conf               # Nginx configuration for production
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Pages

### Pulpit (Dashboard)

The main dashboard page featuring:
- Statistics cards (Wnioski, Dokumenty, Wiadomości, Zadania)
- Recent activity feed
- Quick action buttons
- Responsive layout

## Docker Commands

### Development
```bash
# Start development container
docker-compose -f docker-compose.dev.yml up

# Stop development container
docker-compose -f docker-compose.dev.yml down

# Rebuild development container
docker-compose -f docker-compose.dev.yml up --build
```

### Production
```bash
# Build and start production container
docker-compose up --build

# Stop production container
docker-compose down

# View logs
docker-compose logs -f
```

## Technologies

- **React**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Docker**: Containerization
- **Nginx**: Production web server

## License

Private project for UKNF
