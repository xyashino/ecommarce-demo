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
import { IconPalette } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'

export function ThemeCard() {
  const t = useTranslations('Settings')
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    toast.success(t('saved'))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconPalette className="h-5 w-5" />
          {t('theme')}
        </CardTitle>
        <CardDescription>{t('themeDescription')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Select value={theme} onValueChange={handleThemeChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">{t('light')}</SelectItem>
            <SelectItem value="dark">{t('dark')}</SelectItem>
            <SelectItem value="system">{t('system')}</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}
