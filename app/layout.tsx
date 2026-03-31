import type { Metadata, Viewport } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
import { Nunito_Sans } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1117' }
  ],
}
export const metadata: Metadata = {
  metadataBase: new URL('https://takumifahri.my.id'),
  title: 'Fahri Radiansyah | Backend Developer & System Design',
  description: 'Interactive terminal portfolio of Fahri Radiansyah - Software Engineering student at IPB University. Backend developer with expertise in Laravel, FastAPI, and system architecture.',
  generator: 'Next.js',
  applicationName: 'Portfolio Terminal',
  authors: [
    {
      name: 'Fahri Radiansyah',
      url: 'https://takumifahri.my.id',
    }
  ],
  keywords: [
    'Backend Developer',
    'Laravel',
    'FastAPI',
    'System Design',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Web Development',
    'Software Engineer',
    'IPB University',
    'Portfolio'
  ],
  creator: 'Fahri Radiansyah',
  publisher: 'Fahri Radiansyah',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://takumifahri.my.id',
    siteName: 'Fahri Radiansyah Portfolio',
    title: 'Fahri Radiansyah | Backend Developer & System Design',
    description: 'Interactive terminal portfolio showcasing projects and skills in backend development, system design, and web architecture.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fahri Radiansyah Portfolio',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahri Radiansyah | Backend Developer & System Design',
    description: 'Interactive terminal portfolio with projects and technical expertise',
    images: ['/twitter-image.png'],
    creator: '@takumifahri',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#39FF14',
      }
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1117' }
  ],
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark h-screen overflow-hidden m-0">
      <head>
        {/* Preconnect untuk font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://takumifahri.my.id" />

        {/* Mobile Web App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Portfolio Terminal" />

        {/* Additional Meta */}
        <meta name="msapplication-TileColor" content="#0D1117" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${jetbrainsMono.className} antialiased h-screen overflow-hidden m-0 p-0`}
        style={{ backgroundColor: '#0D1117', color: '#39FF14' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}