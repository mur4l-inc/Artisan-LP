import { Header } from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/app/Providers'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alpine',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
    >
      {/* style={{ colorScheme: 'light' }}
      className="light" */}
      <body className={inter.className}>
        <Providers>
          {/* {Header} */}
          <Header />

          {/* {Navbar} */}
          <Navbar />

          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  )
}
