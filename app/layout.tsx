import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Rizky — Full Stack Developer & Mobile Apps Engineer',
  description:
    'Portfolio of Rizky, a Full Stack Developer and Mobile Apps Engineer specializing in web and mobile applications.',
  openGraph: {
    title: 'Rizky — Full Stack Developer & Mobile Apps Engineer',
    description: 'Full Stack Developer · Mobile Apps Engineer · AI Agent Builder · Illustrator',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rizky — Full Stack Developer & Mobile Apps Engineer',
    description: 'Full Stack Developer · Mobile Apps Engineer · AI Agent Builder · Illustrator',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-bg text-[#e5e5e5] antialiased`}>
        {children}
      </body>
    </html>
  )
}
