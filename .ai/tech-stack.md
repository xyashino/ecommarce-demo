# Tech Stack - EcomPanel

## Przegląd

EcomPanel to demonstracyjny panel administracyjny dla sklepu e-commerce zbudowany jako aplikacja frontendowa typu MVP. Stos technologiczny został wybrany z uwzględnieniem wymagań funkcjonalnych oraz ograniczeń projektowych opisanych w PRD.

## Główne technologie

### Frontend Framework

- **Next.js 15.2.4** - React framework z funkcjami SSR/SSG
  - Wybór uzasadniony: Zapewnia doskonałą wydajność, SEO i DX
  - Wspiera internationalization out-of-the-box
  - Built-in optimizations dla obrazków i fontów

### UI Library

- **React 19.0.0** - Biblioteka do budowy interfejsów użytkownika
  - Najnowsza wersja z ulepszonymi hook'ami i concurrent features
  - Doskonała kompatybilność z Next.js

### Language

- **TypeScript 5** - Statically typed JavaScript
  - Zapewnia type safety i lepszy developer experience
  - Redukuje błędy runtime i usprawnia refactoring

### Styling

- shadcn components
- **Tailwind CSS 4** - Utility-first CSS framework
  - Wspiera responsywny design (wymaganie PRD)
  - Natywne wsparcie dla dark mode (wymaganie PRD)
  - Szybki development i konsystentny design system

## Component Libraries

### Podstawowe komponenty UI

- **Radix UI** - Headless, accessible React components
  - `@radix-ui/react-dialog` - Modals i dialogi
  - `@radix-ui/react-dropdown-menu` - Menu rozwijane
  - `@radix-ui/react-select` - Selektory
  - `@radix-ui/react-tabs` - Zakładki
  - `@radix-ui/react-avatar` - Awatary użytkowników
  - `@radix-ui/react-checkbox` - Checkboxy
  - `@radix-ui/react-label` - Labels
  - `@radix-ui/react-separator` - Separatory
  - `@radix-ui/react-slot` - Slot composition
  - `@radix-ui/react-toggle` - Toggle buttons
  - `@radix-ui/react-tooltip` - Tooltips

**Uzasadnienie**: Radix UI zapewnia accessibility out-of-the-box, jest headless (pełna kontrola nad stylami) i dobrze integruje się z Tailwind CSS.

### Utility Libraries

- **class-variance-authority** - Zarządzanie wariantami komponentów
- **clsx** - Conditional className utility
- **tailwind-merge** - Intelligent Tailwind CSS class merging

## Data Management

### State Management

Zgodnie z PRD, dane są przechowywane w stanie lokalnym, prawdopodobnie przy użyciu Zustand (wspomniany w PRD, ale nie widoczny w package.json - może być dodany później).

### Form Validation

- **Zod** - Schema validation library
  - Używany do walidacji formularzy (np. URL obrazków produktów)
  - Type-safe validation schemas

## Internationalization

### i18n

- **next-intl 4.0.2** - Internationalization dla Next.js
  - Wspiera wymaganie PRD o interfejsie w języku polskim i angielskim
  - Integruje się z Next.js routing
  - Type-safe translations

## Theming

### Dark/Light Mode

- **next-themes 0.4.6** - Theme switching dla Next.js
  - Realizuje wymaganie PRD o trybie jasnym i ciemnym
  - Zapobiega flash of unstyled content
  - Automatyczne wykrywanie preferencji systemowych

## Icons & Graphics

### Icon Libraries

- **Lucide React 0.487.0** - Modern SVG icon library
- **@tabler/icons-react 3.31.0** - Over 4000+ React icons
  - Zapewniają bogaty zestaw ikon dla interfejsu administracyjnego
  - SVG-based, skalowalne i customizable

## Data Visualization

### Charts & Graphs

- **Recharts 2.15.2** - Chart library built on React components
  - Użyte do dashboard'u z podstawowymi statystykami (wymaganie PRD)
  - React-native approach, dobrze integruje się ze stosem

## Table Management

### Advanced Tables

- **@tanstack/react-table 8.21.2** - Headless table library
  - Zaawansowane funkcje tabel dla zarządzania produktami, zamówieniami, klientami
  - Sorting, filtering, pagination
  - Type-safe i performant

## Interactions & UX

### Drag & Drop

- **@dnd-kit/core 6.3.1** - Modern drag and drop toolkit
- **@dnd-kit/sortable 10.0.0** - Sortable functionality
- **@dnd-kit/modifiers 9.0.0** - Drag modifiers
- **@dnd-kit/utilities 3.2.2** - Utilities
  - Możliwość sortowania produktów, kategorii
  - Accessible drag and drop

### UI Enhancements

- **Vaul 1.1.2** - Drawer component for mobile
- **Sonner 2.0.3** - Toast notifications
- **tw-animate-css 1.2.5** - CSS animations for Tailwind

## Development Tools

### Code Quality

- **ESLint 9** - JavaScript/TypeScript linter
- **eslint-config-next** - Next.js specific ESLint configuration

### Build Tools

- **Next.js Turbopack** - Ultra-fast bundler (używany w dev script)

## Architektura

### Wzorce architektoniczne

- **Component-based architecture** - Modularne komponenty React
- **Headless UI pattern** - Oddzielenie logiki od prezentacji
- **Utility-first CSS** - Atomic CSS approach z Tailwind
- **Type-driven development** - TypeScript w całym projekcie

### Struktura danych

- **Zustand** (wspomniany w PRD) - Lightweight state management
  - Prosty i performant store
  - Idealny dla MVP bez backendu
  - Type-safe state management

## Ograniczenia i założenia

### Co NIE jest w zakresie (zgodnie z PRD)

- ❌ Backend/API
- ❌ Baza danych
- ❌ Autentyfikacja
- ❌ File upload
- ❌ Zewnętrzne integracje
- ❌ Testy automatyczne (na razie)

### MVP Approach

- ✅ Frontend-only
- ✅ Lokalny stan danych
- ✅ Demonstracyjny charakter
- ✅ Responsywny design
- ✅ Międzynarodowość (PL/EN)
- ✅ Dark/Light theme

## Wydajność i optymalizacje

### Next.js optimizations

- Image optimization
- Code splitting
- Static generation where possible
- Font optimization

### Bundle size considerations

- Tree shaking
- Modular imports
- Lazy loading komponentów

## Skalowalność

Stos technologiczny został zaprojektowany z myślą o łatwej rozbudowie:

- Dodanie Zustand dla state management
- Możliwość dodania backendu (tRPC, GraphQL)
- Łatwe dodawanie nowych języków
- Modularna architektura komponentów

---

_Dokument będzie aktualizowany wraz z rozwojem projektu._
