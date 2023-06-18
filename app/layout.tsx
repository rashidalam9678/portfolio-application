import './globals.css'
import { Navbar,Footer } from '@/components'


export const metadata = {
  title: 'Mohd Rashid',
  description: 'Mohd Rashid portfolio web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
