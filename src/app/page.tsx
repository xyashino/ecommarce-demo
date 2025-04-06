import { Partners } from "@/components/home/partners";
import Link from "next/link";

import { Cta } from "@/components/home/cta";
import { HomeBackground } from "@/components/home/home-background";
import { ImageSection } from "@/components/home/image-section";
import { LogoLink } from "@/components/logo-link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="lg:w-7xl w-full min-h-dvh mx-auto flex flex-col justify-around gap-5">
    <nav className="flex justify-between items-center py-4">
      <LogoLink />
      <div className="flex items-center gap-4">
        <Button variant="link" asChild>
          <Link href="#">Zaloguj się</Link>
        </Button>
        <Button asChild>
          <Link href="#">Stwórz konto</Link>
        </Button>
      </div>
    </nav>
    <ImageSection
      content={{
        title: "Zarządzaj swoim sklepem online z EcomPanel",
        description:
          "EcomPanel to intuicyjna aplikacja, która umożliwia zarządzanie produktami, zamówieniami, klientami i fakturami – wszystko w jednym miejscu.",
      }}
      image={{
        alt: "hero",
        src: "/images/hero.png",
      }}
    >
      <Button
        className="w-fit uppercase tracking-wider"
        size="lg"
        variant="home"
        asChild
      >
        <Link href="/demo">Wypróbuj za darmo</Link>
      </Button>
    </ImageSection>
    <Partners />
    <ImageSection
      content={{
        title: "Zarządzaj sklepem z dowolnego miejsca",
        description:
          "Nasza aplikacja działa płynnie zarówno na komputerze, jak i smartfonie. Kontroluj swój biznes z dowolnego miejsca na świecie.",
      }}
      image={{
        alt: "hero",
        src: "/images/mobile.png",
      }}
      reverse
    />
    <ImageSection
      content={{
        title: "Analityka i raporty sprzedażowe",
        description:
          "Śledź wyniki sprzedaży, analizuj trendy zakupowe klientów i optymalizuj ofertę swojego sklepu w czasie rzeczywistym.",
      }}
      image={{
        alt: "hero",
        src: "/images/stats.png",
      }}
    />
    <Cta />
    <HomeBackground />
    <footer className="flex flex-col mt-auto">
      <p>
        &copy; {new Date().getFullYear()} EcomPanel. Wszelkie prawa zastrzeżone.
      </p>
      <div className="flex bg-gradient-to-r from-blue-600 to-violet-600 w-full h-4 rounded-t" />
    </footer>
  </main>
  );
}
