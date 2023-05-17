import './globals.css'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CFAC',
  description: 'UBC\'s #1 Investment Club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="ogicon.png" />
      </Head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
