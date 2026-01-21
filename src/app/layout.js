import './globals.css'

export const metadata = {
  title: 'SMA Negeri 1 Cemerlang - Sekolah Unggulan',
  description: 'Website resmi SMA Negeri 1 Cemerlang - Membentuk generasi cerdas, berakhlak mulia, dan berprestasi',
  keywords: 'SMA, sekolah, pendidikan, PPDB, sekolah negeri, SMA unggulan',
  authors: [{ name: 'SMA Negeri 1 Cemerlang' }],
  openGraph: {
    title: 'SMA Negeri 1 Cemerlang',
    description: 'Sekolah unggulan dengan fasilitas modern dan prestasi gemilang',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
