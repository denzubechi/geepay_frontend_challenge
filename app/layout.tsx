import './globals.css'
import type { Metadata } from 'next'
import SideBar from './components/SideBar'
import { Providers } from './provider'
import Navbar from './components/NavBar'

export const metadata: Metadata = {
  title: 'Geepay-frontend-UI Challenge',
  description: "Analytics dashboard",
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
      <body className='bg-layout dark:bg-gray-900'>
      <link rel="icon" href="/favicon.ico" sizes="any" />
          <Providers>
            <div className="flex absolute w-full">
            <Navbar />
          </div>
          <div className="flex min-h-screen">
            <SideBar />
            <div className="pl-20 lg:pl-20 pt-24 w-full h-screen overflow-hidden overflow-y-auto no-scrollbar children">
              {children}
            </div>
          </div>
          </Providers>
      </body>
    </html>
  )
}
