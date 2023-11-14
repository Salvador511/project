import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Aritmos',
  description: 'Mates sin llorar',
}

export default function RootLayout({ children }) {
  return (

    

    <html lang="en">
      <body className="bg-gradient-to-r from-purple-400 to-orange-400 shadow-inner shadow-black">
        <nav>
        <Navbar/>
        </nav>
        {children}
        <footer>
        <Footer/>
        </footer>
      </body>
    </html>
  )
}
