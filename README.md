# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

Yoo!

┌───────────────────────────────────────────────────────────┐
│ Collection (e.g. "Bikes") │
│ - id │
│ - handle (e.g. "bikes") │
│ - title │
│ - description │
│ - products[] │
│ └─ product:  
│ - id │
│ - title │
│ - handle │
│ - priceRange │
│ - images[] │
│ - filters[] (Shopify built-in product filters) │
│ - metafield: collection_settings →─────────────┐
└───────────────────────────────────────────────────────────┘ │
│
▼
┌──────────────────────────────────────────────────────────────┐
│ Metaobject: Collection Settings │
│ type: collection_settings │
│ │
│ - custom_title (string, optional) │
│ │
│ - carousel_images (list of metaobjects, optional) │
│ └─ carousel_item: │
│ - title (string) │
│ - image (media) │
│ - link (string, URL to product/collection/page) │
│ │
│ - menu (Navigation reference, optional) │
│ - hero_banner (media, optional) │
│ - extra_content (rich text, optional) │
│ - filters (list of metaobjects, optional) │
│ └─ filter_item: │
│ - label (string, e.g. "Brand") │
│ - type (string, e.g. "checkbox", "dropdown") │
│ - options (list of strings, e.g. ["Trek","Giant"]) │
└──────────────────────────────────────────────────────────────┘
