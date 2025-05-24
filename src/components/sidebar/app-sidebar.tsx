'use client'

import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconLogout,
  IconSettings,
  IconUsers
} from '@tabler/icons-react'
import * as React from 'react'

import { LogoLink } from '@/components/logo-link'
import { NavMain } from '@/components/sidebar/nav-main'
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { NAVIGATION } from '../../lib/navigation'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations('Navigation')

  const MAIN_NAVIGATION = [
    {
      title: t('dashboard'),
      url: NAVIGATION.DASHBOARD,
      icon: IconDashboard
    },
    {
      title: t('products'),
      url: NAVIGATION.PRODUCTS,
      icon: IconFolder
    },
    {
      title: t('orders'),
      url: NAVIGATION.ORDERS,
      icon: IconChartBar
    },
    {
      title: t('customers'),
      url: NAVIGATION.CUSTOMERS,
      icon: IconUsers
    },
    {
      title: t('settings'),
      url: NAVIGATION.SETTINGS,
      icon: IconSettings
    }
  ]

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <LogoLink />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={MAIN_NAVIGATION} />
      </SidebarContent>
      <SidebarFooter>
        <Button size="sm" className="w-full gap-2 items-center" asChild>
          <Link href="/">
            {t('logout')}
            <IconLogout />
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
