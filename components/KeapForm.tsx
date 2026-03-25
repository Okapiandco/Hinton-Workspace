'use client'

import { useEffect } from 'react'

export default function KeapForm() {
  useEffect(() => {
    const keapForms = (window as any).keapForms || {
      SNIPPET_VERSION: '1.1.0',
      appId: 'btw525',
    }

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.crossOrigin = 'anonymous'
    script.defer = true
    script.src =
      'https://forms.keap.app/lib/public-form-embed.js?appId=btw525&version=1.1.0'

    script.onload = function () {
      const keapFormsAfterLoad = (window as any).keapForms

      if (!keapFormsAfterLoad.renderAllForms) {
        console.error('[Keap Forms] Error: could not load')
      } else if (!keapFormsAfterLoad.invoked) {
        keapFormsAfterLoad.invoked = true
        keapFormsAfterLoad.renderAllForms()
      }
    }

    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(script, firstScriptTag)
    ;(window as any).keapForms = keapForms

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div
      data-form-slug="7720576008292403"
      data-env="production"
      data-path="contact-us/7720576008292403"
      className="keap-custom-form"
    />
  )
}
