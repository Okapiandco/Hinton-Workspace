import SiteLayout from '@/components/layout/RootLayout'
import CookieConsent from '@/components/ui/CookieConsent'
import '../globals.css'

export default function SiteRouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteLayout>{children}</SiteLayout>
      <CookieConsent />
    </>
  )
}
