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
- Tailwind CSS v4 for styling (configured via `tailwind.config.js` with custom material design color palette)
- Vite for bundling

**Project Structure:**
- `src/main.jsx` - Entry point, wraps app in BrowserRouter
- `src/App.jsx` - Root component with global layout (font imports, BottomNav)
- `src/routes/index.jsx` - Centralized routing with lazy-loaded pages
- `src/pages/` - Page components (HomePage, FishDetailPage, ProfilePage, EncyclopediaPage, AddFishingRecordPage, TournamentPage)
- `src/components/` - Reusable UI components (BottomNav, TopBar, FishCard, PostCard)
- `src/assets/images/` - Static image assets

**Routing:**
- `/` - HomePage (fishing feed)
- `/encyclopedia` - EncyclopediaPage (fish database/articles)
- `/fish/:id` - FishDetailPage
- `/profile` - ProfilePage
- `/add-record` - AddFishingRecordPage
- `/tournament` - TournamentPage
- `/messages` - Placeholder (not implemented)

**Design System:**
- Material Symbols icons via Google Fonts
- Custom font family: Manrope (headlines), Inter (body/labels)
- Dark mode support via `class` strategy
- Custom color palette with material design tokens (primary, secondary, tertiary, surface variants)
- Bottom navigation with 4 main tabs + FAB (floating action button) for "add record"