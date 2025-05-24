import { DemoBackground } from '@/components/demo/demo-background'
import { AppSidebar } from '@/components/sidebar/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { CSSProperties, PropsWithChildren } from 'react'

export default function Page({ children }: PropsWithChildren) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)'
        } as CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="w-full h-full overflow-y-auto overflow-x-hidden p-4">
          {children}
        </div>
      </SidebarInset>
      <DemoBackground />
    </SidebarProvider>
  )
}
