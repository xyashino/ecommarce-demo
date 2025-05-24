'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function Cta() {
  const t = useTranslations('Home')

  return (
    <section
      className={cn(
        'flex my-10 flex-col gap-5 py-5 text-center bg-gradient-to-r from-blue-500/90 to-violet-700/90 text-white rounded',
        'dark:bg-gradient-to-r dark:from-indigo-500 dark:to-purple-900/50'
      )}
    >
      <h2 className="text-3xl font-bold capitalize max-w-sm mx-auto">
        {t('ctaTitle')}
      </h2>
      <Button asChild size="lg" variant="default" className="w-fit mx-auto">
        <Link href="/demo">{t('checkDemo')}</Link>
      </Button>
    </section>
  )
}
