import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('locale')?.value
  const locale = localeCookie || 'pl'

  return {
    locale,
    timeZone: 'Europe/Warsaw',
    messages: (await import(`../translations/${locale}.json`)).default
  }
})
