export const metadata = {
  title: 'SFD',
  description: 'Analyse single-cell RNA-sequencing data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
