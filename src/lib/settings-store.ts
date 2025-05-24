'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Language = 'pl' | 'en'

interface SettingsState {
  language: Language
  setLanguage: (language: Language) => void
}

const setLocaleCookie = (locale: Language) => {
  if (typeof document !== 'undefined') {
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`
  }
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    set => ({
      language: 'pl',
      setLanguage: language => {
        set({ language })
        setLocaleCookie(language)
      }
    }),
    {
      name: 'settings'
    }
  )
)
