'use client'

import { Eye, Target, Lightbulb, Heart, Trophy, Users } from 'lucide-react'

export default function VisiMisi() {
  const misiItems = [
    {
      icon: Lightbulb,
      title: 'Pembelajaran Berkualitas',
      description: 'Menyelenggarakan proses pembelajaran yang inovatif, kreatif, dan berbasis teknologi untuk mengembangkan potensi siswa secara optimal.'
    },
    {
      icon: Heart,
      title: 'Pembentukan Karakter',
      description: 'Membentuk karakter siswa yang berakhlak mulia, bertanggung jawab, dan memiliki nilai-nilai luhur Pancasila.'
    },
    {
      icon: Trophy,
      title: 'Prestasi Unggulan',
      description: 'Mendorong siswa untuk berprestasi di bidang akademik dan non-akademik melalui pembinaan dan kompetisi.'
    },
    {
      icon: Users,
      title: 'Lingkungan Kondusif',
      description: 'Menciptakan lingkungan sekolah yang aman, nyaman, dan kondusif untuk mendukung proses pembelajaran.'
    }
  ]

  return (
    <section id="visi-misi" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
            <span className="text-cyan-700 font-semibold">Visi & Misi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Arah dan Tujuan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Komitmen kami untuk menciptakan pendidikan berkualitas
          </p>
        </div>

        {/* Visi */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Visi Sekolah</h3>
              </div>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-4xl">
                &quot;Terwujudnya SMA Negeri 1 Cemerlang sebagai sekolah unggul yang menghasilkan lulusan cerdas, berakhlak mulia, berwawasan global, dan berbudaya lingkungan.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Misi */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Misi Sekolah</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {misiItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-cyan-600 font-bold text-lg">{index + 1}.</span>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
