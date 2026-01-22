'use client'

import { Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllNews } from '@/app/data/newsData'

export default function News() {
  const news = getAllNews()

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
          <Link href={`/berita/${news[0].slug}`}>
            <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
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
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 hover:text-cyan-600 transition-colors">
                  {news[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {news[0].excerpt}
                </p>
                <div className="group inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all">
                  Baca Selengkapnya
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((item) => (
            <Link 
              key={item.id}
              href={`/berita/${item.slug}`}
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
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
                  <div className="group/btn inline-flex items-center gap-2 text-cyan-600 text-sm font-semibold hover:gap-3 transition-all">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        
      </div>
    </section>
  )
}
