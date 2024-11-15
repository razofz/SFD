import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata = {
  title: 'SFD',
  description: 'Analyse single-cell RNA-sequencing data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased font-bold`}>
      <body>{children}</body>
    </html>
  )
}
