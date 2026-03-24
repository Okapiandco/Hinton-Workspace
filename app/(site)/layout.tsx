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

      {/* Keap Form Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function (window, document) {
                var keapForms = window.keapForms || {
                    SNIPPET_VERSION: '1.1.0',
                    appId: 'btw525',
                };
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.crossOrigin = 'anonymous';
                script.defer = true;
                script.src = 'https://forms.keap.app/lib/public-form-embed.js?appId=btw525&version=1.1.0';
                script.onload = function () {
                    var keapFormsAfterLoad = window.keapForms;
                    if (!keapFormsAfterLoad.renderAllForms) {
                        console.error('[Keap Forms] Error: could not load');
                    } else if (!keapFormsAfterLoad.invoked) {
                        keapFormsAfterLoad.invoked = true;
                        keapFormsAfterLoad.renderAllForms();
                    }
                };
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
                window.keapForms = keapForms;
            }(window, document));
          `,
        }}
      />
    </>
  )
}
