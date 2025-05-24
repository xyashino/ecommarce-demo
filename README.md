# EcomPanel - Demo Panelu E-commerce

Nowoczesny panel administracyjny dla sklepów internetowych zbudowany w Next.js 15 z TypeScript, Tailwind CSS i next-intl.

## 🚀 Wymagania systemowe

### Node.js
- **Wymagana wersja**: Node.js 18.17 lub nowsza (zalecane: Node.js 20+)
- **Gdzie pobrać**: [https://nodejs.org/pl](https://nodejs.org/pl)

### Sprawdzenie wersji Node.js
```bash
node --version
npm --version
```

## 📦 Instalacja

### 1. Klonowanie repozytorium
```bash
git clone <adres-repozytorium>
cd ecommarce-demo
```

### 2. Instalacja zależności
```bash
npm install
```

## 🛠️ Uruchamianie projektu

### Tryb deweloperski
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: [http://localhost:3000](http://localhost:3000)

### Inne dostępne komendy
```bash
# Budowanie aplikacji produkcyjnej
npm run build

# Uruchamianie aplikacji produkcyjnej
npm run start

# Sprawdzanie kodu (linting)
npm run lint

# Formatowanie kodu
npm run format
```

## ✨ Funkcjonalności

- 🌍 **Wielojęzyczność** - przełączanie między polskim i angielskim
- 🎨 **Tryby motywów** - jasny, ciemny i systemowy
- 📊 **Dashboard** - statystyki sprzedaży i wykresy
- 🛍️ **Zarządzanie produktami** - lista i szczegóły produktów
- 👥 **Zarządzanie klientami** - informacje o klientach
- 📋 **Zarządzanie zamówieniami** - śledzenie statusów
- ⚙️ **Ustawienia** - konfiguracja aplikacji

## 🔧 Stack technologiczny

- **Framework**: Next.js 15.2.4 z App Router
- **Język**: TypeScript 5
- **Stylowanie**: Tailwind CSS 4
- **UI Komponenty**: Radix UI
- **Ikony**: Tabler Icons, Lucide React
- **Internacjonalizacja**: next-intl 4.0.2
- **Zarządzanie stanem**: Zustand 5.0.5
- **Wykresy**: Recharts 2.15.2
- **Drag & Drop**: DnD Kit 6.3.1

## 📂 Struktura projektu

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── demo/              # Demo aplikacji
│   │   ├── dashboard/     # Strona główna panelu
│   │   ├── products/      # Zarządzanie produktami
│   │   ├── orders/        # Zarządzanie zamówieniami
│   │   ├── customers/     # Zarządzanie klientami
│   │   └── settings/      # Ustawienia aplikacji
│   ├── globals.css        # Globalne style
│   └── layout.tsx         # Layout główny
├── components/            # Komponenty React
│   ├── ui/               # Komponenty UI (shadcn/ui)
│   ├── demo/             # Komponenty demo
│   └── ...
├── lib/                  # Biblioteki i konfiguracja
├── translations/         # Pliki tłumaczeń
│   ├── pl.json          # Polskie tłumaczenia
│   └── en.json          # Angielskie tłumaczenia
├── data/                 # Przykładowe dane
└── i18n/                # Konfiguracja internacjonalizacji
```

## 🌍 Przełączanie języków

Aplikacja obsługuje dwa języki:
- 🇵🇱 Polski (domyślny)
- 🇬🇧 Angielski

Przełączanie odbywa się przez:
- Dropdown w ustawieniach
- Toggle button (PL ↔ EN)

## 🎨 Tryby motywów

Dostępne motywy:
- ☀️ Jasny
- 🌙 Ciemny
- 💻 Systemowy (automatyczny)

## 🚨 Rozwiązywanie problemów

### Problem z Node.js
Jeśli masz starszą wersję Node.js:
```bash
# Użyj nvm (Node Version Manager) do zainstalowania najnowszej wersji
nvm install node
nvm use node
```

### Problem z npm
```bash
# Wyczyść cache npm
npm cache clean --force

# Usuń node_modules i package-lock.json, następnie zainstaluj ponownie
rm -rf node_modules package-lock.json
npm install
```

### Port już zajęty
Jeśli port 3000 jest zajęty:
```bash
# Uruchom na innym porcie
npm run dev -- -p 3001
```

## 📄 Licencja

Ten projekt jest prywatny i służy wyłącznie do celów demonstracyjnych.

## 🤝 Wsparcie

W przypadku problemów sprawdź:
1. Czy masz odpowiednią wersję Node.js
2. Czy wszystkie zależności są zainstalowane (`npm install`)
3. Czy nie ma konfliktów portów
4. Logi w konsoli przeglądarki i terminalu
