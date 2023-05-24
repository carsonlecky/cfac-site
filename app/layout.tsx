import './globals.css'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'CFAC Portfolio Mangement',
  description: 'UBC\'s #1 Investment Club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <NavBar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
