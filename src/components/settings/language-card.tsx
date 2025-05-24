import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Language, useSettingsStore } from '@/lib/settings-store'
import { IconWorld } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function LanguageCard() {
  const { refresh } = useRouter()
  const t = useTranslations('Settings')
  const { language, setLanguage } = useSettingsStore()

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    toast.success(t('saved'))
    refresh()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconWorld className="h-5 w-5" />
          {t('language')}
        </CardTitle>
        <CardDescription>{t('languageDescription')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select value={language} onValueChange={handleLanguageChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pl">{t('polish')}</SelectItem>
            <SelectItem value="en">{t('english')}</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}
