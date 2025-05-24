'use client'

import { Partners } from '@/components/home/partners'
import Link from 'next/link'

import { Cta } from '@/components/home/cta'
import { HomeBackground } from '@/components/home/home-background'
import { ImageSection } from '@/components/home/image-section'
import { LogoLink } from '@/components/logo-link'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main className="lg:w-7xl w-full min-h-dvh mx-auto flex flex-col justify-around gap-5">
      <nav className="flex justify-between items-center py-4">
        <LogoLink />
        <ThemeSwitcher />
      </nav>
      <ImageSection
        content={{
          title: t('heroTitle'),
          description: t('heroDescription')
        }}
        image={{
          alt: 'hero',
          src: '/images/hero.png'
        }}
      >
        <Button
          className="w-fit uppercase tracking-wider"
          size="lg"
          variant="home"
          asChild
        >
          <Link href="/demo">{t('tryFree')}</Link>
        </Button>
      </ImageSection>
      <Partners />
      <ImageSection
        content={{
          title: t('manageFromAnywhere'),
          description: t('manageFromAnywhereDescription')
        }}
        image={{
          alt: 'hero',
          src: '/images/mobile.png'
        }}
        reverse
      />
      <ImageSection
        content={{
          title: t('analytics'),
          description: t('analyticsDescription')
        }}
        image={{
          alt: 'hero',
          src: '/images/stats.png'
        }}
      />
      <Cta />
      <HomeBackground />
      <footer className="flex flex-col mt-auto">
        <p>
          &copy; {new Date().getFullYear()} EcomPanel. {t('copyrightText')}
        </p>
        <div className="flex bg-gradient-to-r from-blue-600/90 to-violet-600/90 w-full h-4 rounded-t dark:bg-gradient-to-r dark:from-indigo-500/90 dark:to-purple-900/90" />
      </footer>
    </main>
  )
}
