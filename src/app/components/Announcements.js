'use client'

import { Megaphone, Clock, Pin, Bell } from 'lucide-react'

export default function Announcements() {
  const announcements = [
    {
      title: 'Jadwal Ujian Akhir Semester Genap 2025/2026',
      description: 'Ujian akhir semester akan dilaksanakan mulai tanggal 1-10 Februari 2026. Siswa diharapkan mempersiapkan diri dengan baik.',
      date: '20 Januari 2026',
      priority: 'high',
      pinned: true
    },
    {
      title: 'Libur Semester dan Tahun Baru Imlek',
      description: 'Sekolah akan libur pada tanggal 29 Januari 2026 dalam rangka perayaan Tahun Baru Imlek. Kegiatan belajar dimulai kembali tanggal 30 Januari 2026.',
      date: '18 Januari 2026',
      priority: 'medium',
      pinned: true
    },
    {
      title: 'Pembayaran SPP Bulan Februari',
      description: 'Pembayaran SPP bulan Februari dapat dilakukan mulai tanggal 25 Januari s.d. 5 Februari 2026 melalui bank atau aplikasi.',
      date: '17 Januari 2026',
      priority: 'medium',
      pinned: false
    },
    {
      title: 'Pendaftaran Ekstrakurikuler Semester Genap',
      description: 'Pendaftaran ekstrakurikuler untuk semester genap dibuka mulai 22 Januari 2026. Tersedia berbagai pilihan ekskul menarik.',
      date: '16 Januari 2026',
      priority: 'low',
      pinned: false
    },
    {
      title: 'Workshop Persiapan SBMPTN 2026',
      description: 'Workshop khusus siswa kelas 12 akan diadakan setiap hari Sabtu mulai tanggal 27 Januari 2026. Gratis untuk semua siswa.',
      date: '15 Januari 2026',
      priority: 'high',
      pinned: false
    },
    {
      title: 'Lomba Karya Ilmiah Remaja Tingkat Sekolah',
      description: 'Pendaftaran lomba KIR dibuka hingga 31 Januari 2026. Hadiah menarik menanti pemenang. Info lebih lanjut hubungi OSIS.',
      date: '12 Januari 2026',
      priority: 'medium',
      pinned: false
    }
  ]

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'border-red-200 bg-red-50'
      case 'medium': return 'border-yellow-200 bg-yellow-50'
      case 'low': return 'border-blue-200 bg-blue-50'
      default: return 'border-gray-200 bg-gray-50'
    }
  }

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-700'
      case 'medium': return 'bg-yellow-100 text-yellow-700'
      case 'low': return 'bg-blue-100 text-blue-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getPriorityText = (priority) => {
    switch(priority) {
      case 'high': return 'Penting'
      case 'medium': return 'Perhatian'
      case 'low': return 'Info'
      default: return 'Info'
    }
  }

  return (
    <section id="pengumuman" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
            <span className="text-cyan-700 font-semibold">Pengumuman</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pengumuman Sekolah
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Informasi penting untuk siswa, orang tua, dan guru
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Announcements */}
          <div className="lg:col-span-2 space-y-6">
            {announcements.map((announcement, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl border-2 ${getPriorityColor(announcement.priority)} hover:shadow-lg transition-all duration-300`}
              >
                {/* Pinned Badge */}
                {announcement.pinned && (
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Pin className="w-5 h-5 text-white" />
                  </div>
                )}

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${announcement.priority === 'high' ? 'bg-red-100' : announcement.priority === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Megaphone className={`w-6 h-6 ${announcement.priority === 'high' ? 'text-red-600' : announcement.priority === 'medium' ? 'text-yellow-600' : 'text-blue-600'}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-3 py-1 ${getPriorityBadge(announcement.priority)} rounded-full text-xs font-semibold`}>
                        {getPriorityText(announcement.priority)}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {announcement.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {announcement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Aktifkan Notifikasi</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Dapatkan pemberitahuan pengumuman terbaru langsung ke perangkat Anda.
              </p>
              <button className="w-full px-4 py-3 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Aktifkan Sekarang
              </button>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Kontak Informasi</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Telepon</div>
                  <div className="text-gray-900 font-semibold">(021) 1234-5678</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Email</div>
                  <div className="text-gray-900 font-semibold">info@sman1.sch.id</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Jam Operasional</div>
                  <div className="text-gray-900 font-semibold">Senin - Jumat<br/>07:00 - 16:00 WIB</div>
                </div>
              </div>
            </div>

            {/* Archive */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Arsip Pengumuman</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lihat pengumuman sebelumnya di arsip kami
              </p>
              <button className="w-full px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-cyan-400 hover:text-cyan-600 transition-colors">
                Lihat Arsip
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
