'use client'

import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, Heart } from 'lucide-react'

export default function Footer() {
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
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">SMA Negeri 1</div>
                <div className="text-xs text-cyan-300">Cemerlang</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Membentuk generasi cerdas, berakhlak mulia, dan berprestasi untuk masa depan Indonesia yang gemilang.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('tentang')} className="text-blue-200 hover:text-white transition-colors text-sm">
                  Tentang Sekolah
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('visi-misi')} className="text-blue-200 hover:text-white transition-colors text-sm">
                  Visi & Misi
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('fasilitas')} className="text-blue-200 hover:text-white transition-colors text-sm">
                  Fasilitas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('berita')} className="text-blue-200 hover:text-white transition-colors text-sm">
                  Berita
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ppdb')} className="text-blue-200 hover:text-white transition-colors text-sm">
                  PPDB
                </button>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Kalender Akademik
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  E-Learning
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Perpustakaan Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Alumni
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Download Formulir
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200 text-sm">
                  Jl. Pendidikan No. 123<br />
                  Kota Metropolitan 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-blue-200 text-sm">
                  (021) 1234-5678
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-blue-200 text-sm">
                  info@sman1.sch.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-200 text-sm text-center md:text-left">
              &copy; 2026 SMA Negeri 1 Cemerlang. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-blue-200 text-sm">
              Dibuat dengan <Heart className="w-4 h-4 text-red-400 mx-1" /> untuk pendidikan Indonesia
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
