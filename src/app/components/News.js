'use client'

import { Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function News() {
  const news = [
    {
      title: 'Siswa SMA Negeri 1 Juara Olimpiade Sains Nasional',
      excerpt: 'Tim sains sekolah berhasil meraih medali emas di ajang Olimpiade Sains Nasional 2026 kategori Fisika dan Kimia.',
      date: '15 Januari 2026',
      category: 'Prestasi',
      image: 'https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2ODg0MzM2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      categoryColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      title: 'Peluncuran Program Beasiswa Prestasi 2026',
      excerpt: 'Sekolah meluncurkan program beasiswa bagi siswa berprestasi dengan total dana 500 juta rupiah untuk tahun ajaran baru.',
      date: '10 Januari 2026',
      category: 'Program',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5fGVufDF8fHx8MTc2ODk2NDY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      categoryColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Kerjasama dengan Universitas Terkemuka',
      excerpt: 'SMA Negeri 1 menandatangani MoU dengan 5 universitas terkemuka untuk program akselerasi kuliah dan riset bersama.',
      date: '5 Januari 2026',
      category: 'Kerjasama',
      image: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3Njg5NjQ2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      categoryColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Festival Seni dan Budaya Sekolah 2026',
      excerpt: 'Penampilan memukau dari siswa dalam acara festival seni dan budaya tahunan dengan tema "Merajut Nusantara".',
      date: '28 Desember 2025',
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1672073233308-f58af32a0761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njg5NTg5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      categoryColor: 'bg-purple-100 text-purple-700'
    },
    {
      title: 'Renovasi Laboratorium IPA Selesai',
      excerpt: 'Laboratorium IPA kini dilengkapi dengan peralatan modern dan teknologi terkini untuk mendukung praktikum siswa.',
      date: '20 Desember 2025',
      category: 'Fasilitas',
      image: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3Njg5NjQ2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      categoryColor: 'bg-cyan-100 text-cyan-700'
    },
    {
      title: 'Tim Basket Raih Juara Kejuaraan Antar Sekolah',
      excerpt: 'Tim basket putra berhasil menjuarai kejuaraan basket antar SMA se-provinsi setelah pertandingan yang ketat.',
      date: '15 Desember 2025',
      category: 'Prestasi',
      image: 'https://images.unsplash.com/photo-1649182462992-ea644b7f8155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZCUyMHNjaG9vbHxlbnwxfHx8fDE3Njg5NjQ2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      categoryColor: 'bg-yellow-100 text-yellow-700'
    }
  ]

  return (
    <section id="berita" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
            <span className="text-cyan-700 font-semibold">Berita Terkini</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Berita & Kegiatan Sekolah
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Update terbaru tentang kegiatan dan prestasi sekolah
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={news[0].image}
                alt={news[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 ${news[0].categoryColor} rounded-full text-sm font-semibold`}>
                  {news[0].category}
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <span>{news[0].date}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {news[0].title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {news[0].excerpt}
              </p>
              <button className="group inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all">
                Baca Selengkapnya
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${item.categoryColor} rounded-full text-xs font-semibold backdrop-blur-sm`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <button className="group/btn inline-flex items-center gap-2 text-cyan-600 text-sm font-semibold hover:gap-3 transition-all">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </section>
  )
}
