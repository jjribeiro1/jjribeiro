import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Header from '@/components/Header/Header'

export const metadata: Metadata = {
  title: 'jjribeirodev',
  description: 'Portfólio desenvolvedor full stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable} bg-slate-950`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
