import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Analytics } from '@vercel/analytics/react'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    template: '%s – Ratrac Wiki',
    default: 'Ratrac Wiki',
  },
  robots: { index: false, follow: false },
}

const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/images/raettu_logo_rot.svg" height={48} width={48} alt="Ratrac" />
        <span style={{ fontSize: '1.5em', marginTop: '5px', marginLeft: '10px' }}>
          Ratrac Wiki
        </span>
      </div>
    }
    projectLink="https://github.com/bihorco36/ratrac-wiki"
  />
)

const footer = (
  <Footer>
    <Analytics />
    Ratrac Wiki
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: 360,
          saturation: { light: 90, dark: 60 },
        }}
      >
        <link rel="shortcut icon" type="image/x-icon" href="/images/red_r.svg" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          docsRepositoryBase="https://github.com/bihorco36/ratrac-wiki/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
