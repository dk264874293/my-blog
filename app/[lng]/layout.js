import siteMetadata from '@/data/siteMetadata'
import "./globals.css";
import { ThemeProviders } from './theme-providers'
import { WebVitals } from '@/components/WebVitals.js'
import ThemeSwitch from '@/components/ThemeSwitch';
import LangSwitch from '@/components/LangSwitch';
import { dir } from 'i18next'

export async function generateMetadata(){
  return siteMetadata.languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body>
        <WebVitals />
        <ThemeProviders>
          <header className="flex justify-end">
            <ThemeSwitch />
            <LangSwitch />
          </header>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
