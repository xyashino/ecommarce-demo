'use client'

import { LanguageCard } from '@/components/settings/language-card'
import { ThemeCard } from '@/components/settings/theme-card'
import { IconBuildingStore } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

export default function SettingsPage() {
  const t = useTranslations('Settings')

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="flex items-center gap-2">
        <IconBuildingStore className="h-6 w-6" />
        <h1 className="text-2xl font-bold">{t('title')}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <LanguageCard />
        <ThemeCard />
      </div>
    </div>
  )
}
