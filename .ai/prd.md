# Dokument wymagań produktu (PRD) - EcomPanel

## 1. Przegląd produktu

EcomPanel to demonstracyjny panel administracyjny dla sklepu e-commerce, stworzony jako projekt studencki. Jest to aplikacja frontendowa typu MVP, która symuluje podstawowe funkcje panelu administracyjnego bez integracji z backendem. Panel umożliwia zarządzanie produktami, zamówieniami i klientami, a także konfigurację podstawowych ustawień sklepu.

### Kluczowe cechy:

- Interfejs w języku polskim i angielskim
- Tryb jasny i ciemny
- Zarządzanie produktami (CRUD)
- Przegląd zamówień z systemem statusów
- Baza klientów z historią zakupów
- Dashboard z podstawowymi statystykami
- Konfiguracja podstawowych ustawień sklepu
- Responsywny design

## 2. Problem użytkownika

Obecnie brakuje prostego, intuicyjnego narzędzia do demonstracji funkcjonalności panelu administracyjnego sklepu e-commerce. Istniejące rozwiązania są często zbyt skomplikowane lub wymagają skomplikowanej konfiguracji. EcomPanel rozwiązuje ten problem poprzez dostarczenie lekkiego, łatwego w użyciu demo, które pokazuje podstawowe funkcje panelu administracyjnego bez konieczności konfiguracji backendu czy bazy danych.

## 3. Wymagania funkcjonalne

### 3.1 Podstawowe funkcje

- Dashboard z podstawowymi statystykami i wykresami
- Zarządzanie produktami (dodawanie, edycja, usuwanie)
- Przegląd i zarządzanie zamówieniami
- Baza klientów z historią zakupów
- Ustawienia aplikacji (język, motyw, nazwa sklepu)

### 3.2 Szczegółowe wymagania

#### Dashboard

- Wyświetlanie podstawowych statystyk (przychody, zamówienia, produkty, klienci)
- Wykres sprzedaży w czasie
- Lista najpopularniejszych produktów z trendem sprzedaży
- Ostatnie zamówienia z statusami
- Responsywny layout dostosowany do różnych rozmiarów ekranu

#### Produkty

- Dodawanie nowych produktów z URL obrazka
- Edycja istniejących produktów (nazwa, cena, opis, obrazek)
- Usuwanie produktów z potwierdzeniem
- Walidacja URL obrazków
- Lista produktów z możliwością sortowania

#### Zamówienia

- Przegląd listy zamówień z podstawowymi informacjami
- Filtrowanie według statusów
- Statusy: "zamówiono", "wysłano", "zakończono"
- Wizualne oznaczenie statusów (ikony i kolory)
- Szczegóły zamówienia (klient, produkty, data, kwota)

#### Klienci

- Lista klientów z podstawowymi danymi
- Historia zakupów dla każdego klienta
- Dane kontaktowe (imię, nazwisko, email)
- Statystyki klienta (liczba zamówień, łączna wartość)

#### Ustawienia

- Wybór języka interfejsu (polski/angielski)
- Przełączanie motywu (jasny/ciemny/systemowy)
- Konfiguracja nazwy sklepu
- Zapamiętywanie preferencji użytkownika

## 4. Granice produktu

### 4.1 Co jest w zakresie MVP

- Interfejs użytkownika w języku polskim i angielskim
- Zarządzanie produktami (CRUD)
- Przegląd zamówień z systemem statusów
- Baza klientów z historią zakupów
- Dashboard z podstawowymi statystykami i wykresami
- Podstawowe ustawienia aplikacji
- Responsywny design dla wszystkich urządzeń
- Przechowywanie danych w lokalnym stanie (Zustand)
- Walidacja formularzy (Zod)

### 4.2 Co NIE jest w zakresie MVP

- Baza danych
- Backend/API
- Realne dane z zewnętrznych źródeł
- Trwałe zapisywanie danych
- System logowania i autoryzacji
- Upload plików na serwer
- Integracje z zewnętrznymi systemami
- Systemy płatności
- Zaawansowane raportowanie
- Testy automatyczne
- Szczegółowa dokumentacja techniczna

## 5. Historyjki użytkowników

### US-001: Przegląd dashboardu

**Tytuł:** Jako administrator chcę zobaczyć dashboard z podstawowymi informacjami
**Opis:** Administrator powinien móc zobaczyć stronę główną z kluczowymi wskaźnikami biznesowymi
**Kryteria akceptacji:**

- Dashboard wyświetla podstawowe statystyki (przychody, zamówienia, produkty, klienci)
- Wykres sprzedaży pokazuje trend w czasie
- Lista najpopularniejszych produktów z wskaźnikami sprzedaży
- Ostatnie zamówienia z kolorowymi statusami
- Interfejs jest responsywny na wszystkich urządzeniach

### US-002: Zarządzanie produktami

**Tytuł:** Jako administrator chcę zarządzać produktami w sklepie
**Opis:** Administrator powinien móc dodawać, edytować i usuwać produkty w prosty sposób
**Kryteria akceptacji:**

- Możliwość dodania nowego produktu z podstawowymi informacjami
- Możliwość edycji istniejącego produktu
- Możliwość usunięcia produktu z potwierdzeniem
- Walidacja URL obrazka produktu
- Lista produktów z opcjami sortowania

### US-003: Przegląd zamówień

**Tytuł:** Jako administrator chcę przeglądać i zarządzać zamówieniami
**Opis:** Administrator powinien móc monitorować status zamówień i ich historię
**Kryteria akceptacji:**

- Wyświetlanie listy zamówień z podstawowymi informacjami
- Filtrowanie zamówień według statusów
- Wizualne oznaczenie statusów (ikony i kolory)
- Szczegóły zamówienia z informacjami o kliencie i produktach
- Możliwość zmiany statusu zamówienia

### US-004: Zarządzanie klientami

**Tytuł:** Jako administrator chcę przeglądać dane klientów
**Opis:** Administrator powinien móc analizować bazę klientów i ich zachowania zakupowe
**Kryteria akceptacji:**

- Wyświetlanie listy klientów z podstawowymi danymi
- Historia zakupów dla każdego klienta
- Podstawowe dane kontaktowe klientów
- Statystyki zakupowe klienta (liczba zamówień, wartość)

### US-005: Konfiguracja ustawień

**Tytuł:** Jako administrator chcę konfigurować podstawowe ustawienia aplikacji
**Opis:** Administrator powinien móc personalizować interfejs według swoich preferencji
**Kryteria akceptacji:**

- Zmiana języka interfejsu (polski/angielski)
- Przełączanie motywu (jasny/ciemny/systemowy)
- Konfiguracja nazwy sklepu
- Zapamiętywanie ustawień między sesjami
- Natychmiastowe zastosowanie zmian w interfejsie

## 6. Metryki sukcesu

### 6.1 Metryki techniczne

- Czas pierwszego renderu strony < 2s
- Responsywność na urządzeniach mobilnych i desktopowych
- Brak błędów w konsoli przeglądarki
- Płynne przełączanie między językami i motywami
- Stabilne działanie wszystkich funkcji CRUD

### 6.2 Metryki funkcjonalne

- Możliwość wykonania pełnego CRUD na produktach
- Poprawne działanie systemu statusów zamówień
- Prawidłowe wyświetlanie danych klientów z historią
- Skuteczna walidacja URL obrazków produktów
- Funkcjonalny dashboard z aktualnymi danymi
- Efektywne przechowywanie ustawień użytkownika

### 6.3 Metryki UX

- Intuicyjna nawigacja między sekcjami
- Spójny wygląd interfejsu we wszystkich sekcjach
- Czytelne oznaczenia statusów zamówień
- Responsywny design na wszystkich urządzeniach
- Płynne przejścia i animacje
- Dostępność funkcji w obu językach

## 7. Architektura techniczna

### 7.1 Frontend

- **Next.js 15** - React framework z App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Komponenty UI

### 7.2 State Management

- **Zustand** - Lekki state management
- **next-themes** - Zarządzanie motywami
- **next-intl** - Internationalizacja

### 7.3 Walidacja i formularze

- **Zod** - Schema validation
- **React Hook Form** - Form management

### 7.4 Wizualizacja danych

- **Recharts** - Wykresy i grafy
- **Lucide Icons** - Ikony SVG
- **@tabler/icons-react** - Dodatkowe ikony
