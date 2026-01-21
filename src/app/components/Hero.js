'use client'

import { ArrowRight, Award, Users, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1672073233308-f58af32a0761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njg5NTg5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="School Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-cyan-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full">
            <span className="text-cyan-300 text-sm font-medium">Terakreditasi A</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Selamat Datang di <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              SMA Negeri 1 Cemerlang
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Membentuk generasi cerdas, berakhlak mulia, dan berprestasi dengan pendidikan berkualitas dan fasilitas modern untuk masa depan gemilang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={() => scrollToSection('ppdb')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('tentang')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Tentang Kami
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-cyan-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-cyan-300" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-xs sm:text-sm text-blue-200">Siswa Aktif</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-cyan-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-cyan-300" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-xs sm:text-sm text-blue-200">Guru Profesional</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-cyan-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-cyan-300" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-xs sm:text-sm text-blue-200">Prestasi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
