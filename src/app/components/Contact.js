'use client'

import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
            <span className="text-cyan-700 font-semibold">Hubungi Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kontak & Lokasi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu menjawab pertanyaan Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-cyan-50/30 rounded-3xl p-8 border-2 border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="08xx-xxxx-xxxx"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Topik pesan"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Kirim Pesan
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Alamat Sekolah</h4>
                  <p className="text-gray-600">
                    Jl. Pendidikan No. 123, Kelurahan Cemerlang<br />
                    Kecamatan Maju, Kota Metropolitan<br />
                    Provinsi Nusantara 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Telepon</h4>
                  <p className="text-gray-600">
                    Kantor: (021) 1234-5678<br />
                    WhatsApp: 0812-3456-7890<br />
                    Fax: (021) 1234-5679
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">
                    Umum: info@sman1.sch.id<br />
                    PPDB: ppdb@sman1.sch.id<br />
                    Kesiswaan: kesiswaan@sman1.sch.id
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-white mb-4">Ikuti Media Sosial Kami</h4>
              <div className="grid grid-cols-4 gap-4">
                <a 
                  href="#" 
                  className="w-full aspect-square bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 border border-white/40"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-full aspect-square bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 border border-white/40"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-full aspect-square bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 border border-white/40"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-full aspect-square bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 border border-white/40"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-white/90 text-sm">
                  @sman1cemerlang | #BerprestasiDenganKami
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-2xl h-64 overflow-hidden border-2 border-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm">Peta Lokasi Sekolah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
