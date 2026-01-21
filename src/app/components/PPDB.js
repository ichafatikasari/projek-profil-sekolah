'use client'

import { FileText, Calendar, CheckCircle, Users, ClipboardCheck, UserCheck } from 'lucide-react'

export default function PPDB() {
  const timeline = [
    {
      phase: 'Pendaftaran Online',
      date: '1 - 15 Maret 2026',
      description: 'Pendaftaran melalui website resmi sekolah',
      icon: FileText,
      status: 'upcoming'
    },
    {
      phase: 'Seleksi Administrasi',
      date: '16 - 20 Maret 2026',
      description: 'Verifikasi dokumen dan berkas pendaftaran',
      icon: ClipboardCheck,
      status: 'upcoming'
    },
    {
      phase: 'Tes Masuk',
      date: '25 - 27 Maret 2026',
      description: 'Tes akademik dan wawancara',
      icon: CheckCircle,
      status: 'upcoming'
    },
    {
      phase: 'Pengumuman',
      date: '1 April 2026',
      description: 'Pengumuman hasil seleksi',
      icon: UserCheck,
      status: 'upcoming'
    }
  ]

  const requirements = [
    'Fotocopy Ijazah/SKHUN SMP yang dilegalisir',
    'Fotocopy Kartu Keluarga',
    'Fotocopy Akta Kelahiran',
    'Pas foto 3x4 (4 lembar) dan 4x6 (2 lembar)',
    'Fotocopy raport SMP semester 1-5',
    'Surat keterangan sehat dari dokter',
    'Surat kelakuan baik dari sekolah asal'
  ]

  const jalurPendaftaran = [
    {
      title: 'Jalur Prestasi',
      description: 'Untuk siswa yang memiliki prestasi akademik atau non-akademik',
      icon: '🏆',
      kuota: '20%'
    },
    {
      title: 'Jalur Zonasi',
      description: 'Berdasarkan domisili terdekat dengan sekolah',
      icon: '📍',
      kuota: '50%'
    },
    {
      title: 'Jalur Umum',
      description: 'Seleksi berdasarkan nilai ujian masuk',
      icon: '📝',
      kuota: '30%'
    }
  ]

  return (
    <section id="ppdb" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
            <span className="text-cyan-700 font-semibold">PPDB 2026/2027</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Penerimaan Peserta Didik Baru
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bergabunglah bersama kami dan raih masa depan cemerlang
          </p>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 sm:p-12 mb-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Pendaftaran Dibuka!
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Raih kesempatan menjadi bagian dari SMA Negeri 1 Cemerlang. Daftarkan diri Anda sekarang!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Daftar Online Sekarang
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all">
                Download Brosur
              </button>
            </div>
          </div>
        </div>

        {/* Jalur Pendaftaran */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Jalur Pendaftaran</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {jalurPendaftaran.map((jalur, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-cyan-400 transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4">{jalur.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{jalur.title}</h4>
                <p className="text-gray-600 mb-4">{jalur.description}</p>
                <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
                  Kuota: {jalur.kuota}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Timeline Pendaftaran</h3>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-300"></div>
            
            <div className="grid md:grid-cols-4 gap-6 relative">
              {timeline.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-cyan-600 mb-2">{item.date}</div>
                        <h4 className="font-bold text-gray-900 mb-2">{item.phase}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                    {/* Connector for mobile */}
                    {index < timeline.length - 1 && (
                      <div className="md:hidden h-6 w-1 bg-cyan-300 mx-auto my-2"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Persyaratan</h3>
            </div>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Informasi Kontak</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500 mb-1">Panitia PPDB</div>
                <div className="text-gray-900 font-semibold">0812-3456-7890</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="text-gray-900 font-semibold">ppdb@sman1.sch.id</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Website</div>
                <div className="text-cyan-600 font-semibold">www.ppdb.sman1.sch.id</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Jam Layanan</div>
                <div className="text-gray-900 font-semibold">Senin - Jumat: 08:00 - 15:00 WIB<br/>Sabtu: 08:00 - 12:00 WIB</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
              <p className="text-sm text-gray-700">
                <strong>Catatan:</strong> Pastikan semua dokumen telah dipersiapkan dengan baik sebelum melakukan pendaftaran online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
