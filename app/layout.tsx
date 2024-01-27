import './globals.css'
import type { Metadata } from 'next'
import SideBar from './components/SideBar'
import { Providers } from './provider'
import Navbar from './components/NavBar'

export const metadata: Metadata = {
  title: 'Geepay Analytics dashboard',
  description: "Geepay Frontend UI Challenge",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-layout dark:bg-gray-800">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <Providers>
            <div className="fixed top-0 w-full z-50">
              <Navbar />
            </div>
            <div className="fixed top-0 h-screen">
              <SideBar />
            </div>
            <div className="pl-20 lg:pl-20 pt-20 lg:pt-28 w-full h-screen overflow-hidden overflow-y-auto no-scrollbar children">
              {children}
            </div>
        </Providers>
      </body>
  </html>
  )
}
