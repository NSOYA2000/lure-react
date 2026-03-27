# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

**Tech Stack:**
- React 19 with functional components and hooks
- React Router DOM for navigation
- Tailwind CSS v4 (configured via `tailwind.config.js` with custom Material Design color palette)
- Vite for bundling
- Axios for HTTP requests

**Project Structure:**
- `src/main.jsx` - Entry point, wraps app in BrowserRouter
- `src/App.jsx` - Root component with global layout (font imports, BottomNav)
- `src/routes/index.jsx` - Centralized routing with lazy-loaded pages
- `src/pages/` - Page components (exports via `pages/index.js`)
- `src/components/` - Reusable UI components (exports via `components/index.js`)
- `src/services/` - API service layer (e.g., `fish.js` for fish-related endpoints)
- `src/utils/` - Utilities (e.g., `request.js` for Axios instance)
- `src/assets/images/` - Static image assets

**API Layer:**
- Axios instance in `src/utils/request.js` with base URL `http://localhost:8080/api`
- Request interceptor: injects `Authorization: Bearer <token>` from localStorage
- Response interceptor: handles 401 errors by clearing token
- Services in `src/services/` export API functions (e.g., `getFishList`, `login`)

**Design System:**
- Material Symbols icons via Google Fonts
- Custom fonts: Manrope (headlines), Inter (body/labels)
- Dark mode support via `class` strategy
- Custom Material Design color tokens (primary, secondary, tertiary, surface variants) in `tailwind.config.js`
- Bottom navigation with 4 tabs + FAB for "add record"

## Response Style
- 每次回答结束后，在末尾加上"喵～"