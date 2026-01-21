'use client'

import { Microscope, Library, Monitor, Dumbbell, Palette, Globe } from 'lucide-react'
import Image from 'next/image'

export default function Facilities() {
  const facilities = [
    {
      icon: Library,
      title: 'Perpustakaan Modern',
      description: 'Koleksi lengkap buku dan jurnal dengan sistem digital',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5fGVufDF8fHx8MTc2ODk2NDY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Microscope,
      title: 'Laboratorium Sains',
      description: 'Lab Fisika, Kimia, dan Biologi berstandar internasional',
      image: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3Njg5NjQ2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Monitor,
      title: 'Laboratorium Komputer',
      description: 'Komputer modern dengan internet berkecepatan tinggi',
      image: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3Njg5NjQ2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Dumbbell,
      title: 'Fasilitas Olahraga',
      description: 'Lapangan basket, voli, dan fitness center',
      image: 'https://images.unsplash.com/photo-1649182462992-ea644b7f8155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZCUyMHNjaG9vbHxlbnwxfHx8fDE3Njg5NjQ2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'Ruang Seni & Musik',
      description: 'Studio seni dan musik untuk pengembangan kreativitas',
      image: 'https://images.unsplash.com/photo-1672073233308-f58af32a0761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njg5NTg5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Ruang Multimedia',
      description: 'Ruang presentasi dan pembelajaran berbasis teknologi',
      image: 'https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2ODg0MzM2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section id="fasilitas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
            <span className="text-cyan-700 font-semibold">Fasilitas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Fasilitas Lengkap & Modern
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mendukung proses pembelajaran dengan fasilitas terbaik
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/40">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-2xl transition-colors pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-center">
          <p className="text-white text-lg mb-4">
            Dan masih banyak fasilitas pendukung lainnya untuk kenyamanan belajar siswa
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm border border-white/30">Kantin Sehat</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm border border-white/30">Masjid</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm border border-white/30">Ruang UKS</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm border border-white/30">Parkir Luas</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm border border-white/30">WiFi</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm border border-white/30">CCTV</span>
          </div>
        </div>
      </div>
    </section>
  )
}
