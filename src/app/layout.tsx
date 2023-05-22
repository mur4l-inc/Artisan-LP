import { Header } from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/app/Providers'
import Navbar from '@/components/Navbar'
import { jost, noto, notojp } from './fonts'

const inter = Inter({ subsets: ['latin'] })

// import { Inter, Noto_Sans_JP, Noto_Sans, Jost } from 'next/font/google'
// const notojp = Noto_Sans_JP({
//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

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
      {/* variable: "--font-notojp",
variable: "--font-noto",
variable: "--font-jost", */}

      {/* <body className={inter.className}> */}
      <body className={`${jost.variable} ${notojp.variable} ${noto.variable}`}>
        {/* <Providers> */}
          {/* {Header} */}
          {/* <Header /> */}

          {/* {Navbar} */}
          {/* <Navbar /> */}

          {/* <SearchBox /> */}

          {children}
        {/* </Providers> */}
      </body>
    </html>
  )
}
